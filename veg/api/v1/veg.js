var RESOURCE_NAME = "veg";
var VERSION = "v1";
var URI = "/" + VERSION + "/" + RESOURCE_NAME;

const { select, save } = require("../../db/veg");

var mcache = require("memory-cache");
var cache = (duration) => {
  return (req, res, next) => {
    let key = "_express_" + req.originalUrl || req.url;
    let cachedBody = mcache.get(key);
    if (cachedBody) {
      res.send(cachedBody);
      return;
    } else {
      res.sendResponse = res.send;
      res.send = (body) => {
        mcache.put(key, body, duration * 1000);
        res.sendResponse(body);
      };
      next();
    }
  };
};

module.exports = function (router) {
  "use strict";

  router.route(URI).get(cache(5), function (req, res, next) {
    console.log("GET VEG CART");

    var fields = {};
    if (req.query && req.query.fields !== undefined) {
      fields = createFields(req.query.fields);
    }

    //2. paginations
    var pagination = { limit: 0, offset: 0 };
    if (req.query && req.query.limit !== undefined) {
      // checks should be made that limit is a number
      pagination.limit = req.query.limit;
    }
    if (req.query && req.query.offset !== undefined) {
      // checks should be made that limit is a number
      pagination.offset = req.query.offset;
    }

    //2. Setup options
    var options = {
      fields: fields,
      limit: parseInt(pagination.limit),
      offset: parseInt(pagination.offset),
    };
    console.log(options);

    var criteria = {};

    select(criteria, options, (err, docs) => {
      if (err) {
        console.log(err);
        res.status(500);
        res.send("Error connecting to db");
      } else {
        if (docs.length == 0) {
          res.status(404);
        }
        console.log("Retrieved  = %d", docs.length);

        res.send(docs);
      }
    });
  });
  function createFields(str) {
    var arr = str.split(",");
    str = "{";
    for (var i = 0; i < arr.length; i++) {
      str += '"' + arr[i] + '":1';
      if (i < arr.length - 1) str += ",";
    }
    str += "}";
    return JSON.parse(str);
  }

  router.route(URI).post(function (req, res, next) {
    console.log("POST");
    var doc = req.body;
    save(doc, function (err, saved) {
      if (err) {
        var userError = processMongooseErrors(
          _errors.API_MESSAGE_CREATE_FAILED,
          "POST",
          URI,
          err,
          {}
        );
        res.setHeader("content-type", "application/json");
        res.status(400).send("Error");
      } else {
        res.send(saved);
      }
    });
  });
};

var processMongooseErrors = function (message, method, endpoint, err, payload) {
  var errorList = [];
  if (err.name === "ValidationError") {
    errorList = processValidationErrors(err);
  } else if (err.code == 11000) {
    errorList.push(errors.VEGETABLE_ID_ALREADY_EXISTS);
  } else {
    var errUnknown = errors.UNKNOWN_ERROR;
    errUnknown.payload = err;
    errorList = [errors.UNKNOWN_ERROR];
  }
  return create(message, method, endpoint, errorList, payload);
};

var processValidationErrors = function (err) {
  var errorList = [];

  if (err.errors.id) {
    if (err.errors.id.kind === kinds.REQUIRED) {
      errorList.push(errors.MISSING_VEGETABLE_ID);
    }
  }
  if (err.errors.name) {
    if (err.errors.name.kind === kinds.REQUIRED) {
      errorList.push(errors.MISSING_VEGETABLE_NAME);
    }
  }

  if (err.errors.type) {
    if (err.errors.type.kind === kinds.REQUIRED) {
      errorList.push(errors.MISSING_VEGETABLE_TYPE);
    }
  }

  if (err.errors.name) {
    if (err.errors.supplierDetails.name.kind === kinds.REQUIRED) {
      errorList.push(errors.MISSING_VEGETABLE_SELLER_NAME);
    }
  }

  return errorList;
};

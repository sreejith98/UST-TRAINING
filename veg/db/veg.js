const model = require("../models/veg");
var settings = require("../db/settings");

exports.save = function (data, callback) {
  new model.VegSchema(data).save((err, inserted) => {
    callback(err, inserted);
  });
};

exports.update = (criteria, doc, callback) => {
  model.VegSchema.updateOne(criteria, doc, { upsert: true }, (err, data) => {
    callback(err, data);
  });
};

exports.select = (criteria, options, callback) => {
  model.VegSchema.find(criteria, (err, data) => {
    callback(err, data);
  })
    .select(options.fields)
    .skip(options.offset)
    .limit(options.limit);
};

exports.delete = (criteria, callback) => {
  model.VegSchema.deleteOne(
    criteria,
    (err,
    (data) => {
      callback(err, data);
    })
  );
};

exports.saveMany = (rows, callback) => {
  model.VegSchema.insertMany(rows, (err, docs) => {
    callback(err, docs);
  });
};

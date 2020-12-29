exports.errors = {
  // This is a catch all error
  // Ideally this should never be thrown
  UNKNOWN_ERROR: {
    code: 5000,
    text: "Unknown error !!!",
    hints: [
      "Please contact development team wit information on 'how to reproduce this error'. Thank you for your help and support.",
    ],
    info: "http://vegcart/vegitables/unknownerror",
  },

  VEGETABLE_ID_ALREADY_EXISTS: {
    code: 6000,
    text: "Destination  with the provided 'id' already exist",
    hints: ["Please use PUT for update instead of POST"],
    info: "http://vegcart/vegitables/errors#6000",
  },

  // All required/missing field errors start with number 7
  MISSING_VEGETABLE_TYPE: {
    code: 7000,
    text: "Required field destination 'type' is missing",
    hints: [
      "Please check that user has provided the non null value for 'type'",
    ],
    info: "http://vegcart/vegitables/error#RequiredFields",
  },
  MISSING_VEGETABLE_MOQ: {
    code: 7001,
    text: "Required field destination 'id' is missing",
    hints: ["Please check that user has provided the non null value for 'MOQ'"],
    info: "http://vegcart/vegitables/error#RequiredFields",
  },
  MISSING_VEGETABLE_NAME: {
    code: 7002,
    text: "Required field destination 'name' is missing",
    hints: [
      "Please check that user has provided the non null value for 'name'",
    ],
    info: "http://vegcart/vegitables/error#RequiredFields",
  },
  MISSING_VEGETABLE_SELLER_NAME: {
    code: 7004,
    text: "Required fields destinaton 'seller name' is missing",
    hints: [
      "Please check that user has provided the non null value for description",
    ],
    info: "http://vegcart/vegitables/error#RequiredFields",
  },
};

exports.create = function (
  message,
  httpMethod,
  endpointInformation,
  errorList,
  receivedPayload
) {
  return {
    // Meant for the developer
    text: message,
    timestamp: new Date(),
    // POST, GET ....
    method: httpMethod,
    // Endpoint information
    endpoint: endpointInformation,
    // An array of all errors
    errors: errorList,
    // OPTIONAL - Use only during development
    payload: receivedPayload,
  };
};

exports.kinds = {
  REQUIRED: "required",
  NOT_VALID: "notvalid",
  NUMBER_ERROR: "Number",
  MIN_ERROR: "min",
  MAX_ERROR: "max",
};

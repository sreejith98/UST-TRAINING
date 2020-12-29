var settings = require("../db/settings");

var VegSchema = settings.mongoose.Schema({
  name: { type: String, required: [true, "name is needed"] },
  price: { type: Number, required: true },
  moq: { type: Number, required: true },
  place: { landmark: String, district: String, state: String, pin: Number },
  leadTime: { type: Number, required: true },
  supplierDetails: { Name: String, Phone: Number },
  size: { type: Number, required: true },
  pictures: { type: [String] },
});

exports.VegSchema = settings.mongoose.model("veg", VegSchema);


process.env.DB_URI = require("../db/clouddb").DB_URI  ;
var db = require("../db/veg");
var { SingleRow, MultipleRows } = require("../data/details");

db.save(SingleRow, function (err, saved) {
  if (err) {
    console.log("Failed single row save");
    console.log(err)
   
  } else {
    console.log("Success - Save single row - %s", saved.name);
  }
});

db.saveMany(MultipleRows, function (err, docs) {
  if (err) {
    console.log("Failed multiple row insert");
    console.log(err)
   
  } else {
    console.log("Success - Multiple rows inserted - %d", docs.length);
  }
});

//  var selectCriteria = { validTill: { $gt: new Date() } };
//  db.select(selectCriteria, function (err, data) {
//    if (err) {
//      console.log("Failed to get  : %s", criteria);
//      console.log(err);
//    } else {
//      console.log(
//       "Successfully selected %d documents for %s",
//       data.length,
//        JSON.stringify(selectCriteria)
//      );
//    }
//  });

// var updateCriteria = { name: "BAHAMAS1000" };
// var doc = { description: "UPDATED Desc for TESTING" };
// db.update(updateCriteria, doc, function (err, doc) {
//   if (err) {
//     console.log("Failed to get update");
//     console.log(err);
//   } else {
//     console.log("Successfully updated with criteria %s", updateCriteria);
//   }
// });

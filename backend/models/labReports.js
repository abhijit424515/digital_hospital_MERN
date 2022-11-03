const mongoose = require("mongoose");

const labReportsSchema = mongoose.Schema({
    rollNo: String,
    labReports: [{
      title: String,
      link: String,
      timeStamp: { type : Date, default: Date.now }
    }],
});

module.exports = mongoose.model("labReport",labReportsSchema)

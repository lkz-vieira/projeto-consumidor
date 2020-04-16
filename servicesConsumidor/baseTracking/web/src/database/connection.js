const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://root:myP4ssw0rd@172.25.0.8:27017/dbTracking?authSource=admin",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  function (error) {
    if (error) throw error;
  }
);

module.exports = mongoose;

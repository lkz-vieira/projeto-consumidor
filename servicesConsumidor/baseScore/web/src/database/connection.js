const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://root:myP4ssw0rd@172.25.0.11:27017/dbScore?authSource=admin",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  function (error) {
    if (error) throw error;
  }
);

module.exports = mongoose;

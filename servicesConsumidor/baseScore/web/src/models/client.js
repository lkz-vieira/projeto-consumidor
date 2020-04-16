const mongoose = require("../database/connection");

const ClientSchema = new mongoose.Schema({
  cpf: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
  },
  fonte_renda: {
    type: String,
  },
  assets: {
    type: Array,
  },
});

const Client = mongoose.model("clients", ClientSchema);

module.exports = Client;

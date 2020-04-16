const mongoose = require("../database/connection");

const ClientSchema = new mongoose.Schema({
  cpf: {
    type: String,
    require: true,
  },
  last_search: {
    type: Date,
  },
  last_buy: {
    type: Array,
  },
  financial_movement: {
    type: Array,
  },
});

const Client = mongoose.model("clients", ClientSchema);

module.exports = Client;

const Client = require("../models/client");

module.exports = {
  async show(request, response) {
    const { cpf } = request.body;

    await Client.findOne({ cpf: cpf }).exec(function (err, client) {
      if (err) throw err;
      return response.json(client);
    });
  },
};

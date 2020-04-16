const connection = require("../database/connection");
const axios = require("axios");

module.exports = {
  async index(request, response) {
    const clients = await connection("clients").select("*");
    return response.json(clients);
  },

  async show(request, response) {
    const { cpf } = request.body;
    const token = request.headers.authorization;

    const client = await connection("clients").where("cpf", cpf).first();

    if (!client) {
      return response.status(404).json({ error: "Not Found!" });
    }

    const score = await axios
      .post(
        "http://172.25.0.10:3003/score",
        { cpf: cpf },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((response) => {
        return response.data;
      });

    const tracking = await axios
      .post("http://172.25.0.9:3004/track", {
        cpf: cpf,
      })
      .then((response) => {
        return response.data;
      });

    var result = Object.assign(client, score, tracking);
    return response.send(result);
  },
};

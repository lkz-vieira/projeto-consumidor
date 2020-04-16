const Client = require("../models/client");
const clientRedis = require("../config/redis");

module.exports = {
  show(request, response) {
    const { cpf } = request.body;

    clientRedis.get("trackClient:" + cpf, (err, reply) => {
      if (reply) {
        //const replyJSON = JSON.parse(reply);
        return response.status(200).send(reply);
      } else {
        Client.findOne({ cpf: cpf })
          .then((value) => {
            clientRedis.set("trackClient:" + cpf, JSON.stringify(value));
            clientRedis.expire("trackClient:" + cpf, 30);
            return response.status(200).send(value);
          })
          .catch((err) => response.status(500).send(err));
      }
    });
  },
};

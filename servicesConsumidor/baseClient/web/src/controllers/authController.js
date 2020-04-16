const connection = require("../database/connection");
const authConfig = require("../config/auth");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  async index(request, response) {
    const { email, password } = request.body;
    
    const user = await connection("users").where("email", email).first();

    if (!user) {
      return response.status(400).send({ error: "User not found." });
    }

    if (!(await bcrypt.compare(password, user.password))) {
      return response.status(400).send({ error: "Invalid password" });
    }

    const token = jwt.sign({ id: user.id }, authConfig.secret, {
      expiresIn: 86400,
    });

    return response.json({ email: user.email, name: user.name, id: user.id, token: token });
  },
};

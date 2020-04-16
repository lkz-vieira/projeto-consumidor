const express = require("express");
const routes = express.Router();
const clientsController = require("./controllers/clientsController");
const authController = require("./controllers/authController");
const authMiddleware = require("./middlewares/auth");

routes.post("/login", authController.index);

routes.get("/clients", authMiddleware, clientsController.index);
routes.post("/client", authMiddleware, clientsController.show);

routes.get("/", (req, res) => {
  res.send("It's work with webClient!");
});

module.exports = routes;

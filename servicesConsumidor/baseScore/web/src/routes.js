const express = require("express");
const routes = express.Router();
const scoreController = require("./controllers/scoreController");
const authMiddleware = require("./middlewares/auth");

routes.post("/score/", authMiddleware, scoreController.show);

routes.get("/", (req, res) => {
  res.send("It's work with webScore!");
});

module.exports = routes;

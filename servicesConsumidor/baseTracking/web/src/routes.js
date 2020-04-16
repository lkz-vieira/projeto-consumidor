const express = require("express");
const routes = express.Router();
const trackController = require("./controllers/trackController");

routes.post("/track/", trackController.show);

routes.get("/", (req, res) => {
  res.send("It's work with webTracking!");
});

module.exports = routes;

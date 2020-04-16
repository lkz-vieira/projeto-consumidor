const express = require("express");
const routes = require("./routes");
const bodyParse = require("body-parser");
const app = express();

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: false }));

app.use(routes);

app.listen(3004);

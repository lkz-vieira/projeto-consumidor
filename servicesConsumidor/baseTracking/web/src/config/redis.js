const redis = require("redis");
const host = "172.25.0.7";
const port = "6379";
const clientRedis = redis.createClient(port, host);

clientRedis.on("error", function (err) {
  console.log("==> Falha na conexão com o REDIS: " + err);
});

module.exports = clientRedis;

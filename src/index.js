const app = require("./app");
const http = require("http");
const config = require("./utility/config");
const logger = require("./utility/logger");

const server = http.createServer(app);
server.listen(config.PORT, () => {
  logger.info("server is running on port: ", config.PORT);
});
  
const cors = require("cors");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8086;
const eurekaHelper = require('./eureka-helper');
global.__basedir = __dirname;

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

const initRoutes = require("./src/routes");

app.use(express.urlencoded({ extended: true }));
initRoutes(app);

let port = 8086;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});
eurekaHelper.registerWithEureka('UPLOAD-IMAGE', PORT);
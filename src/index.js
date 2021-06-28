const express = require("express");
const app = express();
const cors = require("cors");

const { router } = require("./routes");

require("./database")(`mongodb://mongodb:27017/delivery`);

app.use(express.json());
app.use(cors());

app.use("/api", router);

const port = process.env.PORT || "8080";
app.listen(port);

module.exports = app;

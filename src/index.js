const express = require("express");
const app = express();
const morgan = require("morgan");

//settings
app.set("port", process.env.port || 3000);
app.set("json spaces", 2);

//middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//routes
/* app.use("/api",require("./routes/index-api")); */
app.use("/api",require("./routes/users"));
app.use("/api",require("./routes/pc"));


//strating server
app.listen(app.get("port"), () => {
  console.log(`srver on port ${app.get("port")}`);
});

module.exports = app;
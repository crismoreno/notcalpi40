const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const api = require("./routes/api");

app.use("/api", api);

const db = require("./sequelize-models");

// db.sequelize.sync({ alter: true });
db.sequelize.sync();

// db.sequelize.sync({ force: true }).then(() => {
// 	console.log("Drop and re-sync db.");
// });

// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

//Handdle Production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname + "/public/"));

  //Handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"));
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

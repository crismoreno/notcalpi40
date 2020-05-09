const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// app.use((req, res, next) => {
//   res.set({
//     "Access-Control-Allow-Origin": "*",
//     "Access-Control-Allow-Headers":
//       "Origin, X-Requested-With, Content-Type, Accept",
//     "Access-Control-Allow-Methods": "GET, POST, PATCH, DELETE, OPTIONS",
//     "Content-Security-Policy": "default-src *",
//     "X-Content-Security-Policy": "default-src *",
//     "X-WebKit-CSP": "default-src *",
//   });
//   next();
// });

const contents = require("./routes/contents");

app.use("/api", contents);

const db = require("./models");

db.sequelize.sync();

// db.sequelize.sync({ force: true }).then(() => {
// 	console.log("Drop and re-sync db.");
// });

//Handdle Production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname + "/public/"));

  //Handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"));
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

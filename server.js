const path = require("path");
const express = require("express");
const app = express();
const morgan = require("morgan");

const port = process.env.PORT || 5000;

require("dotenv").config();

console.log("test ", process.env.TEST);
console.log("env ", process.env.NODE_ENV);

app.use(morgan("tiny"));

app.get("/api/message", (req, res) => {
  res.json({ message: "Test déploiement d'O'Films sur Heroku" });
});

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello world !" });
});

if (process.env.NODE_ENV == "production") {
  app.use(express.static(path.join(__dirname, "build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`Server is on up ${port} now !`);
});

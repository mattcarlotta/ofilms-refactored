const path = require("path");
const express = require("express");
const app = express();
const publicPath = path.join(__dirname, "..", "build");
const port = 5000;

app.use(express.static(publicPath));

app.get("/api/message", (req, res) => {
  res.json({ message: "Test déploiement d'O'Films sur Heroku" });
});

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello world" });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(port, () => {
  console.log("Server is up!");
});

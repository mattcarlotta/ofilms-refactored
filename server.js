const path = require("path");
const express = require("express");
const app = express();
const port = 5000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
  app.get("*", (req, res) => res.sendFile(path.resolve("build", "index.html")));
}

app.get("/api/message", (req, res) => {
  res.json({ message: "Test déploiement d'O'Films sur Heroku" });
});

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello world !" });
});

app.listen(port, () => {
  console.log(`Server is on up ${port} now !`);
});

const proxy = require("http-proxy-middleware");
module.exports = function(app) {
  app.use(
    "/api",
    proxy({
      target:
        process.env.NODE_ENV === "development"
          ? "http://localhost:5000"
          : "https://ofilms.herokuapp.com",
      changeOrigin: true
    })
  );
};

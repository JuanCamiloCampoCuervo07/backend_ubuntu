const express = require("express");
const createCleaningProductRoutes = require("./routes/cleaningProductRoutes");

function createServer(cleaningProductController) {
  const app = express();

  app.use(express.json());
  app.use("/api", createCleaningProductRoutes(cleaningProductController));

  app.get("/health", (req, res) => {
    res.status(200).json({ status: "ok" });
  });

  return app;
}

module.exports = createServer;

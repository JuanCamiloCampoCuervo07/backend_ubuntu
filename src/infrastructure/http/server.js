const express = require("express");
const createCleaningProductRoutes = require("./routes/cleaningProductRoutes");

function createServer(cleaningProductController) {
  const app = express();

  app.use(express.json());
  app.use("/api", createCleaningProductRoutes(cleaningProductController));

  app.get("/health", (req, res) => {
    res.status(200).json({ status: "ok" });
  });

  app.use((err, req, res, next) => {
    console.error("[HTTP] Unhandled error:", err.message);
    res.status(503).json({
      error: "Service temporarily unavailable",
      message: "Unable to retrieve products from database"
    });
  });

  return app;
}

module.exports = createServer;

require("dotenv").config();

const createServer = require("./infrastructure/http/server");
const CleaningProductController = require("./infrastructure/http/controllers/CleaningProductController");
const createPool = require("./infrastructure/database/createPool");
const MySqlCleaningProductRepository = require("./infrastructure/repositories/MySqlCleaningProductRepository");
const GetCleaningProductNames = require("./application/use-cases/GetCleaningProductNames");

const requiredEnv = ["DB_HOST", "DB_USER", "DB_PASSWORD", "DB_NAME"];
for (const key of requiredEnv) {
  if (!process.env[key]) {
    console.error(`Missing required environment variable: ${key}`);
    process.exit(1);
  }
}

const pool = createPool();
const repository = new MySqlCleaningProductRepository(pool);
const getCleaningProductNames = new GetCleaningProductNames(repository);
const controller = new CleaningProductController(getCleaningProductNames);
const app = createServer(controller);

const HOST = process.env.HOST || "0.0.0.0";
const PORT = Number(process.env.PORT) || 3000;

app.listen(PORT, HOST, () => {
  console.log(`API running on http://${HOST}:${PORT}`);
});

process.on("SIGINT", async () => {
  await pool.end();
  process.exit(0);
});

process.on("SIGTERM", async () => {
  await pool.end();
  process.exit(0);
});

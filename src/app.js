const createServer = require("./infrastructure/http/server");
const CleaningProductController = require("./infrastructure/http/controllers/CleaningProductController");
const InMemoryCleaningProductRepository = require("./infrastructure/repositories/InMemoryCleaningProductRepository");
const GetCleaningProductNames = require("./application/use-cases/GetCleaningProductNames");

const repository = new InMemoryCleaningProductRepository();
const getCleaningProductNames = new GetCleaningProductNames(repository);
const controller = new CleaningProductController(getCleaningProductNames);
const app = createServer(controller);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});

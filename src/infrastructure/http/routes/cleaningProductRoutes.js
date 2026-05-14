const { Router } = require("express");

function createCleaningProductRoutes(cleaningProductController) {
  const router = Router();

  router.get("/products/cleaning/names", (req, res) =>
    cleaningProductController.getNames(req, res)
  );

  return router;
}

module.exports = createCleaningProductRoutes;

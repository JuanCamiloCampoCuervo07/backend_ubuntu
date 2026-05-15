const { Router } = require("express");

function createCleaningProductRoutes(cleaningProductController) {
  const router = Router();

  router.get("/products/cleaning/names", (req, res, next) => {
    cleaningProductController.getNames(req, res).catch(next);
  });

  return router;
}

module.exports = createCleaningProductRoutes;

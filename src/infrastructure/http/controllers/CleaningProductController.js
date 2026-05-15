class CleaningProductController {
  constructor(getCleaningProductNamesUseCase) {
    this.getCleaningProductNamesUseCase = getCleaningProductNamesUseCase;
  }

  async getNames(req, res) {
    try {
      const names = await this.getCleaningProductNamesUseCase.execute();
      res.status(200).json({
        category: "aseo",
        total: names.length,
        products: names
      });
    } catch (error) {
      console.error(
        "[CleaningProductController] Database error:",
        error.message
      );
      res.status(503).json({
        error: "Service temporarily unavailable",
        message: "Unable to retrieve products from database"
      });
    }
  }
}

module.exports = CleaningProductController;

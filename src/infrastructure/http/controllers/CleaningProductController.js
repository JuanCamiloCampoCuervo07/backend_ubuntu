class CleaningProductController {
  constructor(getCleaningProductNamesUseCase) {
    this.getCleaningProductNamesUseCase = getCleaningProductNamesUseCase;
  }

  getNames(req, res) {
    const names = this.getCleaningProductNamesUseCase.execute();
    res.status(200).json({
      category: "aseo",
      total: names.length,
      products: names
    });
  }
}

module.exports = CleaningProductController;

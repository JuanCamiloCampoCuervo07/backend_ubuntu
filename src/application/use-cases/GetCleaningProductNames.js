class GetCleaningProductNames {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }

  execute() {
    return this.productRepository
      .findByCategory("aseo")
      .map((product) => product.name);
  }
}

module.exports = GetCleaningProductNames;

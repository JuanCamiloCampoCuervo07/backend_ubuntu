class GetCleaningProductNames {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }

  async execute() {
    const products = await this.productRepository.findByCategory("aseo");
    return products.map((product) => product.name);
  }
}

module.exports = GetCleaningProductNames;

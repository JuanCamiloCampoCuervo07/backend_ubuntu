const Product = require("../../domain/entities/Product");
const ProductRepository = require("../../domain/ports/ProductRepository");

class InMemoryCleaningProductRepository extends ProductRepository {
  constructor() {
    super();
    this.products = [
      new Product(1, "Jabon liquido", "aseo"),
      new Product(2, "Detergente en polvo", "aseo"),
      new Product(3, "Desinfectante multiusos", "aseo"),
      new Product(4, "Lavaloza", "aseo"),
      new Product(5, "Blanqueador", "aseo"),
      new Product(6, "Esponja abrasiva", "aseo"),
      new Product(7, "Trapeador", "aseo"),
      new Product(8, "Cepillo sanitario", "aseo")
    ];
  }

  findByCategory(category) {
    return this.products.filter((product) => product.category === category);
  }
}

module.exports = InMemoryCleaningProductRepository;

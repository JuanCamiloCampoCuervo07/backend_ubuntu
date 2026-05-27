const Product = require("../../domain/entities/Product");
const ProductRepository = require("../../domain/ports/ProductRepository");

class MySqlCleaningProductRepository extends ProductRepository {
  constructor(pool) {
    super();
    this.pool = pool;
  }

  async findByCategory(category) {
    const [rows] = await this.pool.execute(
      `SELECT name
       FROM products
       WHERE category = ?
       ORDER BY id`,
      [category]
    );

    return rows.map((row) => new Product(undefined, row.name, category));
  }
}

module.exports = MySqlCleaningProductRepository;

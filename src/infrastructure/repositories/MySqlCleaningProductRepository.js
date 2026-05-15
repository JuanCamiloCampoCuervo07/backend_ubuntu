const Product = require("../../domain/entities/Product");
const ProductRepository = require("../../domain/ports/ProductRepository");

class MySqlCleaningProductRepository extends ProductRepository {
  constructor(pool) {
    super();
    this.pool = pool;
  }

  async findByCategory(category) {
    const [rows] = await this.pool.execute(
      `SELECT id, name, category
       FROM cleaning_products
       WHERE category = ? AND active = 1
       ORDER BY id`,
      [category]
    );

    return rows.map(
      (row) => new Product(row.id, row.name, row.category)
    );
  }
}

module.exports = MySqlCleaningProductRepository;

import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { CreateProduct, Products } from '../interfaces/products.interface';

const getAll = async (): Promise<Products[]> => {
  const query = 'SELECT * FROM Trybesmith.Products';

  const [products] = await connection.execute(query);

  return products as Products[];
};

const create = async (newProduct: CreateProduct): Promise<CreateProduct> => {
  const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';

  const { name, amount } = newProduct;

  const [productId] = await connection.execute<ResultSetHeader>(query, [name, amount]);

  const { insertId } = productId;

  return { id: insertId, ...newProduct };
};

export = {
  getAll,
  create,
};

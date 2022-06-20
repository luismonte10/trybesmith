import connection from './connection';
import Products from '../interfaces/products.interface';

const getAll = async () => {
  const query = 'SELECT * FROM Trybesmith.Products';

  const [products] = await connection.execute(query);

  return products as Products[];
};

export = {
  getAll,
};

import connection from './connection';
import { Orders } from '../interfaces/orders.interface';

const getAll = async (): Promise<Orders[]> => {
  const query = 'SELECT * FROM Trybesmith.Orders;';

  const [orders] = await connection.execute(query);
  
  return orders as Orders[];
};

export = {
  getAll,
};

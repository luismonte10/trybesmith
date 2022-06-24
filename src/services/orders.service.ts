// import { Orders } from '../interfaces/orders.interface';
import ordersModel from '../models/orders.model';
import productsModel from '../models/products.model';

const getAll = async () => {
  const getOrders = await ordersModel.getAll();

  const ordersPromises = getOrders.map(async (order) => {
    const [products] = await productsModel.getByOrderId(order.id);
    const teste = {
      ...order,
      productsIds: [products.id],
    };
        
    return teste;
  });

  const orders = Promise.all(ordersPromises);
  
  return orders;
};

export = {
  getAll,
};

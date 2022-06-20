import productModel from '../models/products.model';

const getAll = async () => {
  const products = await productModel.getAll();

  return products;
};

export = {
  getAll,
};
import { CreateProduct } from '../interfaces/products.interface';
import productModel from '../models/products.model';

const getAll = async () => {
  const products = await productModel.getAll();

  return products;
};

const create = async (newProduct: CreateProduct) => {
  const createdProduct = await productModel.create(newProduct);

  return createdProduct;
};

export = {
  getAll,
  create,
};
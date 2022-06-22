import { Request, Response } from 'express';
import { CreateProduct } from '../interfaces/products.interface';
import productService from '../services/products.service';

const getAll = async (req: Request, res: Response) => {
  const products = await productService.getAll();

  return res.status(200).json(products);
};

const create = async (req: Request, res: Response) => {
  const newProduct: CreateProduct = req.body;

  const createdProduct = await productService.create(newProduct);

  return res.status(201).json(createdProduct);
};

export = {
  getAll,
  create,
};

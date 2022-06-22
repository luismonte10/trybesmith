export interface Products {
  id?: number,
  name: string,
  amount: string,
  orderId: number;
}

export type CreateProduct = Omit<Products, 'orderId'>;

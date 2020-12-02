export interface IOrderRows {
  productId: number;
  orderId: number;
  amount: number;
}


export interface IOrder {
  id: number;
  companyId: number;
  created: string;
  createdBy: string;
  paymentMethod: string;
  totalPrice: number;
  status: number;
  orderRows: IOrderRows[];
}

export interface IPostOrder {
  companyId: number;
  created: string;
  createdBy: string;
  paymentMethod: string;
  totalPrice: number;
  status: number;
  orderRows: IOrderRows[];
}
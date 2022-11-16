import { Request, Response } from "express";
import { Order } from "../../modules/Order";

export async function listOrders(req: Request, res: Response) {
  try {
    const orders = await Order.find()
      .sort({ createdAt: 1 }) //passando na order decrescente
      .populate("products.product");

    res.json(orders);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

import { type Request, type Response } from "express";
import { dishService } from "../services/dishService.js";
import { DishSchema } from "../utils/zod/schema.js";
export const dishController = async (req: Request, res: Response) => {
  try {
    const parse = DishSchema.safeParse(req.body);
    if (!parse.success) {
      return res.status(400).json({ message: "Inavlid field!" });
    }
    const response = await dishService(parse.data);
    return res.status(200).json({ response, message: "Success!" });
  } catch (e: any) {
    return res.status(500).json({ message: e.message || "Server Error!" });
  }
};

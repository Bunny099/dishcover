import { Router } from "express";
import { dishController } from "../controllers/dishController.js";
export const dishRouter:Router = Router()
dishRouter.post("/dish",dishController)
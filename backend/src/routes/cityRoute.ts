import { Router } from "express";
import { cityController } from "../controllers/cityController.js";
export const cityRouter:Router = Router();
cityRouter.post("/city",cityController)
import {type Express } from "express";
import express from "express";
import cors from "cors"
import {dishRouter} from "./routes/dishRoute.js"
import { cityRouter } from "./routes/cityRoute.js";

const app:Express = express();
app.use(express.json())
app.use(cors())
app.use("/api",dishRouter)
app.use("/api",cityRouter)
export default app;
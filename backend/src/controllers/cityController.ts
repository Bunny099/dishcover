import type { Request, Response } from "express";
import { CitySchema } from "../utils/zod/schema.js";
import { cityService } from "../services/cityService.js";
export const cityController = async(req:Request,res:Response)=>{
    try{
        const parse = CitySchema.safeParse(req.body);
        if(!parse.success){
            return res.status(400).json({message:"Invalid fields!"})
        }
        const response = await cityService(parse.data);
        return res.status(200).json({response,message:"Success!"})
        
    }catch(e:any){
        return res.status(500).json({message:e.message || "Server Error!"})
    }
}
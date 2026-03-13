import { GoogleGenAI } from "@google/genai";
import { getMyPrompt } from "../utils/myDishPrompt.js";
import "dotenv/config.js"
import { myCityPrompt } from "../utils/myCityPrompt.js";
const geminiApiKey = process.env.GEMINI_API_KEY;
if(!geminiApiKey){
    throw new Error("Gemini api key not found!")
}
const googleAi = new GoogleGenAI({apiKey:geminiApiKey});

export const dishIntelligence = async(dishName:string)=>{

    try{
        let prompt = getMyPrompt(dishName)
        let response = await googleAi.models.generateContent({
            model:"gemini-3.1-flash-lite-preview",
            contents:prompt,
            
        })
        
        return response;
    }catch(e:any){
        throw new Error("Dish Intelligence server error")
    }
}

export const cityIntelligence = async(cityName:string)=>{
    try{
        let prompt = myCityPrompt(cityName);
        let response = await googleAi.models.generateContent({
            model:"gemini-3.1-flash-lite-preview",
            contents:prompt
        })
        return response;
    }catch(e){
        throw new Error("City Intelligence server error!")
    }
}
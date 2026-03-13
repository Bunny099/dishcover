import type { CityInput } from "../utils/zod/schema.js";
import { cityIntelligence } from "./geminiService.js";
import { lingoLocalization } from "./lingoService.js";

export const cityService = async(data:CityInput)=>{
    try{
        const {cityName,ln} = data;
        let cityIntelligenceProfileEnglish = await cityIntelligence(cityName);
        if(!cityIntelligenceProfileEnglish.text){
            throw new Error("Can't create a city profile!")
        }
        let objectResponse =JSON.parse(cityIntelligenceProfileEnglish.text);
        if(ln === "en"){
            return objectResponse;
        }else{
            let response = await lingoLocalization(objectResponse,ln);
            return response;
        }
        
    }catch(e){
        throw new Error("Error in city service!")
    }
}
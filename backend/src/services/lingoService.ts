import { LingoDotDevEngine } from "lingo.dev/sdk";
import "dotenv/config.js"
const lingoApiKey = process.env.LINGO_API_KEY;
if(!lingoApiKey){
    throw new Error("Lingo api key not found!")
}
const lingoEngine = new LingoDotDevEngine({apiKey:lingoApiKey})
// @ts-ignore
export const lingoLocalization = async(canonicalEnglishResponse,ln)=>{
    try{
        let response = await lingoEngine.localizeObject(canonicalEnglishResponse,{sourceLocale:"en",targetLocale:ln});
        console.log("response in ligo function",response)
        return response;
    }catch(e:any){
        console.error(e)
        throw new Error("Lingo server error!")
    }
}
import { dishIntelligence } from "./geminiService.js";
import { lingoLocalization } from "./lingoService.js";
import type { DishInput } from "../utils/zod/schema.js";
export const dishService = async (data: DishInput) => {
  try {
    const { dishName, ln } = data;

    let dishIntelligenceProfileEnglish = await dishIntelligence(dishName);

    if (!dishIntelligenceProfileEnglish.text) {
      throw new Error("Can't create a dish Profile!");
    }
    let objectResponse = JSON.parse(dishIntelligenceProfileEnglish.text);

    if (ln === "en") {
      return objectResponse;
    } else {
      const response = await lingoLocalization(objectResponse, ln);
      return response;
    }
  } catch (e) {
    throw new Error("Error in dish Service!");
  }
};

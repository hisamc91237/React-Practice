import OpenAI from "openai";
import { OPEN_AI_KEY } from "./constants";

const suggestion = new OpenAI({
  apiKey: OPEN_AI_KEY,
  dangerouslyAllowBrowser: true,
});

export default suggestion;

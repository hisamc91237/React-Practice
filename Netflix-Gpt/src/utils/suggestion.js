import OpenAI from "openai";
import { SEARCH_KEY } from "./constants";

const suggestion = new OpenAI({
  apiKey: SEARCH_KEY,
  dangerouslyAllowBrowser: true,
});

export default suggestion;

import OpenAI from "openai";
import { SEARCH_KEY } from "./constants";

const suggestion = new OpenAI({
  apiKey: SEARCH_KEY,
  baseURL: window.location.origin + "/nvidia-api/v1",
  dangerouslyAllowBrowser: true,
});

export default suggestion;

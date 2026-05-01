import OpenAI from "openai";
import { SEARCH_KEY } from "./constants";

const suggestion = new OpenAI({
  apiKey: SEARCH_KEY, // The actual key is now injected on the server
  baseURL: window.location.origin + "/api",
  dangerouslyAllowBrowser: true,
});

export default suggestion;

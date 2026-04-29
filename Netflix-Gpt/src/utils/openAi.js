import OpenAI from "openai";
import { OPEN_AI_KEY } from "../../env";

const openAi = new OpenAI({
  apiKey: OPEN_AI_KEY,
});

export default openAi;

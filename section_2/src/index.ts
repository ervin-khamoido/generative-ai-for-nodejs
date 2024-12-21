import { OpenAI } from "openai";
import * as dotenv from "dotenv";
import { encoding_for_model } from "tiktoken";

dotenv.config();
const openai = new OpenAI();

async function main() {
  const response = await openai.completions.create({
    model: "gpt-4o",
    prompt: "How tall is mount everest?",
  });

  console.log(response.choices[0].text);
}

function encodePrompt() {
  const prompt = "How tall is mount everest?";
  const encoder = encoding_for_model("gpt-4o");
  const words = encoder.encode(prompt);
  console.log(words);
}

encodePrompt();

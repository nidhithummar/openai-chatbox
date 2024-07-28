import { Configuration } from "openai";

export const configureOpenAI = () => {
  const config = new Configuration({
    apiKey: process.env.AI_SECRET,
    organization: process.env.AI_ORGANIZATION,
  });
  return config;
};
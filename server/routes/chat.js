// server/routes/chat.js
import { Router } from 'express';
import { ChatGoogleGenerativeAI } from '@langchain/google-genai';
// import { HumanMessage } from '@langchain/core/messages';
import { PromptTemplate } from '@langchain/core/prompts';
import { ConversationChain } from 'langchain/chains'; // 
import { configDotenv } from 'dotenv';
configDotenv();

const router = Router();
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
if (!GOOGLE_API_KEY) {
  console.error("GOOGLE_API_KEY is not set in the environment variables.");
  process.exit(1);
}
const llm = new ChatGoogleGenerativeAI({
  apiKey: GOOGLE_API_KEY,
  model: "gemini-1.5-flash",     
  maxOutputTokens: 2048,       
  temperature:     0.7,        
});

const template = `
You are SoftSell AI helper, a concise assistant for a platform that helps users sell software licenses.

Your job is to assist ONLY with queries related to selling software licenses.

When replying:
- Keep answers short, clear, and professional.
- Refer only to these supported features:
  1. Users upload their license details.
  2. A valuation is generated.
  3. Payment is made after a successful sale.
- Mention benefits only when relevant: fast payment, secure transactions, top market value.
- If asked anything unrelated to license selling (e.g., general knowledge, coding, health, personal advice), reply:  
  **"Sorry, I can’t help with that. I can only assist with software license selling."**

Now respond to the user’s question:
User: {question}
AI:

`;

const prompt = new PromptTemplate({
  template,
  inputVariables: ["question"],
});
const chain = new ConversationChain({ llm, prompt });

router.post("/", async (req, res) => {
  try {
    // console.log("Gemini question:", req.body);
    const { question } = req.body;
    const answer = await chain.run(question);
    // console.log("Gemini answer:", answer);
    res.json({ answer });
  } catch (e) {
    console.error("Gemini error:", e);
    res.status(500).json({
      answer: "Sorry, I couldn't process that right now.",
    });
  }
});

export default router;

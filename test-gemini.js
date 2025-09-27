import fetch from "node-fetch"; // or use global fetch if Node 18+
import dotenv from "dotenv";


dotenv.config();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

async function testGemini() {
  try {
    const response = await fetch("https://api.generativeai.google/v1beta2/models/text-bison-001:generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${GEMINI_API_KEY}`,
      },
      body: JSON.stringify({
        prompt: { text: "Hello AI, can you respond?" },
        temperature: 0.5,
        maxOutputTokens: 50
      }),
    });

    const data = await response.json();

    console.log("✅ Gemini API key response:");
    console.log(data);
  } catch (err) {
    console.error("❌ Gemini key failed:", err.message);
  }
}

testGemini();

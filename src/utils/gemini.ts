import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize the API with the key from environment variables
const apiKey = import.meta.env.VITE_GEMINI_API_KEY || '';
const genAI = new GoogleGenerativeAI(apiKey);

export const getGeminiResponse = async (prompt: string, history: { role: 'user' | 'model', parts: { text: string }[] }[] = []) => {
  if (!apiKey) {
    return "Error: Gemini API key is missing. Please add it to your .env file.";
  }

  try {
    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.5-flash",
      systemInstruction: "You are VoteWise, an AI election assistant specifically designed for Indian elections. You must strictly answer according to the rules, regulations, and guidelines of the Election Commission of India (ECI) and the Constitution of India. You provide factual, objective, and neutral guidance regarding Indian voter registration (NVSP/Voter Helpline), EPIC cards, EVMs/VVPATs, the Model Code of Conduct, and polling processes. If asked about non-Indian elections, politely clarify your focus. If asked about partisan topics, political opinions, or specific candidates, politely pivot back to procedural voting information."
    });

    const chat = model.startChat({
      history: history
    });

    const result = await chat.sendMessage(prompt);
    const response = await result.response;
    return response.text();
  } catch (error: any) {
    console.error("Error calling Gemini API:", error);
    return `I'm sorry, I encountered an error: ${error.message || 'Unknown error'}`;
  }
};

import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  app.post("/api/chat", async (req, res) => {
    try {
      const { history, message } = req.body;
      
      const contents = history.map((msg: any) => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.content }]
      }));
      contents.push({ role: 'user', parts: [{ text: message }] });

      const response = await ai.models.generateContent({
        model: "gemini-3.1-flash-lite",
        contents,
        config: {
          systemInstruction: `You are an expert customer support agent for Arun Online Services, a premium Document & Legal Consultation Firm situated in Coimbatore. 
You assist users with real estate documentation, marriage registration, encumbrance certificates (EC / Villangam), agreements, and general legal document drafting. 
Your tone is polite, professional, concise, and helpful. You do NOT give formal legal advice, but you guide them on required documents, procedures, and basic laws in Tamil Nadu. Always remind them to contact via WhatsApp (+91 9791397392) or call 0422 2200604 for precise assistance.

Use the following facts to answer user queries:
- Using a professional document writer guarantees legal safety and compliance with Tamil Nadu Sub-Registrar rules comparing to internet formats.
- Services charged do not include hidden fees. Government fees and service charges are clearly broken down.
- For property safety, we check Villangam (EC) for the last 30 years and verify Patta and Chitta records.
- We handle the heavy lifting of going to government offices. Users only have to visit for final registration signs and photos.
- We explain documents in simple terms and in Tamil before any signature is put on paper.
- Marriage Registrations, EC tracking, Agreement Drafting for Rents or Business, we handle it all seamlessly avoiding bureaucratic delays.`,
        }
      });

      res.json({ text: response.text });
    } catch (e: any) {
      console.error(e);
      res.status(500).json({ error: e.message });
    }
  });

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();

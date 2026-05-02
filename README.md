# VoteWise AI Assistant 🗳️🤖

VoteWise is an interactive, accessible, and intelligent web application designed to guide users through the Indian election process. Powered by Google's cutting-edge Gemini AI, VoteWise provides objective, neutral, and factual information regarding the Election Commission of India (ECI) procedures, timelines, and voter registration.

# ✨ Features

- **Interactive Election Timeline:** A step-by-step visual guide to the election process, from voter registration to counting day.
- **VoteWise AI Chat Assistant:** A highly responsive AI agent built on `gemini-2.5-flash`. It answers specific queries about EPIC cards, the NVSP portal, EVMs/VVPATs, and polling processes.
- **Glassmorphism UI:** A sleek, modern, and accessible dark-mode interface with smooth micro-animations.
- **Procedural Focus:** The AI is strictly programmed to avoid partisan politics and focus entirely on procedural, regulatory, and constitutional voting guidelines.

# 🛠️ Technology Stack

- **Frontend:** React 18, TypeScript, Vite
- **Styling:** Vanilla CSS with custom variables and animations
- **Icons:** Lucide React
- **AI Integration:** Google Generative AI SDK (`@google/generative-ai`)
- **Testing:** Vitest, React Testing Library

# 🚀 Local Development Setup

To run this project locally, follow these steps:

# 1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/VoteWise.git
cd VoteWise
```

# 2. Install dependencies
```bash
npm install
```

# 3. Set up Environment Variables
Create a `.env` file in the root directory of the project and add your Google Gemini API Key:
```env
VITE_GEMINI_API_KEY=your_actual_api_key_here
```
*(Note: Do not commit your actual `.env` file to version control. An `.env.example` file is provided for reference).*

# 4. Start the Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

# ☁️ Cloud Deployment

This project is fully optimized for deployment on platforms like Vercel or Netlify. 
When deploying, ensure you add the `VITE_GEMINI_API_KEY` to your hosting provider's Environment Variables settings before building.

# SoftSell - Software License Resale Platform

SoftSell is a single-page	marketing	website for a fictional software license resale startup. It features a responsive marketing website and an AI-powered chatbot assistant to help users with queries about selling software licenses.

## Features

- Responsive single-page frontend with modern UI/UX
- Dark/light mode toggle
- Animated sections and smooth scrolling
- AI-powered chat assistant for license selling queries
- Secure backend API using Express and LangChain (Google Gemini)

## Tech Stack

### Frontend
- React (with Vite)
- Tailwind CSS
- Framer Motion
- Headless UI & Heroicons
- Axios

### Backend
- Node.js with Express
- LangChain & Google Gemini API
- dotenv & CORS

## Project Structure

```
softsell/
  client/   # Frontend React app
  server/   # Backend Express API
```

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm
- Google Gemini API key (for backend)

### 1. Clone the repository
```bash
git clone <repo-url>
cd softsell
```

### 2. Setup the Client (Frontend)
```bash
cd client
npm install
npm run dev
```
The frontend will start on [http://localhost:5173](http://localhost:5173) by default.

### 3. Setup the Server (Backend)
```bash
cd ../server
npm install
# Create a .env file with your Google Gemini API key:
echo "GOOGLE_API_KEY=your-key-here" > .env
npm start
```
The backend will start on [http://localhost:4000](http://localhost:4000) by default.

## API

- **POST /api/chat**
  - Request: `{ "question": "How do I sell my license?" }`
  - Response: `{ "answer": "..." }`
  - The AI assistant only answers questions about selling software licenses.

## Development Notes
- Frontend and backend run independently; CORS is enabled for local development.
- The AI assistant uses Google Gemini via LangChain for concise, domain-specific responses.

## License
This project is for demonstration purposes only.

# Digital Resume with AI Chatbot

A modern, responsive digital resume built with React, TypeScript, and Tailwind CSS, featuring an intelligent AI chatbot that can answer questions about professional background and experience.

## Features

- 🎨 Modern, responsive design
- 🤖 AI-powered chatbot using OpenRouter API
- 📄 Multi-document knowledge base
- 💬 Two-stage answer refinement for professional responses
- 📱 Mobile-friendly interface
- ⚡ Fast loading with Vite

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create environment file:
   ```bash
   cp .env.example .env
   ```

4. Add your OpenRouter API key to `.env`:
   ```
   VITE_OPENROUTER_API_KEY=your_openrouter_api_key_here
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_OPENROUTER_API_KEY` | Your OpenRouter API key (required) | - |
| `VITE_OPENROUTER_BASE_URL` | OpenRouter API base URL | `https://openrouter.ai/api/v1` |
| `VITE_OPENROUTER_MODEL` | AI model to use | `gpt-oss-20b` |

## AI Chatbot Features

- **Multi-Document Intelligence**: Uses both resume and detailed background documents
- **Two-Stage Processing**: Initial answer generation + professional refinement
- **Recruiter-Focused**: Optimized for professional recruitment conversations
- **Comprehensive Coverage**: Handles technical, behavioral, and cultural fit questions

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Build Tool**: Vite
- **AI Integration**: OpenRouter API
- **Icons**: Lucide React
- **Styling**: Tailwind CSS with custom components

## Project Structure

```
src/
├── components/          # React components
│   ├── Chatbot.tsx     # Main chatbot interface
│   ├── ChatButton.tsx  # Floating chat button
│   └── ...             # Other resume components
├── services/           # API services
│   └── openRouterApi.ts # OpenRouter integration
├── utils/              # Utility functions
│   └── pdfParser.ts    # Document content management
└── ...
```

## Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to your hosting provider

3. Make sure to set environment variables in your hosting platform

## License

MIT License

# Frontend Development Plan

Tasks for implementing the React client using Vite and TypeScript.
The [chat-sdk.dev](https://chat-sdk.dev/) Next.js example provides UI ideas
that will need adapting to Vite/React with a .NET backend.

## Setup

1. **Create Vite Project**
   - `npm create vite@latest frontend -- --template react-ts`
   - `cd frontend && npm install`

2. **Add Dependencies**
   - `tailwindcss` and `postcss` for styling
   - `@tanstack/react-router` for routing
   - `@tanstack/react-query` for data fetching
   - `shadcn/ui` component library
   - Run `npx shadcn@latest init` to configure

3. **Configure Tailwind**
   - `npx tailwindcss init -p`
   - Set content paths to React source
   - Import tailwind directives in `index.css`

## Features

1. **Authentication**
   - Login/register screens using the Identity API endpoints
   - Sessions rely on cookies issued by the backend
   - No explicit JWT handling on the client

2. **Chat Interface**
   - Main chat view with message list and input box
   - Show streaming responses from LLM provider
   - Connect to the SignalR hub at `/hub` for real-time updates
   - Persist conversations via `/api/chat` and `/api/history`

3. **Model Selection**
   - UI component to switch between available LLMs
   - Optionally expose advanced provider settings


# Project Architecture

This document outlines the high level architecture for the chat application. The goal is to provide a simple yet extensible setup that allows experimentation with various LLM providers while keeping the application easy to run.

## Overview

- **Backend**: ASP.NET Core 10 minimal Web API
- **Database**: SQLite via Entity Framework Core
- **Authentication**: ASP.NET Core Identity with cookie-based sessions
- **AI Integration**: Microsoft.Extensions.AI or OpenAI .NET SDK for LLM access
- **Frontend**: Vite + React + TypeScript
- **UI Libraries**: Tailwind CSS, Shadcn UI components, TanStack Router and TanStack Query
- **Example Chat UI**: [chat-sdk.dev](https://chat-sdk.dev/) (Next.js) used as a design reference
- **Hosting**: The .NET backend will serve the built React app in production
- **Static Files**: Use `UseDefaultFiles()` and `UseStaticFiles()` to serve the React build
- **Response Compression**: Enable Gzip/Brotli to reduce payload sizes
- **Real-time**: A SignalR hub can broadcast streaming chat updates

The app will allow users to chat with multiple large language models. Chat history is stored per user and synchronized across devices.

### Component Diagram

```text
+-----------+      HTTP       +-----------+      DB      +------------+
|  Frontend | <-------------- |  Backend  | <---------> |   SQLite   |
+-----------+                 +-----------+             +------------+
       |                           |
       |  LLM Provider SDKs        |
       +-------------------------->|
```

Frontend communicates with the backend via a minimal REST API. The backend handles authentication, chat persistence and communication with LLM providers.


# API Overview

This document describes the main endpoints exposed by the backend.

## Authentication

- `POST /register` – Create a new user
- `POST /login?useCookies=true` – Sign in and receive an auth cookie
- `POST /logout` – Clear the authentication cookie

## Chat

- `POST /api/chat`
  - Request body: `{ "conversationId": string, "message": string, "model": string }`
  - Response: chat completion from selected LLM

- `GET /api/history`
  - Returns list of conversations for the current user

- `GET /api/history/{conversationId}`
  - Returns messages for the specified conversation

## Real-Time

- SignalR hub at `/hub` for receiving streaming responses or notifications

All endpoints require authentication except registration and login. The client relies on cookies so no Authorization header is needed.


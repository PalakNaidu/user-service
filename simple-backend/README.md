# Simple Backend

A minimal Node.js/Express API for user registration & login.

## Prerequisites

- Node.js ≥14
- npm or yarn

## Setup

1. Clone repo
2. Install deps
   ```bash
   npm install
   # or
   yarn
   ```
3. Create `.env` in project root (see `.env` template)

## Running

- Development (with auto-reload):
  ```bash
  npm run dev
  ```
- Production:
  ```bash
  npm start
  ```

## API Endpoints

### GET /

Health check  
Response:

```json
{ "message": "API is running" }
```

### POST /auth/register

Register a new user  
Body:

```json
{
  "name": "Your Name",
  "email": "you@example.com",
  "password": "secret"
}
```

### POST /auth/login

Login an existing user  
Body:

```json
{
  "email": "you@example.com",
  "password": "secret"
}
```

Response:

```json
{ "message": "Login successful", "token": "<JWT_TOKEN>" }
```

# AI SDK

A Next.js-based SDK for integrating AI tools and capabilities into your applications. This project provides a set of tools for interacting with various AI services and APIs, including GitHub profile fetching and HTTP requests.

## Features

- GitHub profile information retrieval
- HTTP fetch capabilities
- TypeScript support
- Next.js integration
- Built-in AI tools framework

## Prerequisites

- Node.js (Latest LTS version recommended)
- pnpm (v10.6.5 or higher)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ai-sdk
```

2. Install dependencies:
```bash
pnpm install
```

3. Copy the environment file and configure your variables:
```bash
cp .env.example .env.local
```

## Development

To start the development server:

```bash
pnpm dev
```

The application will be available at `http://localhost:3000`.

## Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build the application
- `pnpm start` - Start production server
- `pnpm lint` - Run linting

## Project Structure

```
src/
  ├── ai/
  │   └── tools/         # AI tools implementations
  │       ├── index.ts   # Tools registry
  │       ├── github-profile.ts
  │       └── http-fetch.ts
```

## Tools

### GitHub Profile Tool
Fetches GitHub user profile information using the GitHub API.

### HTTP Fetch Tool
Provides HTTP request capabilities for external API interactions.

## License

Private - All rights reserved

## Tech Stack

- Next.js 15.2
- React 19
- TypeScript
- Tailwind CSS
- Zod for validation
- AI SDK integrations (@ai-sdk/openai, @ai-sdk/react)

# toto-react

A shared React component library for the Toto PWA ecosystem. It provides reusable UI components, hooks, contexts, and API clients used across Toto applications, as well as Next.js API route handlers for backend features such as speech-to-text (STT) and text-to-speech (TTS).

## Installation

```bash
npm install toto-react
```

## Usage

### Client-side components, hooks and contexts

```ts
import { /* components, hooks, contexts */ } from 'toto-react';
```

### Server-side Next.js API route handlers

Re-export the handlers inside your own `app/api/` routes:

```ts
// app/api/stt/route.ts
export { STTHandler as POST } from 'toto-react/server';
```

## Development

### Build

```bash
npm run build
```

This produces `dist/` with CommonJS, ESM and TypeScript declaration files.

### Local consumption

Install the package directly from the local path in another project:

```bash
npm install /path/to/toto-react
```

## Package structure

| Export path      | Description                                             |
| ---------------- | ------------------------------------------------------- |
| `toto-react`     | Client-side components, hooks, contexts and API clients |
| `toto-react/server` | Next.js API route handlers (STT / TTS)               |

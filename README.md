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

## Components

| Component | How-to |
| --- | --- |
| `AgentConversationView` | [How to use AgentConversationView](docs/how-to/components/agent-conversation-view.md) |
| `AudioVisualizer` | [How to use AudioVisualizer](docs/how-to/components/audio-visualizer.md) |
| `ChatDock` | [How to use ChatDock](docs/how-to/components/chat-dock.md) |
| `ChatInput` | [How to use ChatInput](docs/how-to/components/chat-input.md) |
| `MaskedSvgIcon` | [How to use MaskedSvgIcon](docs/how-to/components/masked-svg-icon.md) |
| `RoundButton` | [How to use RoundButton](docs/how-to/components/round-button.md) |
| `SideMenu` | [How to use SideMenu](docs/how-to/components/side-menu.md) |
| `ToggleableMenuItem` | [How to use ToggleableMenuItem](docs/how-to/components/toggleable-menu-item.md) |
| `TotoList` | [How to use TotoList](docs/how-to/components/toto-list.md) |
| `VoiceAgentDock` | [How to use VoiceAgentDock](docs/how-to/components/voice-agent-dock.md) |

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

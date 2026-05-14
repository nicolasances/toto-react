# How to use `VoiceAgentDock`

## What it does

`VoiceAgentDock` renders the voice-recording dock UI (microphone/stop button, visualizer, and transcribing indicator) based on voice interaction state.

## Usage

```tsx
import { VoiceAgentDock } from "toto-react";
import { useState } from "react";

export default function VoicePage() {
  const [state, setState] = useState<"idle" | "recordingStarted">("idle");
  const stream: MediaStream | null = null;

  return (
    <VoiceAgentDock
      state={state}
      stream={stream}
      onToggleRecording={async () => {
        setState((value) => (value === "idle" ? "recordingStarted" : "idle"));
      }}
    />
  );
}
```

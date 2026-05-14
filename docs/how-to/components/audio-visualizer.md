# How to use `AudioVisualizer`

## What it does

`AudioVisualizer` shows a live, animated bar visualizer from a microphone `MediaStream`.

## Usage

```tsx
import { AudioVisualizer } from "toto-react";

export default function RecorderUI({
  stream,
  isRecording,
}: {
  stream: MediaStream | null;
  isRecording: boolean;
}) {
  return (
    <div className="relative h-20">
      <AudioVisualizer
        stream={stream}
        isRecording={isRecording}
        height={80}
        theme="dark"
      />
    </div>
  );
}
```

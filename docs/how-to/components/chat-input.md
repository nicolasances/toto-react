# How to use `ChatInput`

## What it does

`ChatInput` provides a multiline chat text area with a send button and optional voice transcription support.

## Usage

```tsx
import { ChatInput } from "toto-react";

export default function InputOnly() {
  return (
    <ChatInput
      handlers={{
        onSendMessage: async (message) => {
          await fetch("/api/chat", {
            method: "POST",
            body: JSON.stringify({ message }),
          });
        },
      }}
    />
  );
}
```

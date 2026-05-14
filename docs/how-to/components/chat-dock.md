# How to use `ChatDock`

## What it does

`ChatDock` renders a fixed chat input at the bottom of the page, sends messages, and can read agent updates from an SSE stream.

## Usage

```tsx
import { ChatDock } from "toto-react";
import { useState } from "react";

export default function ChatPage() {
  const [dockHeight, setDockHeight] = useState(0);

  const sendMessage = async (message: string) => {
    const response = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ message }),
    });
    const { conversationId } = await response.json();
    return conversationId as string;
  };

  const streamConversationStatus = async (conversationId: string) =>
    fetch(`/api/chat/${conversationId}/stream`);

  return (
    <div style={{ paddingBottom: dockHeight }}>
      <ChatDock
        sendMessage={sendMessage}
        streamConversationStatus={streamConversationStatus}
        onHeightChange={setDockHeight}
      />
    </div>
  );
}
```

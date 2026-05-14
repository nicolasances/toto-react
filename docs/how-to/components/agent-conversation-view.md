# How to use `AgentConversationView`

## What it does

`AgentConversationView` renders a vertical list of conversation messages and an animated waiting indicator while the agent is processing.

## Usage

```tsx
import { AgentConversationView } from "toto-react";

export default function ConversationPanel() {
  return (
    <AgentConversationView
      messages={["Hello", "How can I help you today?"]}
      isProcessing={false}
    />
  );
}
```

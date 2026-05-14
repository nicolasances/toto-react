# How to use `RoundButton`

## What it does

`RoundButton` renders a circular button with icon support, visual variants, sizes, disabled state, and loading state.

## Usage

```tsx
import { RoundButton } from "toto-react";

export default function SendButton() {
  return (
    <RoundButton
      svgIconPath={{ src: "/images/send.svg", alt: "Send" }}
      onClick={() => console.log("send")}
      type="filled"
      size="s"
    />
  );
}
```

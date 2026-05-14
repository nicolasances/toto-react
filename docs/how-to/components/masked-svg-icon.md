# How to use `MaskedSvgIcon`

## What it does

`MaskedSvgIcon` renders an SVG icon with CSS masking so you can tint it with Tailwind color classes.

## Usage

```tsx
import { MaskedSvgIcon } from "toto-react";

export default function ExampleIcon() {
  return (
    <MaskedSvgIcon
      src="/images/menu.svg"
      alt="Menu"
      size="w-5 h-5"
      color="bg-cyan-800"
    />
  );
}
```

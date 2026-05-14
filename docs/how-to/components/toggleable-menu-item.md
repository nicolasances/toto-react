# How to use `ToggleableMenuItem`

## What it does

`ToggleableMenuItem` renders a clickable setting row with ON/OFF-style status text.

## Usage

```tsx
import { ToggleableMenuItem } from "toto-react";
import { useState } from "react";

export default function ToggleItemExample() {
  const [enabled, setEnabled] = useState(false);

  return (
    <ToggleableMenuItem
      label="Car mode"
      isActive={enabled}
      onClick={() => setEnabled((value) => !value)}
      activeText="Enabled"
      inactiveText="Disabled"
    />
  );
}
```

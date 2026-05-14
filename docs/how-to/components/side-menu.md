# How to use `SideMenu`

## What it does

`SideMenu` renders a top-right menu button that opens a slide-out panel with regular and toggleable menu items.

## Usage

```tsx
import { SideMenu, type SideMenuItem, type SideMenuToggleableItem } from "toto-react";
import { useState } from "react";

export default function SettingsMenu() {
  const [carMode, setCarMode] = useState(false);

  const items: SideMenuItem[] = [
    { label: "Profile", onClick: () => console.log("profile") },
    { label: "Logout", onClick: () => console.log("logout") },
  ];

  const toggleableItems: SideMenuToggleableItem[] = [
    {
      label: "Car mode",
      isActive: carMode,
      onClick: () => setCarMode((value) => !value),
      activeText: "ON",
      inactiveText: "OFF",
    },
  ];

  return <SideMenu items={items} toggleableItems={toggleableItems} />;
}
```

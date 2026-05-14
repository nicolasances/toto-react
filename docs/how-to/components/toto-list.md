# How to use `TotoList`

## What it does

`TotoList` displays a clickable list of items with icon, title, and optional subtitle, plus a loading skeleton mode.

## Usage

```tsx
import { TotoList, type TotoListItem } from "toto-react";

const items: TotoListItem[] = [
  {
    id: "spotify",
    icon: { src: "/images/spotify.svg", alt: "Spotify" },
    title: "Spotify",
    subtitle: "Music source",
    onClick: () => console.log("spotify"),
  },
];

export default function SourcesList() {
  return <TotoList items={items} loading={false} />;
}
```

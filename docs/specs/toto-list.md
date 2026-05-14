# Spec: TotoList Component

## Objective

Build a reusable `TotoList` React component for the `toto-react` library. The component renders a vertical list of items, each with a leading icon, a primary title, and an optional subtitle. It also supports a `loading` state that shows 3 animated placeholder rows.

**Who uses it**: Any consumer app in the Toto ecosystem (starting with `tome`'s sources page).  
**Success**: The `tome` sources page can be fully migrated to use `TotoList` with identical visual output and the loading animation matches the `RoundButton` loading circle.

---

## Core Logic

### Component API

```ts
interface TotoListItem {
  id: string;
  icon: {
    src: string;   // SVG path (passed to MaskedSvgIcon)
    alt: string;
    color?: string; // Tailwind bg-* class, default: "bg-cyan-800"
  };
  title: string;
  subtitle?: string;
  onClick: () => void;
}

interface TotoListProps {
  items?: TotoListItem[];
  loading?: boolean;
}
```

### Row Layout

Each row (`TotoListItem`) renders as:
```
[ icon circle ] | Title (bold, truncated)
                | Subtitle (muted, small)
```
- Icon container: `rounded-full border border-cyan-800 p-2`
- Icon: `MaskedSvgIcon` — `w-5 h-5`, color from `item.icon.color` (default `bg-cyan-800`)
- Title: `text-sm font-medium truncate`
- Subtitle: `text-xs text-muted-foreground`
- Row: `flex items-center gap-3`, press scale animation (`scale(0.98)` on mouse/touch down)

### Loading State

When `loading={true}`, renders **exactly 3** placeholder rows. Each row:
- **Icon area**: same animated SVG stroke circle as `RoundButton`'s loading animation (`fillCircle` keyframe), rendered in a `rounded-full border border-cyan-800 p-2 w-9 h-9` container
- **Title shimmer**: `h-4 rounded-md` block with shimmer gradient animation, varying widths (`w-10/12`, `w-8/12`, `w-7/12`)
- **Subtitle shimmer**: `h-3 rounded-md mt-2` block, one size smaller/shorter

### Shimmer Animation (Bundled)

The shimmer CSS is **not** assumed to exist in the consumer's stylesheet. The component injects it inline via a `<style>` tag:

```css
@keyframes toto-shimmer {
  0%   { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
.toto-shimmer {
  background: linear-gradient(90deg, #26767f 0%, #1f6c75 50%, #18646e 100%);
  background-size: 200% 100%;
  animation: toto-shimmer 1.5s ease-in-out infinite;
}
```

Uses a namespaced class (`toto-shimmer`) to avoid collisions with consumer CSS.

### Loading Circle Animation

Reuses the exact `fillCircle` SVG animation from `RoundButton`:
- `<svg viewBox="0 0 32 32">` with a `<circle cx="16" cy="16" r="15">`
- Stroke: `#0891b2`, strokeWidth: `1`
- `@keyframes fillCircle` cycling `stroke-dashoffset` from full → 0 → negative full over 2s

---

## Out of Scope

- Custom row rendering (no `renderItem` prop)
- Pagination or infinite scroll
- Empty state rendering (consumer handles empty state outside the component)
- Error state rendering
- Removing `SourcesListSkeleton` from `tome` (that's Task 2 / issue tome#241)
- Migrating any page other than the sources page to `TotoList`

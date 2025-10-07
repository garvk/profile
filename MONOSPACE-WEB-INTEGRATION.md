# Monospace Web Library Integration Guide

## Overview

The `@owickstrom/the-monospace-web` library has been integrated into your website using a **hybrid approach** that combines:
- Your existing Tailwind CSS utilities
- Monospace web's semantic HTML styling
- Character-aligned grid background (like the debug mode)

## What Was Done

### 1. Package Installation
```bash
npm install @owickstrom/the-monospace-web
```

### 2. CSS Integration
- Imported the monospace web CSS in `src/index.css`
- Added style overrides to prevent conflicts with Tailwind
- Created `.monospace-grid-bg` utility class for the character grid background

### 3. Layout Update
- Added `monospace-grid-bg` class to the main Layout component
- Grid background is now visible across all pages

## How to Use Monospace Web Features

### Grid Background
The character-aligned grid is now visible on all pages via the `.monospace-grid-bg` class. This gives the same effect as the "debug mode" on the original library demo.

### Available Features Per Page

#### **Home Page** (`src/pages/Home.tsx`)

**Current features you can enhance:**

1. **Lists** - Use tree-style lists for hierarchical content:
```tsx
<ul className="tree">
  <li>parent
    <ul>
      <li>child 1</li>
      <li>child 2</li>
    </ul>
  </li>
</ul>
```

2. **Blockquotes** - Already styled automatically:
```tsx
<blockquote>Your quote here</blockquote>
```

3. **Details/Summary** - For expandable sections:
```tsx
<details>
  <summary>Click to expand</summary>
  <p>Hidden content</p>
</details>
```

#### **Projects Page** (`src/pages/Projects.tsx`)

**Recommended enhancements:**

1. **Tables** - Display project metadata in tables:
```tsx
<table>
  <thead>
    <tr>
      <th>Year</th>
      <th>Project</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2024</td>
      <td>cogentiq</td>
      <td>active</td>
    </tr>
  </tbody>
</table>
```

2. **ASCII Diagrams** - Visualize architecture:
```tsx
<figure>
  <pre>{`
┌─────────────┐     ┌─────────────┐
│   Frontend  │────▶│   Backend   │
└─────────────┘     └─────────────┘
  `}</pre>
  <figcaption>System Architecture</figcaption>
</figure>
```

3. **Ordered Lists** - For project timelines:
```tsx
<ol>
  <li>Initial concept</li>
  <li>Development
    <ol>
      <li>Phase 1</li>
      <li>Phase 2</li>
    </ol>
  </li>
  <li>Launch</li>
</ol>
```

#### **Journey Page** (`src/pages/Journey.tsx`)

**Perfect for timeline visualization:**

1. **Tree Lists** - Show career progression:
```tsx
<ul className="tree">
  <li>Career Path
    <ul>
      <li>2013: Actuarial Science</li>
      <li>2017: Self-taught Coding</li>
      <li>2020: DeFi
        <ul>
          <li>Euler Finance</li>
          <li>Protocol Research</li>
        </ul>
      </li>
      <li>2024: AI/ML Systems</li>
    </ul>
  </li>
</ul>
```

2. **ASCII Timeline**:
```tsx
<pre>{`
2013 ─────┐
          │ Actuarial Science
2017 ─────┼────┐
          │    │ Self-taught Coding
2020 ─────┼────┼────┐
          │    │    │ DeFi & Blockchain
2024 ─────┴────┴────┴────▶ AI/ML Systems
`}</pre>
```

#### **Philosophy Page** (`src/pages/Philosophy.tsx`)

**Best for long-form content:**

1. **Semantic HTML** - Use proper tags for better styling:
```tsx
<article>
  <h2>Core Beliefs</h2>
  <p>First principle...</p>
  <blockquote>Key insight</blockquote>
  <p>Explanation...</p>
</article>
```

2. **Horizontal Rules** - Styled automatically:
```tsx
<hr />
```

#### **Company Page** (`src/pages/Company.tsx`)

**Great for structured data:**

1. **Tables** - Team structure, metrics:
```tsx
<table>
  <tr>
    <td className="width-min">Founded</td>
    <td>2024</td>
  </tr>
  <tr>
    <td className="width-min">Focus</td>
    <td>AI Systems</td>
  </tr>
</table>
```

2. **Grid Layout** - For team cards:
```tsx
<div className="grid">
  <div>Member 1</div>
  <div>Member 2</div>
  <div>Member 3</div>
</div>
```

#### **Contact Page** (`src/pages/Contact.tsx`)

**Form elements are styled automatically:**

```tsx
<form>
  <label>
    Name
    <input type="text" placeholder="Your name" />
  </label>
  
  <label>
    Message
    <textarea placeholder="Your message"></textarea>
  </label>
  
  <button type="submit">Send</button>
</form>
```

### Advanced Features

#### ASCII Art Examples

**Box Drawing:**
```tsx
<pre>{`
╭─────────────────────────╮
│  Monospace Web Feature  │
├─────────────────────────┤
│  Character-aligned grid │
│  Semantic HTML styling  │
│  ASCII diagrams         │
╰─────────────────────────╯
`}</pre>
```

**Flow Charts:**
```tsx
<figure>
  <pre>{`
    ┌───────┐
    │ Start │
    └───┬───┘
        │
    ┌───▼────┐
    │Process │
    └───┬────┘
        │
    ┌───▼───┐
    │  End  │
    └───────┘
  `}</pre>
  <figcaption>Process Flow</figcaption>
</figure>
```

**Data Visualization:**
```tsx
<pre>{`
         Projects by Year
                              
    │                     
15  │           ████      
    │           ████      
    │     ████  ████      
10  │     ████  ████  ████
    │     ████  ████  ████
 5  │ ████████  ████  ████
    │ ████████  ████  ████
 0  └─▀────▀────▀────▀───
    2022  2023  2024  2025
`}</pre>
```

## CSS Classes Available

### From Monospace Web:
- `.tree` - Tree-style lists with connecting lines
- `.grid` - Auto-sizing grid containers
- `.width-min` - Minimum width table columns
- `.width-auto` - Auto-expanding table columns

### Custom Utilities:
- `.monospace-grid-bg` - Character-aligned grid background
- `.line-frame` - Your existing border utility
- `.line-frame-strong` - Your existing strong border utility

## Styling Behavior

### Automatic Styling:
These elements are automatically styled by the library:
- `<h1>` through `<h6>` - Headers with proper spacing
- `<p>` - Paragraphs with line-height alignment
- `<a>` - Links with underlines
- `<blockquote>` - Quoted text
- `<ul>` and `<ol>` - Lists with proper bullets/numbers
- `<table>`, `<th>`, `<td>` - Tables with borders
- `<button>`, `<input>`, `<textarea>` - Form elements
- `<details>` and `<summary>` - Collapsible sections
- `<pre>` and `<code>` - Code blocks
- `<figure>` and `<figcaption>` - Figures with captions
- `<hr>` - Horizontal rules

### Tailwind Override:
Your Tailwind classes still work! The integration preserves:
- Spacing utilities (margin, padding)
- Layout utilities (flex, grid)
- Color utilities
- Custom utilities from your design system

## Best Practices

1. **Use Semantic HTML** - The library works best with proper HTML5 elements
2. **Minimize Inline Styles** - Let the library handle typography and spacing
3. **ASCII Art** - Use `<pre>` tags wrapped in `<figure>` for diagrams
4. **Tables** - Great for structured data, metrics, timelines
5. **Lists** - Use `.tree` class for hierarchical relationships
6. **Forms** - Standard HTML forms are automatically styled

## Example: Converting a Section

**Before (Tailwind-heavy):**
```tsx
<div className="border border-border p-6 space-y-4">
  <div className="text-lg font-semibold">Project Name</div>
  <div className="text-sm text-muted-foreground">Description</div>
  <div className="flex gap-2">
    <span className="text-xs">[tag1]</span>
    <span className="text-xs">[tag2]</span>
  </div>
</div>
```

**After (Hybrid approach):**
```tsx
<article className="border border-border p-6">
  <h3>Project Name</h3>
  <p>Description</p>
  <ul>
    <li>[tag1]</li>
    <li>[tag2]</li>
  </ul>
</article>
```

## Grid Background Control

The grid is currently **always on**. To make it toggleable:

1. Create a state in your Layout:
```tsx
const [showGrid, setShowGrid] = useState(true);
```

2. Conditionally apply the class:
```tsx
<div className={`min-h-screen bg-background ${showGrid ? 'monospace-grid-bg' : ''}`}>
```

3. Add a toggle button:
```tsx
<button onClick={() => setShowGrid(!showGrid)}>
  Toggle Grid
</button>
```

## Further Customization

### Adjust Grid Opacity
In `src/index.css`, modify the grid background color mix:
```css
/* Current: 10% foreground, 90% background */
color-mix(in srgb, hsl(var(--foreground)) 10%, hsl(var(--background)) 90%)

/* Make it lighter: 5% foreground */
color-mix(in srgb, hsl(var(--foreground)) 5%, hsl(var(--background)) 95%)

/* Make it darker: 20% foreground */
color-mix(in srgb, hsl(var(--foreground)) 20%, hsl(var(--background)) 80%)
```

### Line Height
Adjust the grid cell height by modifying `--line-height` in `:root`:
```css
:root {
  --line-height: 1.20rem; /* Default */
  --line-height: 1.40rem; /* Larger spacing */
}
```

## Resources

- **Library Documentation**: https://owickstrom.github.io/the-monospace-web/
- **GitHub Repository**: https://github.com/owickstrom/the-monospace-web
- **Box Drawing Characters**: https://en.wikipedia.org/wiki/Box-drawing_characters

## Next Steps

1. Test the grid background by running `npm run dev`
2. Experiment with semantic HTML on one page
3. Add ASCII diagrams where appropriate
4. Convert sections incrementally
5. Keep your Tailwind utilities for layout and spacing

The integration is complete and ready to use! Start by testing the grid background, then gradually incorporate monospace web features into your pages.

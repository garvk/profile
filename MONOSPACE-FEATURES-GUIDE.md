# Complete Monospace Web Features Guide for Your Website

## ✅ Already Implemented

The character-aligned grid background is **already active** on your website! It's applied via the `.monospace-grid-bg` class on your Layout component.

The gridlines appear as subtle lines forming a character-based grid across the entire background, similar to the debug mode on the monospace web demo.

---

## 📋 All Available Monospace Web Features

### 1. **Typography & Text Elements**

#### Headings (Auto-styled)
```tsx
<h1>Main Title</h1>      // Large, uppercase, 2x line height
<h2>Section</h2>         // Uppercase, bold
<h3>Subsection</h3>      // Bold
<h4>, <h5>, <h6>         // Bold, progressively smaller
```

**Recommendation for your site:**
- Use `<h1>` sparingly (Home page main title)
- Use `<h2>` for major sections (work, journey, philosophy)
- Use `<h3>` for project titles

#### Paragraphs (Auto-styled)
```tsx
<p>Regular paragraph text with proper line-height alignment.</p>
```

#### Emphasis (Auto-styled)
```tsx
<strong>Bold text</strong>
<em>Italic text</em>
<code>Inline code</code>
```

---

### 2. **Lists**

#### Standard Unordered List
```tsx
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Nested
    <ul>
      <li>Sub-item</li>
    </ul>
  </li>
</ul>
```

#### Ordered List (Auto-numbered)
```tsx
<ol>
  <li>First</li>
  <li>Second
    <ol>
      <li>Nested automatically numbered as 2.1</li>
      <li>2.2</li>
    </ol>
  </li>
  <li>Third</li>
</ol>
```

#### Tree List (with connecting lines) ⭐ HIGHLY RECOMMENDED
```tsx
<ul className="tree">
  <li>Root
    <ul>
      <li>Branch 1</li>
      <li>Branch 2
        <ul>
          <li>Leaf 1</li>
          <li>Leaf 2</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>
```

**🎯 Recommended for your site:**
- **Journey page**: Career timeline as tree structure
- **Projects page**: Technology stack visualization
- **Company page**: Team hierarchy

---

### 3. **Tables** ⭐ EXCELLENT FOR YOUR CONTENT

#### Basic Table
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

#### Table with Column Widths
```tsx
<table>
  <tr>
    <td className="width-min">Label</td>  {/* Minimal width */}
    <td className="width-auto">Value that can expand</td>  {/* Grows to fill */}
  </tr>
</table>
```

**🎯 Recommended for your site:**
- **Projects page**: Project metadata (year, status, role, tags)
- **Journey page**: Timeline table
- **Company page**: Company info, metrics
- **About page**: Skills matrix

---

### 4. **Interactive Elements**

#### Details/Summary (Collapsible)
```tsx
<details>
  <summary>Click to expand</summary>
  <p>Hidden content that expands</p>
</details>
```

**🎯 Recommended for your site:**
- **Projects page**: Detailed project descriptions
- **Philosophy page**: Expandable belief details
- **Journey page**: Detailed year breakdowns

#### Links (Auto-styled with underline)
```tsx
<a href="/projects">Projects</a>
```

#### Horizontal Rule
```tsx
<hr />  {/* Styled with triple-line border */}
```

---

### 5. **Forms** (All auto-styled)

#### Input Fields
```tsx
<label>
  Name
  <input type="text" placeholder="Your name" />
</label>
```

#### Text Area
```tsx
<label>
  Message
  <textarea placeholder="Your message"></textarea>
</label>
```

#### Buttons
```tsx
<button>Submit</button>
<button type="submit">Send</button>
```

#### Checkboxes & Radio Buttons
```tsx
<input type="checkbox" /> Option 1
<input type="radio" name="choice" /> Choice A
```

**🎯 Recommended for your site:**
- **Contact page**: Full form styling

---

### 6. **ASCII Diagrams & Art** ⭐ UNIQUE FEATURE

#### Box Drawing
```tsx
<pre>{`
╭─────────────────────────╮
│  Your Content Here      │
├─────────────────────────┤
│  Multiple lines         │
│  Perfectly aligned      │
╰─────────────────────────╯
`}</pre>
```

#### Flow Charts
```tsx
<figure>
  <pre>{`
    ┌──────────┐
    │  Start   │
    └────┬─────┘
         │
    ┌────▼─────┐
    │ Process  │
    └────┬─────┘
         │
    ┌────▼─────┐
    │   End    │
    └──────────┘
  `}</pre>
  <figcaption>Process Flow</figcaption>
</figure>
```

#### Timeline Diagrams
```tsx
<pre>{`
2013 ────┐
         │ Actuarial Science
2017 ────┼────┐
         │    │ Self-taught Coding
2020 ────┼────┼────┐
         │    │    │ DeFi Research
2024 ────┴────┴────┴───► AI/ML Systems
`}</pre>
```

#### Architecture Diagrams
```tsx
<pre>{`
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│  Frontend   │────▶│   Backend   │────▶│  Database   │
│   React     │     │   Node.js   │     │   MongoDB   │
└─────────────┘     └─────────────┘     └─────────────┘
`}</pre>
```

#### Bar Charts
```tsx
<pre>{`
         Project Impact
                              
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

**🎯 Recommended for your site:**
- **Journey page**: Timeline visualization with ASCII
- **Projects page**: Architecture diagrams for complex projects
- **Company page**: Organizational structure diagram
- **Home page**: Career progression diagram

---

### 7. **Quotes & Citations**

#### Blockquote (Auto-styled)
```tsx
<blockquote>
  "why are we not employing actuarial skills outside insurance and pension?"
</blockquote>
```

**Already used on your Home page!** ✅

---

### 8. **Media Elements**

#### Images (Auto-sized to grid)
```tsx
<img src="/path/to/image.jpg" alt="Description" />
```

#### Figures with Captions
```tsx
<figure>
  <img src="/path/to/image.jpg" alt="Description" />
  <figcaption>Image caption in italic</figcaption>
</figure>
```

#### Video (Auto-sized to grid)
```tsx
<video src="/path/to/video.mp4" controls />
```

---

### 9. **Grid Layout System**

#### Auto-sizing Grid
```tsx
<div className="grid">
  <div>Cell 1</div>
  <div>Cell 2</div>
  <div>Cell 3</div>
</div>
```

The grid automatically sizes based on number of children (supports 1-9 cells).

**🎯 Recommended for your site:**
- **Projects page**: Feature comparison grids
- **Company page**: Team member cards

---

## 🎯 Specific Recommendations for Each Page

### **Home Page** (`src/pages/Home.tsx`)

**Current state**: Good use of blockquote ✅

**Recommended additions**:
1. Add ASCII career progression diagram:
```tsx
<figure>
  <pre>{`
  2013          2017          2020          2024
   │             │             │             │
   ▼             ▼             ▼             ▼
Actuarial ──► Coding ──► DeFi ──► AI/ML
 Science     Self-taught  Research  Systems
  `}</pre>
  <figcaption>Career Evolution</figcaption>
</figure>
```

2. Use `<details>` for expandable sections:
```tsx
<details>
  <summary>Recent Activity</summary>
  <ul>
    <li>mar 2025: launched cogentiq</li>
    <li>feb 2025: research: ner with llms</li>
  </ul>
</details>
```

---

### **Projects Page** (`src/pages/Projects.tsx`)

**Current state**: Array-mapped cards with borders

**Recommended enhancements**:

1. **Convert to table format** for better data display:
```tsx
<table>
  <thead>
    <tr>
      <th className="width-min">Year</th>
      <th>Project</th>
      <th className="width-min">Status</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2024</td>
      <td><strong>cogentiq</strong></td>
      <td>active</td>
      <td>multi-agentic ai platform</td>
    </tr>
  </tbody>
</table>
```

2. **Add ASCII architecture diagrams** for technical projects:
```tsx
<figure>
  <pre>{`
┌─────────────┐
│ Multi-Agent │
│  Platform   │
└──────┬──────┘
       │
   ┌───┴───┐
   ▼       ▼
┌──────┐ ┌──────┐
│Agent1│ │Agent2│
└──────┘ └──────┘
  `}</pre>
  <figcaption>Cogentiq Architecture</figcaption>
</figure>
```

3. **Use tree lists** for technology stacks:
```tsx
<ul className="tree">
  <li>Technology Stack
    <ul>
      <li>Frontend
        <ul>
          <li>React</li>
          <li>TypeScript</li>
        </ul>
      </li>
      <li>Backend
        <ul>
          <li>Node.js</li>
          <li>Python</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>
```

4. **Use `<details>`** for long project descriptions:
```tsx
<details>
  <summary>Read full case study</summary>
  <p>Detailed project information...</p>
</details>
```

---

### **Journey Page** (`src/pages/Journey.tsx`)

**Highly recommended transformations**:

1. **ASCII Timeline**:
```tsx
<pre>{`
2013 ────────────────────┐
                         │
                    Actuarial Science
                    • University Studies
                    • Risk Management
                         │
2017 ────────────────────┼────────────┐
                         │            │
                    Self-taught       │
                    • Python          │
                    • Web Dev         │
                         │            │
2020 ────────────────────┼────────────┼────────┐
                         │            │        │
                    DeFi Research     │        │
                    • Euler Finance   │        │
                    • Protocol Design │        │
                         │            │        │
2024 ────────────────────┴────────────┴────────┴──►
                                                  │
                                            AI/ML Systems
                                            • Cogentiq
                                            • Multi-Agent
`}</pre>
```

2. **Tree structure** for career progression:
```tsx
<ul className="tree">
  <li>2013-2017: Actuarial Foundation
    <ul>
      <li>Risk assessment skills</li>
      <li>Statistical modeling</li>
      <li>Financial mathematics</li>
    </ul>
  </li>
  <li>2017-2020: Self-taught Developer
    <ul>
      <li>Python & JavaScript</li>
      <li>Web development</li>
      <li>First projects</li>
    </ul>
  </li>
</ul>
```

3. **Table format** for milestones:
```tsx
<table>
  <thead>
    <tr>
      <th className="width-min">Year</th>
      <th>Milestone</th>
      <th>Impact</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2013</td>
      <td>Started Actuarial Science</td>
      <td>Foundation in risk & probability</td>
    </tr>
  </tbody>
</table>
```

---

### **Philosophy Page** (`src/pages/Philosophy.tsx`)

**Recommended additions**:

1. **Use semantic HTML**:
```tsx
<article>
  <h2>Core Principles</h2>
  <p>First principle explanation...</p>
  
  <h3>Build in Public</h3>
  <blockquote>
    "Transparency breeds trust and accelerates learning."
  </blockquote>
  <p>Explanation...</p>
  
  <hr />
  
  <h3>First Principles Thinking</h3>
  <p>Details...</p>
</article>
```

2. **Ordered list** for principles:
```tsx
<ol>
  <li>First principles thinking
    <ol>
      <li>Break down complex problems</li>
      <li>Build from fundamentals</li>
    </ol>
  </li>
  <li>Iterative improvement</li>
  <li>Learning in public</li>
</ol>
```

3. **Details/summary** for deep dives:
```tsx
<details>
  <summary>Deep Dive: First Principles Thinking</summary>
  <p>Detailed explanation with examples...</p>
</details>
```

---

### **Company Page** (`src/pages/Company.tsx`)

**Recommended additions**:

1. **ASCII organizational chart**:
```tsx
<pre>{`
      ┌─────────────────┐
      │   In5 Labs      │
      └────────┬────────┘
               │
       ┌───────┴───────┐
       │               │
  ┌────▼────┐    ┌────▼────┐
  │  AI/ML  │    │ DeFi    │
  │ Systems │    │ Research│
  └─────────┘    └─────────┘
`}</pre>
```

2. **Table** for company info:
```tsx
<table>
  <tr>
    <td className="width-min">Founded</td>
    <td>2024</td>
  </tr>
  <tr>
    <td className="width-min">Focus</td>
    <td>AI Systems & DeFi</td>
  </tr>
  <tr>
    <td className="width-min">Location</td>
    <td>Remote-first</td>
  </tr>
</table>
```

3. **Grid layout** for services:
```tsx
<div className="grid">
  <div>
    <h3>AI Systems</h3>
    <p>Multi-agent platforms</p>
  </div>
  <div>
    <h3>DeFi</h3>
    <p>Protocol research</p>
  </div>
  <div>
    <h3>Consulting</h3>
    <p>Technical advisory</p>
  </div>
</div>
```

---

### **Contact Page** (`src/pages/Contact.tsx`)

**All form elements are auto-styled!**

```tsx
<form>
  <label>
    Name
    <input type="text" placeholder="Your name" required />
  </label>
  
  <label>
    Email
    <input type="email" placeholder="your@email.com" required />
  </label>
  
  <label>
    Subject
    <input type="text" placeholder="What's this about?" />
  </label>
  
  <label>
    Message
    <textarea rows={6} placeholder="Your message..."></textarea>
  </label>
  
  <button type="submit">Send Message</button>
</form>
```

---

## 🎨 Visual Customization Options

### Adjust Grid Opacity

In `src/index.css`, modify the color-mix percentage:

```css
/* Current (10% visible) */
color-mix(in srgb, hsl(var(--foreground)) 10%, hsl(var(--background)) 90%)

/* More visible (20%) */
color-mix(in srgb, hsl(var(--foreground)) 20%, hsl(var(--background)) 80%)

/* Subtle (5%) */
color-mix(in srgb, hsl(var(--foreground)) 5%, hsl(var(--background)) 95%)
```

### Toggle Grid On/Off

Add a toggle button to your Layout:

```tsx
const [showGrid, setShowGrid] = useState(true);

return (
  <div className={showGrid ? 'monospace-grid-bg' : ''}>
    <button onClick={() => setShowGrid(!showGrid)}>
      {showGrid ? 'Hide' : 'Show'} Grid
    </button>
    {/* rest of layout */}
  </div>
);
```

---

## 📦 Box Drawing Characters Reference

Common characters for ASCII art:

```
Lines:
─ │ ┌ ┐ └ ┘ ├ ┤ ┬ ┴ ┼

Double lines:
═ ║ ╔ ╗ ╚ ╝ ╠ ╣ ╦ ╩ ╬

Rounded corners:
╭ ╮ ╰ ╯

Arrows:
→ ← ↑ ↓ ▶ ◀ ▲ ▼

Blocks:
█ ▓ ▒ ░ ▀ ▄

Special:
• ● ○ ◆ ◇ ■ □
```

---

## 🚀 Priority Implementation Plan

### Phase 1: Quick Wins (High Impact, Low Effort)
1. ✅ Grid background (already done!)
2. Add ASCII timeline to Journey page
3. Convert one project to use `<details>` for expandable description
4. Add blockquotes to Philosophy page

### Phase 2: Medium Effort
1. Create table layout for Projects page
2. Add tree structure to Journey page
3. Add ASCII diagram to Company page
4. Style Contact form with semantic HTML

### Phase 3: Polish
1. Add ASCII architecture diagrams to technical projects
2. Create interactive grid toggle
3. Add figures with captions for images
4. Implement comprehensive tree structures

---

## ✅ Summary

You have access to:
- ✅ **Character-aligned grid background** (active)
- 📊 **Tables** with auto-sizing and borders
- 🌳 **Tree lists** with connecting lines
- 🎨 **ASCII art** support with perfect alignment
- 📋 **Forms** with auto-styled inputs
- 🔄 **Collapsible sections** with details/summary
- 📈 **Grid layouts** with auto-sizing
- 🎯 **Semantic HTML** auto-styling

**The grid is already working!** You should see subtle gridlines across your entire site. If they're too subtle, increase the opacity percentage in the CSS.

**Best features for your content:**
1. ASCII timeline for Journey page
2. Tables for Projects page
3. Tree lists for hierarchical data
4. Details/summary for expandable content
5. ASCII diagrams for technical projects

Start with the Journey page - an ASCII timeline would look amazing with your career progression!

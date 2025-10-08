# Frontend Development Guide
**Personal Website for Garv Khurana**

## Table of Contents
1. [Design Philosophy](#design-philosophy)
2. [Story Arc & Narrative Flow](#story-arc--narrative-flow)
3. [Content Structure & Data Model](#content-structure--data-model)
4. [Typography System](#typography-system)
5. [User Flows & Page Architecture](#user-flows--page-architecture)
6. [Technical Implementation](#technical-implementation)
7. [Component Library](#component-library)
8. [Content Integration Patterns](#content-integration-patterns)
9. [Implementation Context for Next Agent](#implementation-context-for-next-agent)

---

## Design Philosophy

### Core Inspiration
- **Primary Reference**: [The Monospace Web](https://owickstrom.github.io/the-monospace-web/)
- **Design Language**: Line drawings over bold shapes, greyscale foundation
- **Visual Metaphor**: Personal journal meets architect's portfolio
- **Content Priority**: Text is the hero, design frames but doesn't distract

### Key Design Principles

**1. Line-Based Visual Language**
- Use thin (1px) borders for structure
- Grid-based layouts with visible structure lines
- Avoid heavy boxes, shadows, or rounded corners
- Think architectural drawings: precise, clean, intentional

**2. Greyscale Foundation + Strategic Color**
- Base palette: Pure black (#000), pure white (#FFF), greys
- Minimal color: Consider one accent for interactive elements or highlighting key moments
- Photography/icons: May introduce subtle color, but sparingly
- Professional, timeless, doesn't date quickly

**3. Typography as Content Hero**
- Large, generous line-height for readability
- Clear hierarchy through size and weight, not color
- Monospace for code/technical elements
- Serif or quality sans-serif for body text

**4. Whitespace & Breathing Room**
- Generous margins and padding
- Content should never feel cramped
- Use whitespace to create rhythm and focus

**5. Professional but Approachable**
- Not corporate stiff, not startup casual
- Intellectual yet accessible
- Reflects depth of thought without pretension

---

## Story Arc & Narrative Flow

### Recommended Primary Arc: **Problem-Solution-Impact**

**Why This Arc Works Best:**

Given your unique journey from actuarial science to DeFi to AI, the Problem-Solution-Impact narrative creates the most compelling story because:

1. **Hooks with Curiosity**: "Why are actuarial skills confined to insurance?" - this question drives your entire journey
2. **Demonstrates Agency**: Shows self-directed transformation (self-taught coding → $250K validation)
3. **Builds Credibility**: Each phase validates the next (trading success → DeFi expertise → AI leadership)
4. **Creates Connection**: Visitors see your thought process, not just achievements

**Alternative Arcs to Weave In:**

While Problem-Solution-Impact is the spine, incorporate:
- **Chronological markers** for grounding (2013→2025 timeline)
- **Expertise-first hooks** on project pages (lead with what, then how/why)
- **Philosophy-driven** sections (values page, company story)

### Narrative Structure Template

```
HOOK (Problem)
"Why are we not employing actuarial skills outside insurance?"

JOURNEY (Solution Building)
- Self-taught transformation: Zero coding → $250K in services
- Applying risk frameworks to DeFi protocols
- Leading multi-agent AI architecture

VALIDATION (Impact)
- Market validation: $250K+ in algorithmic trading services
- Protocol security: Euler Risk Framework
- Enterprise AI: cogentiq platform at Fractal.ai

PHILOSOPHY (Why It Matters)
- Commercializing academic research
- Convergence of disciplines
- Building tools that outlast the builder
```

---

## Content Structure & Data Model

### Data Source Location: `profile-data/` Directory

**All content markdown files are located in `profile-data/` directory**. This is your single source of truth.

**Directory Structure:**
```
profile-data/
├── images/
│   └── Uniswap V3 offline simulator.png
├── projects/
│   ├── README.md
│   └── [12 project markdown files]
├── collaborators.md
├── company-story.md
├── personal-info-README.md
├── philosophy.md
├── profile.md
├── story.md
└── vision-mission.md
```

**Resume Location:** `public/` directory (for direct serving)

### Core Identity Files

| File | Location | Purpose | Key Content |
|------|----------|---------|-------------|
| **story.md** | `profile-data/` | Personal journey (2013-2025) | Career transformation: automobile → actuarial → self-taught coding → $250K trading → DeFi → AI leadership at Fractal.ai |
| **philosophy.md** | `profile-data/` | Work approach, beliefs, mindset | Commercializing research, questioning status quo, evidence-driven development, self-taught excellence, convergence of disciplines |
| **profile.md** | `profile-data/` | Structured professional info | Contact emails (khurana.garv@gmail.com, projects@garvkhurana.tech), current role, expertise, education, Top Rated Upwork ($250K+) |
| **vision-mission.md** | `profile-data/` | Core values & principles | Uncompromising quality, focus on client, think unconventionally, learn & grow, extreme trust & accountability |
| **company-story.md** | `profile-data/` | Techmendous → in5 Labs | Founded May 2020, "invention for invention's sake" (in5. = inv.), R&D as service, long-term vision for world-class scientists |
| **collaborators.md** | `profile-data/` | Team & partnerships | in5 Labs team, Fractal.ai team, hiring experience across roles |
| **personal-info-README.md** | `profile-data/` | Meta-documentation | Overview of all files, themes, guidance for developers |

### Project Files (`profile-data/projects/`)

| File | Project | Status | One-Line Description |
|------|---------|--------|---------------------|
| **aggrag.md** | aggrag ★★★ | Active | Framework to configure, run, compare, deploy multiple RAG pipelines in unified experiment-to-production stack |
| **cogentiq.md** | cogentiq | Active | Multi-agentic platform at Fractal.ai - Lead Architect (Try: cogentiq.fractal.ai) |
| **underwriting-risk.md** | Underwriting Risk | Active | Vertical solution built on cogentiq - Lead tech & product owner |
| **insightsin5.md** | insightsin5 | Active | AI assistant deriving business insights for Shopify store owners |
| **ner-news.md** | NER from News | Active | Named Entity Recognition from news articles using LLMs/RAG vs ML baselines |
| **euler-risk-framework.md** | Euler Risk Framework | Archived | DeFi risk management (collateral, liquidity, oracle, smart contract risk) |
| **euler-swap.md** | EulerSwap Research | Archived | Early research (Dec 2022-May 2023) for AMM protocol, launched June 2025 |
| **uniswapv3-simulator.md** | UniswapV3 Simulator | Archived | Protocol analysis & liquidity position modeling tool |
| **balancer-simulations.md** | Balancer Simulations | Archived | Pool dynamics & liquidity provision strategy analysis |
| **ftso-oracle.md** | FTSO Oracle | Archived | Flare Time Series Oracle implementation & integration |
| **topgun-arbitrage.md** | Topgun Arbitrage | Archived | Algorithmic trading platform for crypto markets |
| **gravyup.md** | Gravyup | Unknown | [Details in file] |

### Resume

| File | Location | Purpose |
|------|----------|---------|
| **GarvKhuranaResume.pdf** | `public/` | Professional resume for download |

### Content Hierarchy

```
Level 1: WHO (Homepage)
├─ Immediate hook: Current role + core expertise
├─ Problem statement: The question that drives you
├─ Resume download CTA
└─ Navigation to deeper sections

Level 2: WHAT (Work/Projects)
├─ Active projects (cogentiq, underwriting, insightsin5, aggrag, ner-news)
├─ Archived projects (Euler, trading systems, DeFi work)
├─ Project detail pages (individual deep-dives)
└─ Resume download option

Level 3: HOW (Philosophy & Approach)
├─ Working philosophy
├─ Learning approach (self-taught excellence)
├─ Innovation mindset (convergence of disciplines)
└─ Values (from profile-data/vision-mission.md)

Level 4: WHY (Company & Vision)
├─ Company evolution (Techmendous → in5 Labs)
├─ Mission: Commercializing research, enabling inventions
├─ Long-term vision: Training world-class scientists
└─ Community building

Level 5: NOW (Current Focus)
├─ What you're building right now
├─ What you're learning
├─ Research interests
└─ Availability for collaboration
```

---

## Typography System

### Recommended Typeface Options

**Option 1: IBM Plex Mono + IBM Plex Serif (Recommended)**

**Why it works:**
- **IBM Plex Mono**: Technical precision, excellent code display, maintains readability at small sizes
- **IBM Plex Serif**: Pairs beautifully with mono, professional but warm, designed for screen reading
- **System synergy**: Both from same family = natural harmony
- **Character**: Technical meets thoughtful - perfect for your story
- **Open source**: Free, excellent font support

**Implementation:**
```css
/* Headings & UI */
font-family: 'IBM Plex Mono', 'Courier New', monospace;

/* Body text */
font-family: 'IBM Plex Serif', 'Georgia', serif;
```

**Option 2: Courier Prime + Inter**

**Why it works:**
- **Courier Prime**: Screenwriter's font, clean monospace, less technical than IBM Plex
- **Inter**: Modern sans-serif, excellent readability, variable font = flexible sizing
- **Character**: Architect's notebook aesthetic
- **Accessibility**: Both designed for high legibility

**Why it might not work:**
- Less technical feeling, may not reflect the engineering depth

**Option 3: JetBrains Mono + Charter**

**Why it works:**
- **JetBrains Mono**: Code-focused, ligatures, excellent for technical content
- **Charter**: Elegant serif, readable, professional
- **Character**: Engineering meets elegance

**Why it might not work:**
- Charter is less unique, might feel too traditional

### Type Scale & Hierarchy

```css
/* Suggested Scale (16px base) */
--text-xs: 0.75rem;    /* 12px - metadata, timestamps */
--text-sm: 0.875rem;   /* 14px - secondary text */
--text-base: 1rem;     /* 16px - body text */
--text-lg: 1.125rem;   /* 18px - large body */
--text-xl: 1.5rem;     /* 24px - section headings */
--text-2xl: 2rem;      /* 32px - page titles */
--text-3xl: 2.5rem;    /* 40px - hero text (optional) */

/* Line Heights */
--leading-tight: 1.25;
--leading-normal: 1.5;
--leading-relaxed: 1.75;
--leading-loose: 2;
```

---

## User Flows & Page Architecture

### Recommended Site Structure

```
Home (/)
├─ Hero: Current role + hook
├─ Resume download CTA
├─ Quick navigation cards (Work, Now, Philosophy, Company)
├─ Recent activity timeline
└─ Contact information

Work/Projects (/work or /projects)
├─ Filter by: All / Active / DeFi / AI / Trading
├─ Timeline view OR category groupings
├─ Each project card → Detail page
└─ Individual project pages: /work/[project-slug]

Philosophy (/philosophy)
├─ Driving beliefs
├─ Work approach
├─ Learning philosophy
├─ Innovation mindset
└─ Collaboration principles

Journey (/journey or /story)
├─ Interactive timeline: 2013 → 2025
├─ Key milestones with context
├─ Transformational moments
└─ Skills evolution visualization

Company (/company or /about/company)
├─ Techmendous → in5 Labs evolution
├─ Mission & vision
├─ Core values
├─ Team & collaborators
└─ Long-term vision

Now (/now)
├─ Current projects
├─ Learning focus
├─ Research interests
└─ Availability & collaboration

Contact (/contact)
├─ Email addresses
├─ LinkedIn
├─ Resume download
├─ Project inquiry form (optional)
└─ Collaboration areas
```

### Resume Download Feature

**Placement Locations:**
1. **Homepage Hero** - Primary CTA alongside "View Projects"
2. **Navigation Menu** - "Resume" link (downloads on click)
3. **Contact Page** - Prominent download section
4. **Work Page** - "View Full Resume" option at bottom

**Component Specification:**

```tsx
// components/ResumeDownload.tsx
interface ResumeDownloadProps {
  variant?: 'primary' | 'secondary' | 'inline';
  showIcon?: boolean;
  className?: string;
}

const ResumeDownload = ({ 
  variant = 'primary', 
  showIcon = true,
  className 
}: ResumeDownloadProps) => {
  // Resume is in public/ directory
  const resumeUrl = '/GarvKhuranaResume.pdf';
  
  return (
    <a 
      href={resumeUrl}
      download="Garv-Khurana-Resume-2025.pdf"
      className={cn(
        "inline-flex items-center gap-2 transition-colors",
        variant === 'primary' && "border border-black px-6 py-3 hover:bg-black hover:text-white",
        variant === 'secondary' && "text-sm border-b border-grey-400 hover:border-black",
        variant === 'inline' && "underline hover:no-underline",
        className
      )}
    >
      {showIcon && <DownloadIcon className="w-4 h-4" />}
      Download Resume
    </a>
  );
};
```

**Design Specifications:**
- **Button Style**: 1px border (line-frame aesthetic)
- **Hover State**: Inverted (black bg, white text)
- **Icon**: Simple download arrow (optional)
- **Text**: "Download Resume"
- **File**: Served from `public/` directory

**Example Usage in Homepage:**

```tsx
<section className="max-w-2xl">
  <h1 className="text-3xl font-bold mb-4">Garv Khurana</h1>
  <p className="text-lg">
    Lead Architect at Fractal.ai. Building at the intersection of 
    DeFi, risk, and AI systems.
  </p>
  
  <div className="flex gap-4 mt-8">
    <ResumeDownload variant="primary" />
    <Link 
      href="/work" 
      className="border border-grey-400 px-6 py-3 hover:border-black"
    >
      View Projects
    </Link>
  </div>
</section>
```

### User Flows for Missing Content

**1. Individual Project Detail Pages**
```
/work/[project-slug]
├─ Hero: Project name + status + role
├─ Overview & description
├─ Key features/components
├─ Technology stack
├─ Impact & outcomes
├─ Related projects (linked)
├─ Timeline/milestones
└─ CTA: View live project / Read more / Contact
```

**Current Status**: Projects listed on single page, no individual detail pages

**Recommendation**: Create dynamic routes for each project markdown file

**2. Philosophy/Values Deep Dive**
```
/philosophy
├─ Section 1: Driving Beliefs
│   ├─ Commercializing research
│   ├─ Questioning status quo
│   └─ Moving at speed of technology
├─ Section 2: Work Approach
├─ Section 3: Learning Philosophy
└─ Section 4: Innovation Mindset
```

**Current Status**: Content exists in `profile-data/philosophy.md`, no dedicated page

**Recommendation**: Create dedicated philosophy page with scrollable sections

**3. Interactive Journey/Timeline**
```
/journey or /story
├─ Timeline view (horizontal or vertical)
├─ Key phases:
│   ├─ 2013: Automobile → Actuarial
│   ├─ 2014-2017: RSA, questioning status quo
│   ├─ 2017-2018: Self-taught coding
│   ├─ 2019-2020: $250K validation
│   ├─ 2020-2023: Techmendous + DeFi
│   └─ 2023-present: AI leadership
└─ Each milestone: Expandable with context
```

**Current Status**: Content exists in `profile-data/story.md`, no visual timeline

**Recommendation**: Create timeline component that visualizes the journey

**4. Company Evolution Page**
```
/company
├─ Hero: "From service company to invention lab"
├─ Timeline: Techmendous → in5 Labs
├─ Mission statements
├─ Core values (from profile-data/vision-mission.md)
├─ Philosophy: "Invention for invention's sake"
├─ Team & collaborators
└─ Long-term vision
```

**Current Status**: Content exists in `profile-data/company-story.md`, no dedicated page

**Recommendation**: Create dedicated company page

**5. Book recommendations/Writing Section** (Future) (Don't Include Now)
```
/notes or /writing
├─ List view of reading recommendations/essays/articles
├─ Filter by: Topic / Year
├─ Each note → Detail page
└─ RSS feed (optional)
```

**Current Status**: Empty Notes page exists

**Recommendation**: Structure for future blog/essay content

### Pages to Consider Omitting

**1. Traditional "About" Page**
- **Why**: Redundant with Journey + Philosophy + Now
- **Alternative**: Make `/journey` or `/philosophy` the "about" equivalent
- **Current Implementation**: About page exists but could be merged

**2. Generic "Services" Page**
- **Why**: You're not primarily service-based anymore
- **Alternative**: Emphasize availability in `/now` and project inquiry in `/contact`

**3. Blog/News Section (Initially)**
- **Why**: Focus on core story first, add writing later
- **Alternative**: Start with Notes placeholder, populate when ready

---

## Technical Implementation

### Markdown Parsing Strategy

**Recommended Approach: Static Generation**

```typescript
// lib/markdown.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

interface ProjectData {
  slug: string;
  title: string;
  status: string;
  role?: string;
  year?: string;
  description: string;
  content: string;
  tags?: string[];
}

export async function getProjectBySlug(slug: string): Promise<ProjectData> {
  const filePath = path.join(process.cwd(), 'profile-data/projects', `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  
  const { data, content } = matter(fileContents);
  
  // Parse markdown to HTML
  const processedContent = await remark()
    .use(html)
    .process(content);
  
  return {
    slug,
    title: data.title || extractTitle(content),
    status: data.status || extractStatus(content),
    role: data.role,
    year: data.year,
    description: data.description || '',
    content: processedContent.toString(),
    tags: data.tags || [],
  };
}

export function getAllProjects(): ProjectData[] {
  const projectsDirectory = path.join(process.cwd(), 'profile-data/projects');
  const filenames = fs.readdirSync(projectsDirectory);
  
  return filenames
    .filter(filename => filename.endsWith('.md') && filename !== 'README.md')
    .map(filename => {
      const slug = filename.replace(/\.md$/, '');
      return getProjectBySlug(slug);
    });
}
```

### File Organization

```
src/
├── components/
│   ├── Layout.tsx
│   ├── Navigation.tsx
│   ├── ProjectCard.tsx
│   ├── Timeline.tsx
│   ├── ResumeDownload.tsx      # NEW: Resume download component
│   └── ui/
│       └── (shadcn components)
├── lib/
│   ├── markdown.ts        # Markdown parsing utilities
│   ├── content.ts         # Content helper functions
│   └── types.ts           # TypeScript interfaces
├── pages/
│   ├── index.tsx          # Home
│   ├── work/
│   │   ├── index.tsx      # Projects list
│   │   └── [slug].tsx     # Individual project
│   ├── philosophy.tsx
│   ├── journey.tsx
│   ├── company.tsx
│   ├── now.tsx
│   └── contact.tsx
└── styles/
    └── globals.css
```

### Content Loading Pattern

```typescript
// For static pages - loading from profile-data/
export async function getStaticProps() {
  const markdownContent = fs.readFileSync('profile-data/story.md', 'utf8');
  const { data, content } = matter(markdownContent);
  
  return {
    props: {
      content: await markdownToHtml(content),
      metadata: data,
    },
  };
}

// For dynamic project pages
export async function getStaticPaths() {
  const projects = getAllProjects();
  
  return {
    paths: projects.map(project => ({
      params: { slug: project.slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const project = await getProjectBySlug(params.slug);
  
  return {
    props: { project },
  };
}
```

---

## Component Library

### Core Components Needed

**1. ProjectCard**
```tsx
interface ProjectCardProps {
  title: string;
  year: string;
  status: 'active' | 'archived' | 'live';
  role: string;
  description: string;
  tags: string[];
  link?: string;
}

// Line-frame card with hover state
// Status indicator with color coding
// Tag display
```

**2. Timeline**
```tsx
interface TimelineEvent {
  year: string;
  date?: string;
  title: string;
  description: string;
  type: 'milestone' | 'project' | 'role';
}

// Vertical timeline with line connector
// Event markers
// Expandable details
```

**3. SectionDivider**
```tsx
// Thin horizontal line with optional label
// Used to separate major sections
// Maintains line-drawing aesthetic
```

**4. ContentBlock**
```tsx
// Reusable content container
// Consistent padding and spacing
// Optional border for visual structure
```

**5. TagList**
```tsx
// Display for project tags
// Square brackets style: [ai/ml] [defi] [python]
// Minimal, greyscale
```

**6. ResumeDownload** (NEW)
```tsx
// Download button for resume
// Multiple variants: primary, secondary, inline
// Located in public/ directory
```

### Layout Components

**Navigation**
- Thin border top/bottom
- Horizontal links (desktop) / Hamburger (mobile)
- Active state: Underline or subtle indicator
- No background, transparent
- Include "Resume" link that triggers download

**Footer**
- Minimal contact info
- Copyright/last updated
- Thin border top
- Resume download link

---

## Content Integration Patterns

### Homepage Content Strategy

```tsx
// src/pages/index.tsx

const Home = () => {
  // Load from profile-data/profile.md + profile-data/story.md
  const currentRole = "lead architect at fractal.ai";
  const coreExpertise = "defi, risk, and ai systems";
  const hookQuestion = "Why are actuarial skills confined to insurance?";
  
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="max-w-2xl">
        <p className="text-lg leading-relaxed">
          building at the intersection of {coreExpertise}.
        </p>
        <p className="mt-4 text-muted-foreground">
          {currentRole}. previously: risk frameworks for euler, 
          protocol simulations, $250k+ in algorithmic trading services.
        </p>
        
        {/* Resume Download CTA */}
        <div className="flex gap-4 mt-8">
          <ResumeDownload variant="primary" />
          <Link 
            href="/work" 
            className="border border-grey-400 px-6 py-3 hover:border-black"
          >
            View Projects
          </Link>
        </div>
      </section>

      {/* The Question That Drives */}
      <section className="border-t border-border pt-12">
        <blockquote className="text-xl italic">
          "{hookQuestion}"
        </blockquote>
        <p className="mt-4 text-muted-foreground">
          This question sparked a journey from actuarial science 
          to self-taught coding to DeFi to AI. Each phase validated 
          by market: $250K in services, protocol security work, 
          enterprise AI platforms.
        </p>
      </section>

      {/* Navigation Cards */}
      <section className="grid grid-cols-2 gap-4">
        {/* Work, Philosophy, Journey, Company cards */}
      </section>

      {/* Recent Activity */}
      <section className="border-t border-border pt-12">
        {/* Timeline of recent work */}
      </section>
    </div>
  );
};
```

### Project Detail Page Pattern

```tsx
// src/pages/work/[slug].tsx

const ProjectDetail = ({ project }) => {
  return (
    <article className="space-y-12">
      {/* Header */}
      <header>
        <div className="flex justify-between items-baseline mb-4">
          <h1 className="text-3xl font-bold">{project.title}</h1>
          <StatusBadge status={project.status} />
        </div>
        
        <div className="text-sm text-muted-foreground space-x-6">
          <span>{project.year}</span>
          {project.role && <span>{project.role}</span>}
        </div>
      </header>

      {/* Content */}
      <div 
        className="prose prose-neutral max-w-none"
        dangerouslySetInnerHTML={{ __html: project.content }}
      />

      {/* Tags */}
      <TagList tags={project.tags} />

      {/* Related Projects */}
      <RelatedProjects projects={project.related} />

      {/* CTA */}
      <footer className="border-t border-border pt-8">
        <Link href="/work">← Back to all projects</Link>
      </footer>
    </article>
  );
};
```

### Philosophy Page Pattern

```tsx
// src/pages/philosophy.tsx

const Philosophy = ({ philosophyData }) => {
  return (
    <div className="space-y-16">
      <header>
        <h1>Philosophy & Approach</h1>
        <p>How I think about work, learning, and innovation</p>
      </header>

      {/* Driving Beliefs */}
      <section>
        <h2>Driving Beliefs</h2>
        {philosophyData.beliefs.map(belief => (
          <div key={belief.title}>
            <h3>{belief.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: belief.content }} />
          </div>
        ))}
      </section>

      {/* Work Approach */}
      <section className="border-t border-border pt-12">
        <h2>Work Approach</h2>
        {/* Content from profile-data/philosophy.md */}
      </section>

      {/* Learning Philosophy */}
      <section className="border-t border-border pt-12">
        <h2>Learning Philosophy</h2>
        {/* Content from profile-data/philosophy.md */}
      </section>
    </div>
  );
};
```

---

## Design Specifications

### Color Palette

```css
:root {
  /* Greyscale Foundation */
  --color-black: #000000;
  --color-white: #FFFFFF;
  --color-grey-100: #F5F5F5;
  --color-grey-200: #E5E5E5;
  --color-grey-300: #D4D4D4;
  --color-grey-400: #A3A3A3;
  --color-grey-500: #737373;
  --color-grey-600: #525252;
  --color-grey-700: #404040;
  --color-grey-800: #262626;
  --color-grey-900: #171717;

  /* Optional Accent (use sparingly) */
  --color-accent: #0066FF; /* Consider: electric blue, or keep pure black */
  
  /* Semantic Colors */
  --color-text-primary: var(--color-black);
  --color-text-secondary: var(--color-grey-600);
  --color-text-muted: var(--color-grey-500);
  --color-border: var(--color-grey-300);
  --color-border-strong: var(--color-grey-600);
  --color-background: var(--color-white);
  --color-background-subtle: var(--color-grey-100);
}
```

### Spacing System

```css
:root {
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-24: 6rem;     /* 96px */
  --space-32: 8rem;     /* 128px */
}
```

### Border & Line Styles

```css
.line-frame {
  border: 1px solid var(--color-border);
}

.line-frame-strong {
  border: 1px solid var(--color-border-strong);
}

.divider {
  height: 1px;
  background: var(--color-border);
}

.divider-strong {
  height: 1px;
  background: var(--color-border-strong);
}
```

---

## Implementation Priorities

### Phase 1: Foundation 
- [ ] Set up typography system (IBM Plex Mono + Serif)
- [ ] Implement greyscale color palette
- [ ] Create base layout components
- [ ] Set up markdown parsing utilities
- [ ] Build core UI components (ProjectCard, Timeline, etc.)

### Phase 2: Core Pages 
- [ ] Homepage with problem-solution-impact narrative
- [ ] Work/Projects list page
- [ ] Individual project detail pages (dynamic routes)
- [ ] Philosophy page
- [ ] Now page (update existing)

### Phase 3: Enhanced Pages
- [ ] Journey/Timeline page with interactive visualization
- [ ] Company page
- [ ] Contact page
- [ ] Navigation improvements
- [ ] Mobile responsive refinements

### Phase 4: Polish & Optimization
- [ ] Performance optimization
- [ ] SEO implementation
- [ ] Accessibility audit
- [ ] Cross-browser testing
- [ ] Content refinement based on feedback

---

## Key Principles for Developers

1. **Content First**: Design should enhance, not overshadow the text
2. **Line-Based Aesthetics**: Use borders (1px) to create structure, avoid heavy boxes
3. **Typography Hierarchy**: Size and weight, not color, for hierarchy
4. **Generous Whitespace**: Don't be afraid of empty space
5. **Greyscale Foundation**: Resist the urge to add color without purpose
6. **Responsive**: Mobile-first, but optimized for desktop reading
7. **Performance**: Static generation where possible, minimal JS
8. **Accessibility**: Semantic HTML, proper contrast, keyboard navigation

---

## Questions to Clarify

1. **Accent Color**: Do you want to introduce any accent color, or keep pure greyscale?
2. **Interactive Elements**: Preference for link hover states? (Underline, color change, both?)
3. **Project Filtering**: On work page, filter by tags/status/year?
4. **Analytics**: Should we include analytics tracking?
5. **Contact Form**: Do you want a form, or just email links?
6. **Mobile Menu**: Hamburger menu style preference?

---

## Next Steps

1. **Review this guide** and provide feedback
2. **Choose typography option** (Recommendation: IBM Plex Mono + Serif)
3. **Confirm accent color** (or stay pure greyscale)
4. **Approve page structure** (add/remove any sections)
5. **Begin Phase 1 implementation**

---

*Document created: October 2025*  
*For: Personal website development*  
*Contact: projects@garvkhurana.tech*

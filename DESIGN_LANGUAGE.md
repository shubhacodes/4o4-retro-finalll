# 4o4 Found Us - Design Language System

## Overview

This document outlines the design language and system for the 4o4 Found Us website - a creative agency specializing in brand identity and digital experiences. Our design language emphasizes bold creativity, systematic consistency, and memorable brand experiences that help businesses stand out from the crowd.

## Typography System

### Font Families

- **Headings (H1-H6)**: **Oswald**

  - A bold, condensed sans-serif font that creates strong visual impact
  - Usage: All headings, section titles, navigation labels, buttons, and call-to-action text
  - CSS Variable: `var(--font-oswald)`
  - Tailwind Class: `font-oswald`

- **Body Text**: **Space Grotesk**
  - A modern, highly legible geometric sans-serif font
  - Usage: Paragraphs, descriptions, form labels, body content, and UI text
  - CSS Variable: `var(--font-space-grotesk)`
  - Tailwind Class: `font-space-grotesk`

### Standardized Typography Scale

#### Heading Hierarchy

- **Main Headings (H1/H2)**: `text-4xl` (36px) + `font-oswald`
  - Usage: Section headers, page titles, main component headings
- **Subheadings (H3/H4)**: `text-2xl` (24px) + `font-oswald`
  - Usage: Component sub-sections, card titles, secondary headings
- **Small Headings (H5/H6)**: `text-xl` (20px) + `font-oswald`
  - Usage: Form labels, small section titles

#### Body Text Hierarchy

- **Large Body Text**: `text-lg` (18px) + `font-space-grotesk`
  - Usage: Main descriptions, important body content
- **Standard Body Text**: `text-base` (16px) + `font-space-grotesk`
  - Usage: Default body text, form text, UI labels
- **Small Text**: `text-sm` (14px) + `font-space-grotesk`
  - Usage: Captions, footnotes, meta information

## Color Palette

### Primary Colors

- **Primary Text**: `#3f4c38` (Deep Olive/Charcoal)

  - Usage: All text, headers, borders, and primary UI elements for consistent readability.
  - A softer alternative to pure black, providing a professional and modern feel.

- **Primary White**: `#FFFFFF`
  - Usage: Background for text-heavy content areas, negative space.
  - Clean, professional foundation color.

### Brand Accent Colors

- **Primary Accent (Yellow)**: `#ffc943`

  - Usage: All primary call-to-action buttons, interactive highlights, and section accents.
  - High-energy, confident, and attention-grabbing.

- **Secondary Accent (Blue)**: `#8abdb3`

  - Usage: Component headers, secondary backgrounds, and decorative elements.
  - Cool, calming, and professional, providing a nice balance to the warm yellow.

### Background Colors

- **Primary Background (Beige)**: `#F7F4E9`

  - Usage: Main background for most content sections, sidebar backgrounds.
  - Warm, approachable, and provides a soft canvas for content.

- **Secondary Background (Blue)**: `#8abdb3`
  - Usage: Main background for larger container components to create visual separation.

## Component Architecture

### Page Sections (Round Design System)

Located in `components/round/`:

1. **Hero Section** (`hero.jsx`)

   - Bold headline with shadow text effects
   - Primary call-to-action placement
   - Retro computer illustration

2. **About Section** (`about-test.jsx`)

   - Interactive file explorer interface
   - Company story and philosophy
   - Creative storytelling approach

3. **Services Section** (`servicetest.jsx`)

   - Expandable service cards
   - Animated transitions and hover effects
   - Service tags and detailed descriptions

4. **Work Showcase** (`workshowcase-test.jsx`)

   - Horizontal scrolling project cards
   - Interactive project details modal
   - Responsive design previews

5. **Process Section** (`process-test.jsx`)

   - Animated card stack interface
   - Step-by-step workflow visualization
   - Dynamic content updates

6. **Testimonials** (`testimonials-test.jsx`)

   - Tabbed testimonial interface
   - Client quotes and company information
   - Social proof presentation

7. **Pricing Section** (`pricing-test.jsx`)

   - Interactive pricing toggles
   - Feature comparison cards
   - Clear value propositions

8. **FAQ Section** (`faq-test.jsx`)

   - Animated chat-bubble interface
   - Question/answer conversation flow
   - Smooth expand/collapse animations

9. **CTA Section** (`cta-test.jsx`)
   - Video background elements
   - Final conversion opportunity
   - Contact form integration

### Framework Components

Located in `components/framework/`:

1. **Navbar** (`navbar.jsx`)

   - Responsive navigation system
   - Brand logo and primary menu
   - Mobile hamburger menu

2. **Footer** (`footer.jsx`)
   - Company information and links
   - Contact details and social media
   - Legal and copyright information

## Design Principles

### 1. Bold & Memorable

- Strong typographic contrast using Oswald for headings
- Bold color combinations that stand out
- Creative, unexpected interface elements

### 2. Systematic Consistency

- Standardized font sizes across all components
- Consistent spacing using Tailwind utilities
- Unified color application and hover states

### 3. Interactive & Engaging

- Animated transitions and micro-interactions
- Hover effects and dynamic state changes
- Progressive disclosure of information

### 4. Accessible & Professional

- High contrast ratios for text readability
- Logical information hierarchy
- Responsive design across all devices

## Brand Voice & Messaging

### Company: 4o4 Found Us

- **Industry**: Creative Agency - Brand Identity & Digital Experiences
- **Tone**: Bold, Creative, Authentic, Solution-Oriented
- **Mission**: "Making brands that make people do double-takes"
- **Approach**: "We don't follow trends — we set them on fire and dance around the flames"

### Key Messaging Themes

- **Wrong Turn, Right Place**: Finding beauty in the unexpected
- **Beautiful Mistakes**: Embracing imperfection as a creative strength
- **Brand Reactions**: Creating memorable, surprising brand experiences
- **Creative Rebellion**: Breaking industry standards to create standout brands

## Technical Implementation

### Font Loading

```javascript
// app/layout.js
import { Inter, Oswald, Space_Grotesk } from "next/font/google";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});
```

### Typography Classes

```css
/* Standardized Typography Scale */
.heading-main {
  @apply text-4xl font-oswald font-bold;
}
.heading-sub {
  @apply text-2xl font-oswald font-bold;
}
.heading-small {
  @apply text-xl font-oswald font-bold;
}

.body-large {
  @apply text-lg font-space-grotesk;
}
.body-standard {
  @apply text-base font-space-grotesk;
}
.body-small {
  @apply text-sm font-space-grotesk;
}
```

### Component Standards

- All main headings: `text-4xl font-oswald`
- All subheadings: `text-2xl font-oswald`
- All descriptions: `text-lg font-space-grotesk`
- Consistent spacing using Tailwind utilities
- Hover states and transitions on interactive elements

## Usage Guidelines

### Typography Hierarchy

1. **Always use Oswald for headings** - creates strong visual hierarchy
2. **Always use Space Grotesk for body text** - ensures readability
3. **Maintain consistent font sizes** - use standardized scale
4. **Ensure proper contrast** - especially on colored backgrounds

### Color Application

1. **Use brand orange (#DE6A48) for primary features**
2. **Reserve yellow (#FFB600) for call-to-action elements**
3. **Apply black (#000000) for maximum contrast text**
4. **Use cream background (#F7F4E9) for content sections**

### Interactive Elements

1. **Add hover states to all clickable elements**
2. **Use smooth transitions for state changes**
3. **Maintain consistent shadow and border styles**
4. **Ensure touch targets are appropriately sized**

## Quality Assurance

### Typography Checklist

- [ ] All headings use `font-oswald` class
- [ ] All body text uses `font-space-grotesk` class
- [ ] Font sizes follow standardized scale
- [ ] Proper contrast ratios maintained
- [ ] Responsive typography scaling implemented

### Design Consistency Checklist

- [ ] Color palette applied consistently
- [ ] Spacing follows Tailwind utilities
- [ ] Interactive elements have hover states
- [ ] Component structure follows established patterns
- [ ] Accessibility guidelines met

---

_Last Updated: January 2024_
_Next Review: Quarterly updates recommended_

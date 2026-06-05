---
name: Auren Wear Aesthetic
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#4c4546'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#7e7576'
  outline-variant: '#cfc4c5'
  surface-tint: '#5e5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1b1b1b'
  on-primary-container: '#848484'
  inverse-primary: '#c6c6c6'
  secondary: '#5d5f5f'
  on-secondary: '#ffffff'
  secondary-container: '#dfe0e0'
  on-secondary-container: '#616363'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1a1c19'
  on-tertiary-container: '#838480'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c6'
  on-primary-fixed: '#1b1b1b'
  on-primary-fixed-variant: '#474747'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#e3e3de'
  tertiary-fixed-dim: '#c6c7c2'
  on-tertiary-fixed: '#1a1c19'
  on-tertiary-fixed-variant: '#454744'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 64px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
spacing:
  container-max: 1440px
  gutter: 24px
  margin-desktop: 80px
  margin-mobile: 20px
  stack-lg: 120px
  stack-md: 64px
  stack-sm: 32px
---

## Brand & Style
The brand personality is rooted in "Understated Opulence"—a blend of high-fashion editorial aesthetics and functional minimalism. It targets a discerning audience that values quality over quantity, seeking a digital experience that feels as premium as a luxury boutique.

The design style follows a **High-End Minimalist** approach. It utilizes expansive whitespace to allow product photography to serve as the primary visual driver. The interface remains invisible, receding into the background to provide a frictionless, "Apple-like" clarity. Expect sharp execution, precise alignments, and a rhythmic use of negative space to evoke a sense of calm, exclusivity, and modern sophistication.

## Colors
The palette is strictly monochromatic with warm, architectural neutrals to prevent the UI from feeling sterile.

- **Primary (Black):** Used for core branding, primary actions, and high-level headings. It represents authority and timelessness.
- **Secondary (White):** The foundation of the system. Used for all primary surfaces to maximize "air" and light.
- **Beige (#F5F5F0):** A sophisticated "Off-White" used for subtle section backgrounds and decorative containers to add warmth.
- **Soft Gray (#E5E5E5):** Reserved for hairline strokes, dividers, and inactive states.
- **Charcoal (#1A1A1A):** Used for body text to maintain high legibility while appearing softer and more premium than pure black.

## Typography
The typography strategy pairs the geometric confidence of **Montserrat** (substituted for Poppins to achieve a sharper, more editorial edge) with the utilitarian precision of **Inter**.

- **Headlines:** Use Montserrat with tight tracking for a bold, structural look. Large display sizes should be used sparingly for hero sections to create an editorial feel.
- **Body:** Inter is used for all long-form text and product descriptions. The line height is intentionally generous (1.6) to enhance readability and reinforce the airy aesthetic.
- **Labels:** Small caps and increased letter spacing are used for navigational elements, categories, and utility links to distinguish them from content.

## Layout & Spacing
This design system utilizes a **Fixed Grid** philosophy for desktop to maintain a curated, gallery-like feel, transitioning to a fluid model for mobile.

- **Desktop:** A 12-column grid with a wide 80px outer margin. Large "Stack" spacing (120px) is used between major sections to ensure the content never feels crowded.
- **Editorial Grids:** Product listings should use asymmetrical spans (e.g., a featured item spanning 8 columns next to a 4-column text block) to mimic fashion magazine layouts.
- **Mobile:** A 4-column grid with 20px margins. Elements should stack vertically, maintaining the priority of imagery.

## Elevation & Depth
To maintain a minimalist and "flat" premium aesthetic, traditional shadows are avoided. Depth is communicated through **Tonal Layering** and **Line Work**.

- **Surfaces:** Depth is created by placing white cards over Beige (#F5F5F0) backgrounds. 
- **Outlines:** Use 1px hairlines in Soft Gray (#E5E5E5) to define boundaries without adding visual weight.
- **Interactions:** Use subtle opacity shifts or "reveal" transitions rather than lifts or shadows. For example, a product image might slightly scale or cross-fade to a secondary shot on hover.

## Shapes
The design system employs a **Sharp (0px)** corner radius across all elements. 

This rejection of rounded corners reinforces a high-fashion, architectural aesthetic. It communicates precision, rigor, and a modern edge. Buttons, input fields, product cards, and images must all maintain 90-degree angles to ensure a cohesive, structural look.

## Components

### Buttons
- **Primary:** Solid Black (#000000) with White text. No border. Sharp corners.
- **Secondary:** Transparent background with a 1px Black border. 
- **Ghost:** No border or background; text-only with a 1px underline that expands on hover.

### Product Cards
- **Structure:** Edge-to-edge photography. No visible borders around the card.
- **Details:** Product name and price left-aligned below the image in Inter 14px.
- **Hover:** Image transitions to the second gallery item; "Quick Add" button appears as a slide-up overlay at the bottom of the image.

### Navigation
- **Header:** Sticky, transparent background with a "glass" backdrop-filter (blur) that becomes visible only upon scrolling.
- **Links:** Uppercase Label-sm style. Minimalist icons (1px stroke weight).

### Input Fields
- **Style:** Bottom-border only (1px Soft Gray). Labels float above the line. Error states are communicated via 1px Red text, maintaining the sharp-edge alignment.

### Editorial Grids
- **Image Treatment:** Mix of portrait (3:4) and landscape (16:9) aspect ratios within a single scroll flow to create visual interest and a curated feel.
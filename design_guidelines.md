# Eccommitted Design Guidelines

## Design Approach
**Reference-Based Approach**: Draw inspiration from modern educational platforms like Khan Academy and environmental sites like WWF, combined with youthful, engaging landing page patterns. The design must balance educational credibility with youthful energy to resonate with students while maintaining institutional professionalism.

## Core Design Principles
1. **Youth-Focused Ecology**: Vibrant, optimistic, and action-oriented visual language that inspires environmental commitment
2. **Educational Clarity**: Information must be immediately digestible with strong visual hierarchy
3. **Institutional Trust**: Maintain academic credibility while being approachable and modern

## Color System
- **Primary Green**: #2ecc71 (Emerald) - Primary CTAs, active states, key accents
- **Secondary Green**: #27ae60 (Nephritis) - Hover states, secondary elements
- **Supporting Colors**: White backgrounds, light blue (#3498db) for informational elements
- **Dark Mode**: Deep forest greens (#1a5028) with lighter emerald accents
- **Light Mode**: Crisp whites (#ffffff) with green accents and subtle gray (#f8f9fa) backgrounds

## Typography
- **Font Family**: Poppins (primary) or Montserrat (alternative) via Google Fonts
- **Hero Headlines**: 3xl to 5xl (48-60px desktop), bold weight (700)
- **Section Titles**: 2xl to 3xl (36-48px), semibold (600)
- **Body Text**: base to lg (16-18px), regular (400)
- **Tips/Cards**: base (16px), medium (500)
- **Carousel Text**: xl to 2xl (24-36px), medium to semibold

## Layout System
**Spacing Primitives**: Use Tailwind units of 4, 8, 12, 16, and 24 (e.g., p-4, m-8, gap-12, py-16, px-24)
- **Section Padding**: py-16 to py-24 on desktop, py-12 on mobile
- **Container Max-width**: max-w-7xl for full sections, max-w-4xl for text content
- **Grid Systems**: 2-3 columns on desktop, stack to single column on mobile
- **Whitespace**: Generous breathing room between sections, compact within cards

## Navigation
- **Sticky Header**: Fixed position with subtle shadow on scroll
- **Menu Items**: Inicio, Consejos, PRAE, Acciones, Nosotros
- **Dark/Light Toggle**: Top-right corner with moon/sun icon
- **Mobile**: Hamburger menu transforming to full-screen overlay
- **Active States**: Green underline or background highlight

## Component Library

### Home Section - Carousel
- **Auto-rotating carousel**: 10 slides, 5-second intervals
- **Manual controls**: Left/right arrows, dot indicators
- **Slide Content**: Large centered text with "¿Sabías que…?" headline, fact, and "¡Únete al cambio!" tagline
- **Typography**: Bold headline (2xl), fact text (lg), tagline emphasized with color
- **Transitions**: Smooth fade or slide animations using Framer Motion
- **Below carousel**: Institutional text (center-aligned, max-w-3xl) + "Empieza tu cambio 🌱" CTA button

### Tips Section - Interactive Grid
- **Layout**: 2-column grid on tablet, 3-column on desktop, single column mobile
- **Card Design**: Rounded corners (rounded-lg), subtle shadow, padding p-6
- **Hover Effects**: Lift animation (scale 1.02), green glow or border, background transition to light green (#e8f8f1)
- **Icon + Text**: Eco icons (leaf, water drop, lightbulb) with title and brief description
- **10+ Tips Listed**: Each with unique icon and clear actionable text

### PRAE Section - Under Construction
- **Centered Layout**: Single column, max-w-2xl
- **Headline**: Large, bold "Proyecto Ambiental Escolar – PRAE"
- **Message**: Informative paragraph with future 5th Recycling Day announcement
- **Animation**: Subtle growing plant or rotating gear icon using Framer Motion
- **Visual**: Soft green background card with construction imagery

### Actions Section - Gallery + Form
- **Gallery**: Masonry or equal-height grid (2x2 on desktop, single column mobile)
- **Image Cards**: Photos of students planting trees, recycling drives, environmental fairs, eco-points
- **Overlay Captions**: Semi-transparent green overlay on hover with action title
- **CTA Button**: "Quiero participar 💪" - prominent, centered below gallery
- **Form Modal/Section**: Simple fields (Name, Course/Grade, Idea/Contribution), green submit button

### About Section - Institutional
- **Two-column layout**: Text left (60%), representative image/gallery right (40%)
- **Content**: Institutional mission paragraph, emphasis on student leadership
- **Image Treatment**: Rounded corners, students in action, school branding visible
- **Alternative**: Single column with image above text on mobile

## Animations & Interactions
- **Page Transitions**: Smooth fade-in on scroll (Framer Motion)
- **Button Hover**: Subtle scale (1.05), deeper green shadow
- **Card Hover**: Lift effect with shadow increase
- **Carousel**: Auto-advance with smooth transitions, pause on hover
- **Theme Toggle**: Smooth color transition (300ms)
- **Icon Animations**: Gentle bounce or pulse on relevant sections

## Footer
- **Three-column layout**: Copyright left, Navigation center, Social right (stack on mobile)
- **Content**: "© 2025 Eccommitted – Institución Educativa Camilo Torres | Todos los derechos reservados"
- **Social Icons**: Facebook, Instagram, Email (institutional links)
- **Styling**: Dark green background (#27ae60) with white text

## Images & Visual Assets

### Required Images:
1. **Actions Gallery** (4-6 images):
   - Students planting trees/reforestation activity
   - Recycling campaign with students sorting materials
   - Environmental fair booth with displays
   - Eco-points/recycling stations at school
   - Group activities showing student participation

2. **About Section** (1-2 images):
   - School building or campus with green spaces
   - Students engaged in environmental projects
   - Group photo of Eccommitted participants

### Image Treatment:
- **Aspect Ratios**: Gallery images 4:3 or 3:2, hero/about images 16:9
- **Corners**: Rounded (rounded-lg or rounded-xl)
- **Overlays**: Green tinted overlay on hover for gallery images
- **Quality**: High resolution, bright, action-oriented photography showing youth and nature

**Note**: No large hero image on homepage - carousel serves as the hero element

## Accessibility & Responsiveness
- **Mobile-first**: All interactions optimized for touch
- **Breakpoints**: sm: 640px, md: 768px, lg: 1024px, xl: 1280px
- **Color Contrast**: WCAG AA compliant in both light and dark modes
- **Focus States**: Visible green outline for keyboard navigation
- **Icon Libraries**: Lucide React for consistent, clean eco-themed icons

## Visual Style Details
- **Border Radius**: rounded-lg (8px) for cards, rounded-full for buttons
- **Shadows**: Soft shadows (shadow-md) that increase on hover (shadow-lg)
- **Minimalist Aesthetic**: Clean lines, ample whitespace, uncluttered layouts
- **Gradient Accents**: Subtle green gradients for section backgrounds (from-green-50 to-white)
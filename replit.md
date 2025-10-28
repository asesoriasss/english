# Eccommitted - Environmental Education Platform

## Overview

Eccommitted is a youth-focused environmental education web application for Institución Educativa Camilo Torres. The platform aims to inspire students, teachers, and the broader community to take concrete actions for environmental protection through educational content, tips, and community engagement features.

The application presents environmental facts through an interactive carousel, provides actionable eco-tips, showcases institutional environmental projects (PRAE), and enables community participation through idea submissions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast HMR and optimized production builds
- Wouter for lightweight client-side routing (avoiding heavier alternatives like React Router)

**UI Component System**
- Radix UI primitives for accessible, unstyled component foundations
- shadcn/ui component library (New York style variant) providing pre-built, customizable components
- Tailwind CSS for utility-first styling with custom design tokens
- Framer Motion for animations and transitions (carousel, page transitions, interactive elements)

**Styling Philosophy**
- Custom CSS variables defining the complete color system for light/dark mode support
- Design tokens following the documented brand guidelines (primary green #2ecc71, emerald accents)
- Poppins font family loaded via Google Fonts for consistent typography
- Responsive design with mobile-first approach

**State Management**
- TanStack Query (React Query) for server state management and data fetching
- React Hook Form with Zod validation for form state and validation
- Local component state via React hooks for UI interactions

### Backend Architecture

**Server Framework**
- Express.js server providing RESTful API endpoints
- TypeScript for type safety across the full stack
- Development and production modes with environment-based configuration

**API Design**
- RESTful endpoints for participation form submissions
- JSON request/response format
- Request logging middleware for debugging and monitoring
- Error handling with structured error responses

**Data Layer**
- In-memory storage implementation (MemStorage) for development
- Drizzle ORM configured for PostgreSQL migration path
- Schema definitions using drizzle-zod for runtime validation
- UUID-based primary keys for all entities

**Storage Schema**
- Users table: id, username, password (authentication foundation)
- Participations table: id, nombre (name), curso (grade/class), idea (environmental action proposal)

### Application Structure

**Page Organization**
- Home: Auto-rotating carousel with environmental facts, institutional messaging
- Consejos: Grid of interactive environmental tips with icons and hover effects
- PRAE: Placeholder for institutional environmental project information
- Acciones: Display of environmental actions/campaigns with participation form dialog
- Nosotros: About section explaining institutional values and mission

**Shared Resources**
- Centralized schema definitions in `/shared` for type consistency
- Path aliases (@/, @shared/, @assets/) for clean imports
- Reusable UI components in `/client/src/components/ui`

### Development Workflow

**Build & Development**
- Development: tsx running Express server with Vite middleware for HMR
- Production: Separate builds for client (Vite) and server (esbuild)
- Type checking via TypeScript compiler without emission

**Code Organization**
- Monorepo structure with client, server, and shared directories
- Component co-location pattern within `/client/src/components`
- Page-based routing matching directory structure

## External Dependencies

### Database
- **Neon Serverless PostgreSQL**: Configured via Drizzle for production database
- Connection via DATABASE_URL environment variable
- Drizzle Kit for schema migrations and database management

### UI & Styling
- **Radix UI**: Accessible component primitives (@radix-ui/* packages)
- **Tailwind CSS**: Utility-first CSS framework with PostCSS
- **Google Fonts**: Poppins font family for typography
- **Lucide React**: Icon library for consistent iconography

### Forms & Validation
- **React Hook Form**: Form state management with performance optimization
- **Zod**: Runtime schema validation for forms and API data
- **@hookform/resolvers**: Integration between React Hook Form and Zod

### Animations
- **Framer Motion**: Animation library for carousel, page transitions, and micro-interactions
- **Embla Carousel**: Carousel/slider component foundation

### Developer Experience
- **Replit Plugins**: Runtime error overlay, cartographer, and dev banner for Replit environment
- **Class Variance Authority (CVA)**: Type-safe component variant management
- **clsx & tailwind-merge**: Utility for conditional className composition

### Session Management
- **connect-pg-simple**: PostgreSQL session store (configured but not actively used in current implementation)

### Date Handling
- **date-fns**: Lightweight date utility library for timestamp formatting
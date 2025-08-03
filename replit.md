# AutoKey Tbilisi - Automotive Locksmith Service

## Overview

AutoKey Tbilisi is a professional automotive locksmith service website that provides 24/7 car key replacement, duplication, transponder programming, and emergency lockout services in Tbilisi, Georgia. The application features a modern landing page with service listings, pricing calculator, contact forms, and booking functionality. It's built as a full-stack web application with a React frontend and Express backend, designed to convert visitors into customers through clear service presentation and easy contact methods.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with custom design system using CSS variables for theming
- **UI Components**: shadcn/ui component library built on Radix UI primitives for accessibility
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React Query (TanStack Query) for server state management and caching
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **Animations**: CSS-based animations with Intersection Observer for scroll-triggered effects

### Backend Architecture
- **Framework**: Express.js with TypeScript for API endpoints
- **Database ORM**: Drizzle ORM with PostgreSQL dialect for type-safe database operations
- **Schema Validation**: Zod schemas shared between frontend and backend for consistent validation
- **Storage**: Dual storage implementation with in-memory storage for development and PostgreSQL for production
- **API Design**: RESTful endpoints for contact forms and service requests with proper error handling

### Data Storage
- **Database**: PostgreSQL configured through Drizzle ORM
- **Tables**: 
  - `contacts` table for general inquiries with fields for name, phone, email, service type, and message
  - `service_requests` table for specific service bookings with pricing, urgency, and status tracking
- **Connection**: Neon Database serverless PostgreSQL with connection pooling
- **Migrations**: Drizzle Kit for database schema migrations and management

### Authentication & Security
- **No Authentication**: Public-facing marketing site with form submissions only
- **Form Validation**: Server-side validation using Zod schemas to prevent malicious input
- **CORS**: Express middleware configured for cross-origin requests
- **Input Sanitization**: JSON parsing with size limits and type validation

### Development Workflow
- **Environment**: Development server with Vite HMR and Express API proxy
- **Type Safety**: Shared TypeScript interfaces between client and server
- **Code Organization**: Monorepo structure with `client/`, `server/`, and `shared/` directories
- **Path Aliases**: Configured for clean imports (@/ for client, @shared for shared code)

## External Dependencies

### Core Technologies
- **React 18**: Frontend framework with hooks and modern features
- **Express.js**: Node.js web framework for API server
- **TypeScript**: Type safety across the entire application
- **Vite**: Modern build tool and development server

### Database & ORM
- **Drizzle ORM**: Type-safe database toolkit for PostgreSQL
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **Drizzle Kit**: Database migration and management tools

### UI & Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Headless UI components for accessibility
- **shadcn/ui**: Pre-built component library
- **Lucide React**: Icon library for consistent iconography

### Form Handling & Validation
- **React Hook Form**: Performant form library with minimal re-renders
- **Zod**: TypeScript-first schema validation
- **@hookform/resolvers**: Zod resolver for React Hook Form integration

### State Management & HTTP
- **TanStack Query**: Server state management and caching
- **Wouter**: Lightweight routing library for React

### Development Tools
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Replit-specific development tools
- **ESBuild**: Fast JavaScript bundler for production builds

### Utility Libraries
- **clsx & tailwind-merge**: Conditional CSS class merging
- **date-fns**: Date manipulation and formatting
- **class-variance-authority**: Type-safe variant API for components
- **nanoid**: Unique ID generation for logging and tracking
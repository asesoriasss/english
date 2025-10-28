# Eccommitted - Institución Educativa Camilo Torres

## Project Overview
Eccommitted is a modern, ecological educational website designed to promote environmental awareness among students, teachers, and the community of Institución Educativa Camilo Torres. The website features a clean, inspiring design with a green color palette that reflects the institution's commitment to environmental action.

## Purpose
Inspire concrete actions to protect the environment through education, collaboration, and ecological awareness. Students are the protagonists of change.

## Tech Stack
- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Routing**: Wouter
- **Animations**: Framer Motion
- **Forms**: React Hook Form with Zod validation
- **UI Components**: Shadcn UI (Radix UI)
- **Backend**: Express.js, Node.js
- **Data Storage**: In-memory storage (MemStorage)
- **Font**: Poppins (Google Fonts)

## Project Structure

### Pages (5 Main Sections)
1. **Home (/)** - Hero section with auto-rotating carousel featuring 10 environmental facts
2. **Consejos (/consejos)** - Interactive tips section with 10+ environmental recommendations
3. **PRAE (/prae)** - Environmental School Project (under construction with animated icon)
4. **Acciones (/acciones)** - Actions & campaigns gallery with participation form
5. **Nosotros (/nosotros)** - About section with institutional information and values

### Key Features
- ✅ Auto-rotating carousel (10 slides, 5-second intervals)
- ✅ Dark/light mode toggle with smooth transitions
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Interactive tip cards with hover effects
- ✅ Participation form with validation
- ✅ Beautiful animations using Framer Motion
- ✅ Fully accessible with proper ARIA labels
- ✅ Spanish language interface

### Color Palette
- **Primary Green**: #2ecc71 (hsl(145 63% 49%))
- **Secondary Green**: #27ae60
- **Light Mode**: White backgrounds with green accents
- **Dark Mode**: Deep forest greens with lighter emerald accents

## API Endpoints

### POST /api/participations
Submit participation form for environmental campaigns.

**Request Body:**
```json
{
  "nombre": "string (min 2 characters)",
  "curso": "string (min 1 character)",
  "idea": "string (min 10 characters)"
}
```

**Response:**
```json
{
  "id": "uuid",
  "nombre": "string",
  "curso": "string",
  "idea": "string"
}
```

### GET /api/participations
Retrieve all participation submissions (admin view).

## Recent Changes (October 28, 2025)
- Implemented complete Eccommitted website from scratch
- Created all 5 main sections with beautiful, responsive design
- Implemented auto-carousel with 10 environmental facts
- Added dark/light mode toggle with theme persistence
- Built participation form with backend integration
- Added Framer Motion animations throughout
- Configured Poppins font and green color scheme
- All interactive elements have proper data-testid attributes for testing

## Development
```bash
npm run dev  # Starts both Express backend and Vite frontend on port 5000
```

## User Preferences
- Clean, modern, minimalist design
- Green color palette (#2ecc71, #27ae60)
- Poppins font family
- Smooth animations and transitions
- Youth-focused, inspiring visual language
- Educational and professional aesthetic

## Project Status
✅ **MVP Complete** - All features implemented and tested
- Home carousel with auto-play
- Interactive tips section
- PRAE under construction page
- Actions & campaigns with form
- About section with values
- Dark/light mode
- Responsive design
- Form validation and backend integration

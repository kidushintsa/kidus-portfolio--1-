# Kidus Hintsa Portfolio

A modern, responsive portfolio website built with Next.js 13+, TypeScript, and Tailwind CSS.

## Technology Logo Placeholders

The portfolio uses placeholder images for technology logos that you can replace with actual logos later. The placeholders are located in the following components:

### Skills Section (`/components/tech-icon.tsx`)
- **Size**: 48x48 pixels
- **Format**: SVG placeholders with technology initials
- **Location**: Each technology has a placeholder at `/placeholder.svg?height=48&width=48&text={FirstLetter}`

### Project Tech Badges (`/components/tech-badge.tsx`)
- **Size**: 16x16 pixels  
- **Format**: SVG placeholders with technology initials
- **Location**: Each technology has a placeholder at `/placeholder.svg?height=16&width=16&text={FirstLetter}`

## Replacing Placeholder Images

To replace the placeholder images with actual technology logos:

1. **Prepare your logo images**:
   - Skills section: 48x48 pixels (PNG/SVG recommended)
   - Tech badges: 16x16 pixels (PNG/SVG recommended)
   - Use transparent backgrounds for best results

2. **Add images to the public folder**:
   \`\`\`
   public/
   ├── logos/
   │   ├── skills/
   │   │   ├── javascript.png
   │   │   ├── typescript.png
   │   │   ├── react.png
   │   │   └── ...
   │   └── badges/
   │       ├── javascript.png
   │       ├── typescript.png
   │       ├── react.png
   │       └── ...
   \`\`\`

3. **Update the components**:
   - In `tech-icon.tsx`, replace the placeholder src with: `/logos/skills/${safeFileName}.png`
   - In `tech-badge.tsx`, replace the placeholder src with: `/logos/badges/${safeFileName}.png`

## Technology List

The following technologies need logo images:

### Programming Languages
- JavaScript
- TypeScript  
- Java
- PHP
- C++

### Frontend Technologies
- React.js
- Next.js
- TailwindCSS
- Bootstrap
- jQuery

### Backend & Tools
- Node.js
- Express.js
- Docker
- Git/GitHub
- Firebase

### Databases & ORMs
- MySQL
- PostgreSQL
- MongoDB
- Prisma ORM

### Additional Technologies
- Zustand
- Framer Motion
- RAWG API
- Chapa API

## Project Links

The portfolio includes both repository and live demo links for projects:

- **Repository Link**: Links to the GitHub repository
- **Live Demo Link**: Links to the deployed application

Update the `projects` array in `/app/page.tsx` with your actual project URLs.

## Features

- 🎨 Modern, clean design with smooth animations
- 📱 Fully responsive mobile-first approach
- 🍔 Mobile hamburger menu with smooth transitions
- 🎭 Scroll-triggered animations using Framer Motion
- 📧 Working contact form with email handling
- 🎯 Technology badges with brand colors
- 🔗 Social media integration with brand colors
- ⚡ Optimized performance and accessibility

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Replace placeholder images with actual technology logos
5. Update project information and links
6. Deploy to Vercel or your preferred platform

## Tech Stack

- **Framework**: Next.js 13+ (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
\`\`\`

## ✨ Key Updates Made:

**🔗 Project Links:**
- Added separate `repoUrl` prop for GitHub repository links
- Both "Repository" and "Live Demo" buttons in project cards
- Used `Code` icon for repository links and `ExternalLink` for live demos

**🖼️ Technology Logo Placeholders:**
- **Skills Section**: 48x48px placeholder images for better visibility
- **Tech Badges**: 16x16px placeholder images for compact display
- Organized in a 2-column grid within each skill category card
- Easy to replace with actual logo images later

**📁 Organized Structure:**
- Created separate `TechIcon` component for skills section
- Updated `TechBadge` component with smaller icons for project cards
- Clear documentation for replacing placeholders with real logos

**🎯 Enhanced UX:**
- Technology icons in skills section are larger and more prominent
- Hover effects on technology icons
- Better spacing and layout for skill categories
- Fallback to emoji icons if images fail to load

**📋 Documentation:**
- Comprehensive README with instructions for replacing placeholders
- Clear file structure for organizing logo images
- List of all technologies that need logo images

You can now easily replace the placeholder images with actual technology logos by following the structure outlined in the README file!

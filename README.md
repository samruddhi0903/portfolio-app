# Portfolio App

A modern, interactive portfolio website built with React and Vite. This application showcases professional experience, skills, projects, and certifications with a sleek, responsive design powered by Tailwind CSS.

## 🎯 Features

### 📊 Dashboard & Overview
- **Profile Card** - Executive summary and professional identity
- **Global Stats Panel** - Key metrics including experience level, user impact, and specialties
- **Tech Stack Visualization** - Top technologies and recent learnings
- **Responsive Hero Section** - Eye-catching introduction with profile information

### 🛠️ Skills & Abilities
- **Skill Tags** - Interactive categorization of technical skills
- **Skill Radar** - Visual representation of proficiency levels
- **Organized Skill Rows** - Grouped by categories (Frontend, Backend, Databases, etc.)
- **Progress Indicators** - Visual skill maturity levels

### 💼 Experience Timeline
- **Job Cards** - Detailed employment history with company, role, and period
- **Project Integration** - Showcase of projects worked on per role
- **Key Highlights** - Important contributions and achievements
- **Tech Stack per Role** - Technologies used in each position
- **Impact Metrics** - Quantifiable achievements and outcomes
- **Timeline View** - Chronological career progression

### 🚀 Projects & Side Quests
- **Project Cards** - Comprehensive project showcase with descriptions
- **Category Filtering** - Organize projects by type (Professional, Personal, Games)
- **Status Badges** - Project status indicators (Production, WIP, Demo)
- **Contribution Details** - Specific contributions and technologies used
- **Live Links & References** - Direct access to project resources

### 📜 Certifications
- **Certification Cards** - Display of professional credentials
- **Issue Dates** - Certification validity and timeline
- **Issuing Organization** - Credibility and verification

### 📧 Contact
- **Contact Form** - Get in touch functionality
- **Social Links** - Connect via multiple platforms
- **Location Info** - Professional contact information

### 🎨 Design & UX
- **Dark/Light Theme Toggle** - Full theme switching support
- **Responsive Design** - Mobile, tablet, and desktop optimization
- **Atomic Component Architecture** - Scalable component structure
  - **Atoms** - Basic building blocks (Avatar, Badge, ProgressBar, SkillTag, ThemeToggle)
  - **Molecules** - Composite components (ProjectCard, JobCard, SkillItem, StatCard)
  - **Organisms** - Complex sections (Navigation, GlobalStatsPanel, QuestLog, Profile)
  - **Templates** - Page layouts (DashboardLayout, StandardPageLayout)
- **Tailwind CSS** - Utility-first styling
- **Smooth Animations** - Engaging transitions and effects

### 🗺️ Navigation
- **Multi-page SPA** - Client-side routing with React Router
- **Main Sections**:
  - Overview (Home)
  - Abilities (Skills)
  - Experience
  - Projects
  - Certifications
  - Contact

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd portfolio-app

# Install dependencies
npm install
```

### Development

```bash
# Start development server with HMR
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

## 📦 Tech Stack

### Frontend
- **React** (^19.2.0) - UI library
- **React Router DOM** (^7.12.0) - Client-side routing
- **Vite** (^7.2.4) - Lightning-fast build tool

### Styling
- **Tailwind CSS** (^4.1.18) - Utility-first CSS framework
- **PostCSS** (^8.5.6) - CSS transformation
- **Autoprefixer** (^10.4.23) - CSS vendor prefixes

### Development Tools
- **ESLint** (^9.39.1) - Code quality
- **Tailwind CSS PostCSS** (^4.1.18) - Tailwind integration

## 📁 Project Structure

```
src/
├── components/
│   ├── atoms/           # Basic UI building blocks
│   ├── molecules/       # Composite components
│   ├── organisms/       # Complex sections
│   └── templates/       # Page layouts
├── pages/               # Route pages
├── constants/           # Data and configuration
├── assets/              # Static resources
├── App.jsx              # Root component
├── main.jsx             # Entry point
└── index.css            # Global styles
```

## 🎯 Key Components

### Pages
- **Home** - Dashboard with profile and stats
- **Skills** - Technical abilities visualization
- **Experience** - Career timeline and roles
- **Projects** - Project portfolio and side quests
- **Certifications** - Professional credentials
- **Contact** - Contact form and information
- **Lab** - Experimental features

### Core Sections
- **Navigation** - Main navigation menu with theme toggle
- **OperativeProfile** - Hero profile card
- **GlobalStatsPanel** - Key metrics display
- **QuestLog** - Professional and personal projects
- **SiteFooter** - Footer information

## 💻 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

## 🛠️ Development

### Code Quality
- ESLint is configured for code quality and consistency
- React best practices and hooks rules enforced
- CSS validated through Tailwind CSS

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive design for all device sizes

## 📝 Configuration Files

- `vite.config.js` - Vite configuration
- `tailwind.config.js` - Tailwind CSS customization
- `postcss.config.js` - PostCSS configuration
- `eslint.config.js` - ESLint rules
- `package.json` - Project dependencies and scripts

## 🔄 Performance Features

- **Vite HMR** - Hot Module Replacement for instant feedback
- **Optimized Builds** - Minification and code splitting
- **Tree Shaking** - Remove unused code
- **Lazy Loading** - Route-based code splitting with React Router

## 🎓 Career Summary

**Experience**: 3+ years in Frontend-Heavy Full Stack development

**Current Role**: Software Engineer at Coupa Software

**Expertise**: 
- Frontend: React, TypeScript, Angular
- Backend: Java, Spring Boot, Node.js
- Databases: MySQL, SQL Server
- Specializations: Enterprise SaaS, UI Architecture, Performance Optimization

## 📄 License

This project is personal portfolio work. All rights reserved.

## 📧 Contact

- **Email**: [Available in Contact Page]
- **Location**: Remote / India
- **GitHub**: [Link in portfolio]
- **LinkedIn**: [Link in portfolio]

---

Built with ❤️ using React + Vite + Tailwind CSS

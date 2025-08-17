# Personal Portfolio Website

A modern, responsive personal portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion. Features smooth animations, dark mode support, and optimal performance.

## 🚀 Features

### ✨ Animations & Interactions
- **Scroll-triggered animations** - Sections fade in and slide up as they come into view
- **Staggered animations** - Timeline items and skill cards animate with cascading effects
- **Micro-interactions** - Enhanced hover effects, button animations, and social icon interactions
- **Smooth scrolling** - Native smooth scroll behavior between sections
- **Loading animations** - Skeleton loading states for better UX
- **Theme toggle animations** - Smooth transitions between light/dark/system themes

### 🎨 Design & UX
- **Responsive design** - Optimized for all screen sizes (mobile-first approach)
- **Dark mode support** - Light, dark, and system theme options
- **Modern gradient design** - Beautiful gradient backgrounds and accents
- **Clean typography** - Inter font family for excellent readability
- **Accessible design** - WCAG compliant with proper ARIA labels and keyboard navigation

### 🔧 Technical Features
- **Performance optimized** - Lazy loading, code splitting, and optimized bundles
- **TypeScript** - Full type safety throughout the application
- **Error boundaries** - Production-ready error handling
- **Mobile navigation** - Slide-in mobile menu with smooth animations
- **Active section highlighting** - Navigation automatically highlights current section
- **Scroll-to-top button** - Appears when scrolling down, smooth animation

### 📱 Navigation
- **Fixed navigation** - Stays at top with backdrop blur effect
- **Active section detection** - Automatically highlights current section in nav
- **Smooth scroll to sections** - Click navigation items for smooth scrolling
- **Mobile-responsive menu** - Collapsible hamburger menu for mobile devices

## 🛠 Technologies Used

- **React 19** - Latest React with modern hooks and features
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library for animations
- **Vite** - Fast build tool and development server
- **Lucide React** - Beautiful SVG icons

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── About.tsx        # About section with personal info
│   ├── Experience.tsx   # Professional experience timeline
│   ├── Skills.tsx       # Skills and expertise showcase
│   ├── Navigation.tsx   # Header navigation with active states
│   ├── ThemeToggle.tsx  # Theme switcher component
│   ├── ScrollToTop.tsx  # Scroll to top button
│   ├── ErrorBoundary.tsx # Error handling component
│   ├── LoadingSkeleton.tsx # Loading state components
│   └── ui/             # Reusable UI components
├── hooks/              # Custom React hooks
│   ├── useInView.ts    # Intersection Observer hook
│   ├── useScrollAnimation.ts # Scroll-triggered animations
│   ├── useActiveSection.ts # Active section detection
│   ├── useScrollToTop.ts # Scroll to top functionality
│   └── useTheme.ts     # Theme management
├── data/               # Static data files
│   ├── experience.ts   # Professional experience data
│   └── skills.ts       # Skills and categories data
├── types/              # TypeScript type definitions
└── styles/             # Global styles and CSS
```

## 🎯 Key Components

### About Section
- Personal introduction with profile photo
- Social media links with animated icons
- Call-to-action buttons (contact, resume download)
- Animated skill tags

### Skills Section
- Categorized skill display with filtering
- Animated progress bars
- Interactive skill cards with hover effects
- Skills overview statistics

### Experience Section
- Professional timeline with alternating layout
- Expandable achievement details
- Company logos and technology tags
- Animated timeline dots and connecting lines

### Navigation
- Active section highlighting
- Smooth scroll to sections
- Mobile-responsive design
- Theme toggle integration

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd personal-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## ⚙️ Configuration

### Customizing Content

1. **Personal Information**: Update the props in `src/App.tsx` for the About component
2. **Skills**: Modify `src/data/skills.ts` to add/remove skills and categories
3. **Experience**: Update `src/data/experience.ts` with your professional experience
4. **Theme Colors**: Customize colors in `tailwind.config.js`

### Environment Variables

The project uses Vite's environment variables. Create a `.env.local` file for local development:

```
VITE_APP_TITLE=Your Portfolio
```

## 🎨 Customization

### Adding New Sections

1. Create a new component in `src/components/`
2. Add the section to `src/App.tsx`
3. Update navigation items in `src/components/Navigation.tsx`
4. Add the section ID to `src/hooks/useActiveSection.ts`

### Modifying Animations

Animation settings can be adjusted in:
- `src/hooks/useScrollAnimation.ts` - Scroll-triggered animations
- Individual components for specific micro-interactions
- `src/index.css` - Global animation preferences

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px  
- Desktop: > 1024px

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and descriptions
- Keyboard navigation support
- Focus indicators
- Color contrast compliance
- Reduced motion preferences respected

## 🔧 Performance

- Code splitting with React.lazy()
- Optimized bundle sizes
- Lazy loading of components
- Efficient re-rendering with React.memo where needed
- Intersection Observer for scroll animations

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](issues).

## 📞 Contact

- Email: your@email.com
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourusername)
- GitHub: [Your GitHub](https://github.com/yourusername)

---

Built with ❤️ using React, TypeScript, Tailwind CSS, and Framer Motion.
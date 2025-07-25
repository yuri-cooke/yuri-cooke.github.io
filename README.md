# LoveConf - Conference Website

A modern, responsive conference website for "LoveConf - For the Love of Technology" featuring a beautiful purple theme design, built with HTML, CSS, JavaScript, and Bootstrap 5.

## Project Structure

```
loveconf/
├── index.html          # Landing page with hero, program, and speakers
├── tickets.html        # Registration page with form and speaker preview
├── css/
│   ├── style.css       # Main styles and design system
│   └── tickets.css     # Tickets page specific styles
├── js/
│   ├── script.js       # Main JavaScript functionality
│   └── tickets.js      # Tickets page interactive features
├── img/                # Image assets folder
└── README.md           # This file
```

## Design Features

### Design System
- **Typography**: Gabarito (headings) and Funnel Sans (body text)
- **Color Palette**: Purple theme with #1E145B primary, #BBBBFB light purple, #4B39BD medium purple
- **Layout**: Clean, modern design with card-based components
- **Responsive**: Mobile-first design that works on all devices

### Landing Page (`index.html`)
- Hero section with animated phone mockup
- Program schedule with time slots and speakers
- Speakers showcase with play button interactions
- Smooth scroll navigation
- Animated sections on scroll

### Tickets Page (`tickets.html`)
- Registration form with multiple sections
- Dynamic interest field addition
- Form validation and submission handling
- Speaker preview card with tags
- Responsive form layout

## Interactive Features

### Landing Page
- **Mobile Navigation**: Collapsible menu for mobile devices
- **Smooth Scrolling**: Animated navigation between sections
- **Hover Effects**: Interactive speaker cards and schedule items
- **Scroll Animations**: Sections fade in as you scroll
- **Phone Mockup**: Interactive 3D hover effect

### Tickets Page
- **Dynamic Form**: Add unlimited interest fields with Bootstrap grid
- **Form Validation**: Bootstrap validation with real-time feedback
- **Bootstrap Toasts**: Modern notification system
- **Interactive Elements**: Hover effects on form inputs
- **Speaker Preview**: Animated speaker card with hover effects
- **Responsive Layout**: Bootstrap responsive columns

### JavaScript Functionality
- Form handling and validation
- Dynamic content addition
- Smooth animations and transitions
- Mobile menu toggle
- Notification system
- Interactive hover effects

## How to Run

1. **Simple Option**: Double-click `index.html` to open in your browser

2. **Local Server** (recommended for full functionality):
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js
   npx serve .
   
   # PHP
   php -S localhost:8000
   ```
   Then visit `http://localhost:8000`

## Browser Compatibility

This website uses modern web standards and works in all current browsers:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Features Implemented

### Technical Features
- **Bootstrap 5** framework integration
- CSS Custom Properties (CSS Variables)
- Bootstrap Grid System and utilities
- Intersection Observer API for scroll animations
- ES6+ JavaScript features
- Bootstrap components (navbar, forms, toasts)
- Mobile-first responsive design
- Semantic HTML5 structure

### Design Features
- Modern gradient backgrounds
- Smooth animations and transitions
- Interactive hover states
- Typography hierarchy
- Consistent color system
- Mobile-optimized navigation

### User Experience
- Fast loading and smooth performance
- Intuitive navigation
- Clear call-to-action buttons
- Accessible form design
- Visual feedback for interactions
- Progressive enhancement

## Development Notes

The website is built with:
- **Bootstrap 5** for responsive design and components
- **Google Fonts** (Gabarito & Funnel Sans) 
- **Vanilla JavaScript** enhanced with Bootstrap components
- **Bootstrap Grid System** for modern layouts
- **Mobile-first approach** with Bootstrap utilities
- **Semantic HTML** for accessibility
- **CSS custom properties** for theme consistency

## Conference Information

**LoveConf** is a technology conference featuring:
- Date: October 10th
- Location: Salt, Oslo
- Ticket Price: 999.-
- Focus: Technology talks and networking
- Speakers: Various tech industry professionals

Built with love for technology! 💜 
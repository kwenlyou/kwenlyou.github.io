# Kun Liu's Portfolio Website

A modern portfolio website built with React and Vite.

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## 📦 Build

To build for production:
```bash
npm run build
```

The built files will be in the `dist` directory.

## 🌐 Deployment

### GitHub Pages

To deploy to GitHub Pages:

1. Build the project:
```bash
npm run deploy
```

2. The built files in `dist/` can be deployed to GitHub Pages

### Automatic Deployment

This project includes a GitHub Actions workflow that automatically deploys to GitHub Pages on every push to the main branch.

**Important:** Make sure GitHub Pages is configured to use "GitHub Actions" as the source (not "Deploy from a branch") in your repository settings: Settings → Pages → Source → GitHub Actions.

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling

## 📁 Project Structure

```
kwenlyou.github.io/
├── src/
│   ├── App.jsx          # Main App component
│   ├── App.css          # App styles
│   ├── main.jsx         # React entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
├── package.json         # Dependencies and scripts
└── CNAME               # Custom domain configuration
```

## 🎨 Customization

- Edit `src/App.jsx` to modify the main content
- Update `src/App.css` and `src/index.css` for styling
- Change the title in `index.html`

## 📝 License

All rights reserved.

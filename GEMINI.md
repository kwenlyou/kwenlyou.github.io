# Project Overview

This is a personal portfolio website for Kun Liu, Director of AI Engineering. It is a modern, single-page application built with React and Vite. The entire user interface is contained within the `App.jsx` component.

The project is configured for automatic deployment to GitHub Pages.

## Tech Stack

-   **Framework**: React 18
-   **Build Tool**: Vite
-   **Language**: JavaScript (JSX)
-   **Styling**: CSS
-   **Deployment**: GitHub Actions to GitHub Pages

## Project Structure

```
/
├── .github/workflows/deploy.yml  # Defines the CI/CD pipeline for deployment
├── src/
│   ├── App.jsx                   # The main and only React component
│   ├── main.jsx                  # The application's entry point
│   └── *.css                     # CSS style files
├── index.html                    # The main HTML file
├── package.json                  # Project dependencies and scripts
└── vite.config.js                # Vite build configuration
```

## Building and Running

### Prerequisites

-   Node.js (version 20 or higher is recommended as per the deploy workflow)
-   npm

### Commands

-   **Install dependencies:**
    ```bash
    npm install
    ```

-   **Start the local development server:**
    (Runs on `http://localhost:5173` by default)
    ```bash
    npm run dev
    ```

-   **Create a production build:**
    (Output is in the `dist/` directory)
    ```bash
    npm run build
    ```

-   **Preview the production build locally:**
    ```bash
    npm run preview
    ```

## Development Conventions

-   **Component Structure**: The application is composed of a single primary component, `src/App.jsx`. All content changes should be made here.
-   **Styling**: Global and component-specific styles are managed in `src/index.css` and `src/App.css`, respectively.
-   **CI/CD**: The project uses a GitHub Actions workflow defined in `.github/workflows/deploy.yml`. On every push to the `main` branch, the following steps are executed automatically:
    1.  The Node.js environment is set up.
    2.  Dependencies are installed using `npm ci`.
    3.  A production build is created using `npm run build`.
    4.  The contents of the `dist` directory are uploaded as a GitHub Pages artifact.
    5.  The artifact is deployed to the configured GitHub Pages site.
-   **Custom Domain**: A `CNAME` file is present, indicating that this repository is likely used with a custom domain on GitHub Pages. The deployment script in `package.json` ensures this file is copied to the output `dist` directory.

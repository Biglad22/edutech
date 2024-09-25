# Vue 3 + Vite

# EduTech

This project is a Vite-based web application using Tailwind CSS for styling and a Mockoon server for mocking APIs. It is structured with various folders to organize assets, components, services, routing, state management, and views.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Setup Instructions](#setup-instructions)
  - [1. Clone the Repository](#1-clone-the-repository)
  - [2. Install Dependencies](#2-install-dependencies)
  - [3. Tailwind CSS Configuration](#3-tailwind-css-configuration)
  - [4. Mockoon Server Setup](#4-mockoon-server-setup)
  - [5. Run the Application](#5-run-the-application)
- [Project Structure](#project-structure)
- [Scripts](#scripts)

---

## Prerequisites

Before starting, ensure you have the following tools installed:
- [Node.js](https://nodejs.org/) (v14 or later)
- [Vite](https://vitejs.dev/)
- [Mockoon](https://mockoon.com/) (for local mock server)
- [Tailwind CSS](https://tailwindcss.com/)

---

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/your-repository/project-name.git
cd project-name
```
### 2. Install Dependencies
```bash
npm install
```

### 3. Tailwind CSS Configuration
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 4. Mockoon Server Setup
- Download and install Mockoon.
- Import the API collection (mockoon-file.json) provided in the project (or create your own mock APIs).
- Start the Mockoon server locally on http://localhost:3001.

### 5. Run the Application
```bash
npm run dev
```

### Project Structure
```bash
src/
├── assets/           # Static files such as images and fonts
├── components/       # Vue components
├── helper/           # Helper functions and utilities
├── router/           # Vue router setup
├── services/         # API service modules
├── store/            # Vuex store for state management
├── views/            # Page views for routing
├── App.vue           # Main application component
├── main.js           # Application entry file
├── style.css         # Global styles (including Tailwind imports)
mockoon/
├── mock-api.json
```
#### folder breakdown
- *components/* */: Reusable Vue components such as buttons, modals, etc.
- *helper/*: Utility functions or reusable code that doesn’t fit in components.
- *assets/*: Contains static assets such as images, fonts, or other media.
- *store/*: State management using Vuex for handling global app state.
- *router/*: Vue Router setup files to manage navigation between views.
- *services/*: Modules to handle API calls, interacting with the Mockoon server.
- *views/*: Main views or pages of the app, connected via the router.
- *App.vue*: The root component of the Vue app.
- *main.js*: The entry point of the application, where Vue is initialized.
- *style.css*: Custom styles, including Tailwind configuration.

### Scripts
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```
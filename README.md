<p align="center">  
  <img src="public/help-book.svg?raw=true" width="120" />  
  <h1 align="center">Movies Explorer</h1>
</p>

## Overview

Movies Explorer is a web application built with React, TypeScript, and Vite. It provides a minimal setup for exploring movies, with features such as movie thumbnails, pagination, and a desktop-like interface.

You can check it online at [movies-explorer.ggdaltoso.dev](https://movies-explorer.ggdaltoso.dev/)

## Technical Choices

### Frontend Framework

We chose React as our frontend framework due to its popularity, flexibility, and large community support. React allows us to build reusable UI components and manage state changes efficiently.

### Type System

We opted for TypeScript as our type system to ensure type safety and catch errors early in the development process. TypeScript also helps with code maintainability and scalability.

### Build Tool

Vite is our build tool of choice, providing fast and efficient development and production builds. Vite's Hot Module Replacement (HMR) feature enables rapid development and reduces the need for manual reloads.

### UI Components

We utilize the [@react95/core](https://github.com/React95/React95) library to create a desktop-like interface, providing a unique and engaging user experience. The library offers a range of pre-built components, such as frames, inputs, lists, and more.

### State Management

We employ React Redux + Redux toolkit for state management, allowing us to manage global state and props efficiently. Redux provides a predictable and scalable way to manage state changes.

### Icons and Assets

We use the @react95/icons library to include a range of icons and assets, enhancing the overall visual appeal of the application.

### Folder Structure

Our project is organized into the following folders:

- `src`: Contains the main application code, including components, containers, and utilities.
  - `components`: Our molecules/organisms components
  - `ui`: Where our atoms live in. Contains UI-related components and utilities.
  - `services`: Houses API services and data fetching logic.
  - `state`: Manages global state and reducers.

### Configuration

Our project uses the following configuration files:

`tailwind.config.js`: Configures Tailwind CSS for styling.
`tsconfig.json`: Configures TypeScript settings and compiler options.
`vite.config.js`: Configures Vite build and development settings.
`README.md`: This file, provides an overview of the project and technical choices.

## Automated Build and Publish Process

This project uses GitHub Actions to automate the build and publish process. The workflow is defined in the `.github` folder at the project's root. The workflow includes the following steps:

1.  Install dependencies
2.  Build the application using TSC + Vite
3.  Publish the application to GH Pages

For more details on the automated build and publish process, please refer to the .github folder.

## Contributing

To contribute to this project, please follow these steps:

1.  Clone the repository: `git clone https://github.com/ggdaltoso/movies-explorer.git`
2.  Install dependencies: `npm install`
3.  Start the development server: `npm run dev`
4.  Make changes and submit a pull request.

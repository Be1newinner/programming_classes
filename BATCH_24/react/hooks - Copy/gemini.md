# Gemini Project: hooks

This project is a simple Next.js application that demonstrates the use of React hooks, specifically the `useState` hook.

## Project Structure

The project is structured as a standard Next.js application:

```
/
├── public/
│   └── ...
└── src/
    └── app/
        ├── globals.css
        ├── layout.tsx
        └── page.tsx
├── next.config.ts
├── package.json
├── README.md
└── tsconfig.json
```

- `src/app/page.tsx`: The main page of the application, containing a simple counter component.
- `public/`: Contains static assets.
- `next.config.ts`: Next.js configuration file.
- `package.json`: Contains project metadata, dependencies, and scripts.

## Getting Started

### 1. Install Dependencies

To get started, install the project dependencies using npm:

```bash
npm install
```

### 2. Run in Development Mode

To run the application in development mode, use the following command:

```bash
npm run dev
```

This will start the development server at `http://localhost:3000`.

### 3. Build for Production

To build the application for production, use the following command:

```bash
npm run build
```

This will create an optimized production build in the `.next` directory.

### 4. Run in Production Mode

To run the application in production mode, use the following command:

```bash
npm run start
```

This will start the production server.

## Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts the production server.
- `npm run lint`: Lints the code using ESLint.
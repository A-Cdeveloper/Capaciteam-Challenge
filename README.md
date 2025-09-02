# Capaciteam Challenge

This is the initial setup for the Capaciteam Challenge project.

Technologies used:

- React (Vite + TypeScript)
- Material UI (MUI) with custom provider
- React Query with global provider

## Folder structure

src/  
├─ components/ # shared UI components  
├─ hooks/ # shared hooks  
├─ utils/ # helper functions  
├─ types/ # TypeScript types  
├─ features/   
│ └─ bills/  
│ ├─ components/  
│ ├─ hooks/   
│ └─ api/   
├─ providers/ # MuiProvider, React Query Provider  
└─ App.tsx

## Getting Started

1.  Install dependencies:  
    npm install

# or

yarn

1.  Run the development server:  
    npm run dev

# or

yarn dev

1.  Open the app in your browser: http://localhost:5173

## Providers

- `MuiProvider` - global MUI theme + CssBaseline
- `QueryProvider` - global React Query provider

## License

MIT

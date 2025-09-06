# Capaciteam Challenge

A React application for browsing and managing legislation bills with advanced filtering, pagination, favorites functionality, and interactive modal details with bilingual support.

🌐 **Live Demo**: [https://capaciteam-challenge.vercel.app/](https://capaciteam-challenge.vercel.app/)

## Features

- **Bill Browsing**: View legislation bills with detailed information
- **Advanced Filtering**: Filter bills by status (Current, Enacted, Withdrawn, etc.)
- **Smart Pagination**: 1-based pagination with URL synchronization
- **Favorites System**: Mark bills as favorites with localStorage persistence
- **Modal Details**: Interactive bill details modal with compound component pattern
- **URL State Management**: All filters and pagination state synced with URL
- **Type Safety**: Full TypeScript implementation
- **Component Architecture**: Modular design with AllBills/FavoritesBills separation
- **Generic Components**: Reusable TabSwitcher and BillsContainer components
- **Comprehensive Testing**: Unit tests for UI components and custom hooks
- **Performance Optimization**: Code splitting, lazy loading, and bundle optimization
- **CI/CD Pipeline**: Automated testing, building, and deployment with GitHub Actions

## Technologies

- **React 19** with TypeScript and compound component patterns
- **Vite** - Fast build tool and dev server
- **Material-UI (MUI)** - Component library with custom theming
- **TanStack React Query** - Server state management and caching
- **Zustand** - Client state management for favorites
- **nuqs** - Type-safe URL state management
- **Portal API** - Modal rendering outside component tree
- **Vitest** - Modern testing framework with React Testing Library
- **ESLint + Prettier** - Code quality and formatting
- **GitHub Actions** - CI/CD pipeline automation
- **Vercel** - Production deployment and hosting

## Project Structure

```
src/
├── components/          # Shared UI components
│   ├── layout/          # Header, Footer, MainContent
│   └── ui/              # Loading, Error, EmptyState, Tabs, TabSwitcher
├── features/
│   └── bills/           # Bills feature module
│       ├── api/         # API calls (fetchBills)
│       ├── components/  # Bill-specific components
│       │   ├── AllBills.tsx          # All bills tab component
│       │   ├── FavoritesBills.tsx    # Favorites tab component
│       │   ├── BillsContainer.tsx    # Shared container component
│       │   ├── filters/              # BillStatusFilter
│       │   ├── modal/                # BillModal compound component
│       │   └── table/                # Table components
│       ├── hooks/       # Custom hooks
│       │   ├── useBills.ts
│       │   ├── usePagination.ts
│       │   └── useBillsTabs.ts
│       └── stores/      # Zustand stores (favorites with localStorage)
├── pages/              # Page components
│   └── BillsPage.tsx   # Main bills page
├── providers/           # Context providers
│   ├── mui/            # MUI theme provider
│   └── react-query/    # React Query provider
├── types/              # TypeScript type definitions
├── config/             # Constants and configuration
└── __tests__/          # Test files
    ├── features/       # Feature-specific tests
    ├── components/     # Component tests
    ├── utils/          # Test utilities (QueryTestWrapper)
    └── __mocks__/      # Mock data and API responses
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1.  Clone the repository
2.  Install dependencies:

```
npm install
# or
yarn install
```

1.  Set up environment variables:  
    Create a `.env` file in the root directory and add:

```
VITE_API_BASE_URL=https://api.oireachtas.ie/v1
```

1.  Run the development server:

```
npm run dev
# or
yarn dev
```

1.  Open your browser and navigate to `http://localhost:5173`

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm test` - Run tests in watch mode
- `npm run test:run` - Run tests once
- `npm run test:ui` - Open Vitest UI

## Testing

The project includes comprehensive unit testing with Vitest and React Testing Library:

### Test Structure

```
src/__tests__/
├── features/bills/
│   ├── components/table/     # BillTableRow, BillSponsors, FavoriteButton tests
│   └── hooks/               # useBills hook tests
├── components/ui/tabs/      # Tabs component tests
├── utils/                   # QueryTestWrapper for React Query
└── __mocks__/              # Mock data and API responses
```

### Running Tests

```
npm test          # Run tests in watch mode
npm run test:run  # Run tests once
npm run test:ui   # Open Vitest UI
```

## API Integration

The app integrates with the Oireachtas API:

- **Endpoint**: `/legislation`
- **Parameters**: `skip`, `limit`, `bill_status`
- **Response**: Paginated list of legislation bills

## Performance Optimizations

- **Code Splitting**: Lazy loading for AllBills and FavoritesBills components
- **Bundle Optimization**: Manual chunks for vendor libraries
- **Tree Shaking**: Individual Material UI imports
- **Memoization**: React.memo() for preventing unnecessary re-renders
- **Query Caching**: React Query for efficient API data management

## CI/CD Pipeline

The project includes automated CI/CD pipeline with GitHub Actions:

### Workflow Steps

1.  **Lint** - Code quality checks with ESLint
2.  **Test** - Unit tests with Vitest
3.  **Build** - Production build with Vite
4.  **Deploy** - Automatic deployment to Vercel

## Deployment

### Automatic Deployment

The application is automatically deployed to Vercel via GitHub Actions when:

- Code is pushed to `master` branch
- All CI checks pass (lint, test, build)
- Vercel auto-deploy is disabled for `master` branch

### Manual Deployment

1.  Build the project:

```
npm run build
```

1.  Deploy the `dist` folder to your hosting service

## License

MIT License - see LICENSE file for details

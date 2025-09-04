# Capaciteam Challenge

A modern React application for browsing and managing Irish legislation bills with advanced filtering, pagination, and favorites functionality.

## 🚀 Features

- **Bill Browsing**: View legislation bills with detailed information
- **Advanced Filtering**: Filter bills by status (Current, Enacted, Withdrawn, etc.)
- **Smart Pagination**: 1-based pagination with URL synchronization
- **Favorites System**: Mark bills as favorites
- **URL State Management**: All filters and pagination state synced with URL
- **Type Safety**: Full TypeScript implementation

## 🛠️ Technologies

- **React 19** with TypeScript
- **Vite** - Fast build tool and dev server
- **Material-UI (MUI)** - Component library with custom theming
- **TanStack React Query** - Server state management and caching
- **Zustand** - Client state management for favorites
- **nuqs** - Type-safe URL state management
- **ESLint + Prettier** - Code quality and formatting

## 📁 Project Structure

```
src/
├── components/          # Shared UI components
│   ├── layout/          # Header, Footer, MainContent
│   └── ui/              # Loading, Error, EmptyState
├── features/
│   └── bills/           # Bills feature module
│       ├── api/         # API calls (fetchBills)
│       ├── components/  # Bill-specific components
│       │   ├── filters/ # BillStatusFilter
│       │   └── table/   # Table components
│       ├── hooks/       # Custom hooks
│       │   ├── useBills.ts
│       │   ├── usePagination.ts
│       │   └── useBillStatusFilter.ts
│       └── stores/      # Zustand stores
├── providers/           # Context providers
│   ├── mui/            # MUI theme provider
│   └── react-query/    # React Query provider
├── types/              # TypeScript type definitions
└── config/             # Constants and configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

Clone the repository

Install dependencies:

Set up environment variables:  
Create a `.env` file in the root directory:

Run the development server:

Open your browser and navigate to `http://localhost:5173`

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📝 API Integration

The app integrates with the Oireachtas API:

- **Endpoint**: `/legislation`
- **Parameters**: `skip`, `limit`, `bill_status`
- **Response**: Paginated list of legislation bills

## 🚀 Deployment

Build the project:

Deploy the `dist` folder to your hosting service

## 📄 License

MIT License - see LICENSE file for details

```
npm run build
```

```
npm run dev
# or
yarn dev
```

```
VITE_API_BASE_URL=https://api.oireachtas.ie/v1
```

```
npm install
# or
yarn install
```

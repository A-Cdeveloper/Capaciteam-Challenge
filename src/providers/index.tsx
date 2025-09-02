import { MuiProvider } from './mui/MuiProvider';
import { QueryProvider } from './react-query/QueryProvider';

interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <QueryProvider>
      <MuiProvider>{children}</MuiProvider>
    </QueryProvider>
  );
};

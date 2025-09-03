import { MuiProvider } from '@/providers/mui/MuiProvider';
import { QueryProvider } from '@/providers/react-query/QueryProvider';

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

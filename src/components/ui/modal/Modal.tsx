import { Close as CloseIcon } from '@mui/icons-material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import { createContext, use, useState } from 'react';
import ModalTabs from './ModalTabs';
import { createPortal } from 'react-dom';

type ModalContextType<T> = {
  data: T;
  activeTab?: string;
  setActiveTab?: (tab: string) => void;
  onClose: () => void;
  tabs?: { label: string; value: string }[];
};

const ModalContext = createContext<ModalContextType<unknown> | null>(null);

const useModalContext = () => {
  const context = use(ModalContext);
  if (!context) {
    throw new Error('useModalContext must be used within Modal');
  }
  return context;
};

// Main component
type ModalProps<T> = {
  open: boolean;
  onClose: () => void;
  data: T;
  children: React.ReactNode;
  tabs?: { label: string; value: string }[];
};

const ModalRoot = <T,>({ open, onClose, data, children, tabs }: ModalProps<T>) => {
  const [activeTab, setActiveTab] = useState('0');

  const contextValue: ModalContextType<T> = {
    data,
    activeTab,
    setActiveTab,
    onClose,
    tabs,
  };

  return createPortal(
    <ModalContext value={contextValue}>
      <Dialog
        data-testid="bill-modal"
        open={open}
        onClose={onClose}
        maxWidth="lg"
        fullWidth
        slotProps={{
          paper: {
            sx: {
              borderRadius: 2,
              minHeight: '500px',
            },
          },
        }}
      >
        <DialogContent sx={{ p: 0 }}>{children}</DialogContent>
      </Dialog>
    </ModalContext>,
    document.body
  );
};

// Subcomponents
const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <DialogTitle
      data-testid="bill-modal-header"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        px: 3,
        py: 2,
      }}
    >
      {children}
    </DialogTitle>
  );
};

const Close = () => {
  const { onClose } = useModalContext();

  return (
    <IconButton
      data-testid="bill-modal-close"
      aria-label="close"
      onClick={onClose}
      size="small"
      sx={{
        color: (theme) => theme.palette.grey[600],
        '&:hover': {
          backgroundColor: (theme) => theme.palette.grey[100],
        },
      }}
    >
      <CloseIcon />
    </IconButton>
  );
};

const Tabs = () => {
  const { activeTab, setActiveTab, tabs } = useModalContext();
  if (!tabs) return null;
  return (
    <ModalTabs
      data-testid="modal-tabs"
      tabs={tabs}
      activeTab={activeTab || '0'}
      onTabChange={setActiveTab || (() => {})}
    />
  );
};

const Content = <T,>({
  children,
}: {
  children: (props: { data: T; activeTab: string }) => React.ReactNode;
}) => {
  const { data, activeTab } = useModalContext();
  if (!data || !activeTab) return null;

  return <div data-testid="modal-content"> {children({ data: data as T, activeTab })}</div>;
};

//
const Modal = Object.assign(ModalRoot, {
  Header,
  Close,
  Tabs,
  Content,
});

export { Modal };

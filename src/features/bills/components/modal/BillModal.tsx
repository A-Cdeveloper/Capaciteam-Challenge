import type { Bill } from '@/types';
import { Close as CloseIcon } from '@mui/icons-material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import { createContext, use, useState } from 'react';
import BillModalContent from './BillModalContent';
import BillModalTabs from './BillModalTabs';

type BillModalContextType = {
  bill: Bill | null;
  activeTab: number;
  setActiveTab: (tab: number) => void;
  onClose: () => void;
};

const BillModalContext = createContext<BillModalContextType | null>(null);

const useBillModalContext = () => {
  const context = use(BillModalContext);
  if (!context) {
    throw new Error('useBillModalContext must be used within BillModal');
  }
  return context;
};

// Main component
type BillModalProps = {
  open: boolean;
  onClose: () => void;
  bill: Bill | null;
  children: React.ReactNode;
};

const BillModalRoot = ({ open, onClose, bill, children }: BillModalProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const contextValue: BillModalContextType = {
    bill,
    activeTab,
    setActiveTab,
    onClose,
  };

  return (
    <BillModalContext value={contextValue}>
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
    </BillModalContext>
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
  const { onClose } = useBillModalContext();

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
  const { activeTab, setActiveTab } = useBillModalContext();
  return (
    <BillModalTabs data-testid="bill-modal-tabs" activeTab={activeTab} onTabChange={setActiveTab} />
  );
};

const Content = () => {
  const { bill, activeTab } = useBillModalContext();
  if (!bill) return null;
  return <BillModalContent data-testid="bill-modal-content" bill={bill} activeTab={activeTab} />;
};

//
const BillModal = Object.assign(BillModalRoot, {
  Header,
  Close,
  Tabs,
  Content,
});

export { BillModal };

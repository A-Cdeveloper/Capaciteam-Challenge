import { Modal } from '@/components/ui/modal';
import Typography from '@mui/material/Typography';
import type { Bill } from '@/types';
import BillContent from './BillContent';

const TABS = [
  { label: 'English', value: '0' },
  { label: 'Gaeilge', value: '1' },
] as { label: string; value: string }[];

type BillModalProps = {
  bill: Bill;
  isOpen: boolean;
  onClose: () => void;
};

const BillModal = ({ bill, isOpen, onClose }: BillModalProps) => (
  <Modal open={isOpen} onClose={onClose} data={bill} tabs={TABS}>
    <Modal.Header>
      <Typography variant="h5" component="div">
        Bill Details - {bill.billNo}
      </Typography>
      <Modal.Close />
    </Modal.Header>
    <Modal.Tabs />
    <Modal.Content>
      {({ data, activeTab }) => <BillContent bill={data as Bill} activeTab={activeTab} />}
    </Modal.Content>
  </Modal>
);

export default BillModal;

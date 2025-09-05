import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { memo } from 'react';
import type { Bill } from '@/types';
import BillSponsors from '../table/BillSponsors';

type BillModalContentProps = {
  bill: Bill;
  activeTab: number;
};

const BillModalContent = memo(({ bill, activeTab }: BillModalContentProps) => {
  const isEnglish = activeTab === 0;
  const title = isEnglish ? bill.shortTitleEn : bill.shortTitleGa;
  const description = isEnglish ? bill.longTitleEn : bill.longTitleGa;

  return (
    <Box
      sx={{
        px: 3,
        py: 3,
        maxHeight: '60vh',
        overflow: 'auto',
        // Firefox scrollbar styling
        scrollbarWidth: 'thin',
        scrollbarColor: (theme) => `${theme.palette.grey[300]} transparent`,
        // WebKit scrollbar styling (Chrome, Safari)
        '&::-webkit-scrollbar': {
          width: '8px',
        },
        '&::-webkit-scrollbar-track': {
          background: 'transparent',
        },
        '&::-webkit-scrollbar-thumb': {
          background: (theme) => theme.palette.grey[300],
          borderRadius: '4px',
        },
        '&::-webkit-scrollbar-thumb:hover': {
          background: (theme) => theme.palette.grey[400],
        },
      }}
    >
      <Typography
        variant="h4"
        component="h2"
        sx={{
          mb: 1,
          color: 'text.primary',
          lineHeight: 1.3,
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          lineHeight: 1.7,
          color: 'text.secondary',
          fontSize: '1rem',
        }}
        dangerouslySetInnerHTML={{ __html: description || '' }}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mt: 3 }}>
        <Typography variant="body2">
          <span style={{ fontWeight: 500 }}>{isEnglish ? 'Bill Type' : 'Cineál Bille'}:</span>{' '}
          {bill.billType}
        </Typography>
        <Typography variant="body2">
          <span style={{ fontWeight: 500 }}>{isEnglish ? 'Sponsor' : 'Urraitheoir'}:</span>{' '}
          <BillSponsors sponsors={bill.sponsors} />
        </Typography>
        <Typography variant="body2">
          <span style={{ fontWeight: 500 }}>{isEnglish ? 'Status' : 'Stádas'}:</span> {bill.status}
        </Typography>
      </Box>
    </Box>
  );
});

export default BillModalContent;

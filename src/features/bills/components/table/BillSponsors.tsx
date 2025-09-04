import type { Sponsor } from '@/types';
import { Stack } from '@mui/material';

const BillSponsors = ({ sponsors }: { sponsors: Sponsor[] }) => {
  if (!sponsors || sponsors.length === 0) return <>N/A</>;

  return (
    <Stack direction="row" flexWrap="wrap" gap={0.5}>
      {sponsors.map((s) => s.sponsor.as.showAs || 'N/A')}
    </Stack>
  );
};

export default BillSponsors;

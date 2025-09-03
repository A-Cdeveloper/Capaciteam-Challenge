import { Chip, Stack } from '@mui/material';

import type { Sponsor } from '@/types';

const BillSponsors = ({ sponsors }: { sponsors: Sponsor[] }) => {
  if (!sponsors || sponsors.length === 0) return <>N/A</>;

  return (
    <Stack direction="row" flexWrap="wrap" gap={0.5}>
      {sponsors.map((s, index) => (
        <Chip key={index} label={s.sponsor.as.showAs || 'N/A'} size="small" />
      ))}
    </Stack>
  );
};

export default BillSponsors;

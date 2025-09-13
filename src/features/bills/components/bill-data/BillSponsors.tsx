import type { Sponsor } from '@/types';

const getDisplaySponsor = (sponsor: Sponsor): string => {
  const byName = sponsor.sponsor.by?.showAs || '';
  const asName = sponsor.sponsor.as?.showAs || '';

  if (!byName && !asName) return 'N/A';

  return byName && asName ? `${byName} (${asName})` : byName || asName;
};

const BillSponsors = ({ sponsors }: { sponsors: Sponsor[] }) => {
  if (!sponsors || sponsors.length === 0) return <span data-testid="bill-sponsors">N/A</span>;

  // Use primary sponsor if available | fall back to first sponsor
  const primarySponsor = sponsors.find((s) => s.sponsor.isPrimary);
  const sponsorToUse = primarySponsor || sponsors[0];

  return <span data-testid="bill-sponsors">{getDisplaySponsor(sponsorToUse)}</span>;
};

export default BillSponsors;

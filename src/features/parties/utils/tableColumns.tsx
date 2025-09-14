import type { Party } from '@/types';
import { PARTIES_TABLE_COLUMNS } from '../constants/columns';
import { Link } from 'react-router-dom';
import { AddLinkOutlined } from '@mui/icons-material';

// create cell renderers for the bill table
const createCellRenderers = (party: Party) => ({
  showAs: () => <span data-testid="bill-number">{party.showAs}</span>,
  uri: () => (
    <Link to={party.uri} target="_blank" data-testid="bill-type">
      <AddLinkOutlined color="primary" />
    </Link>
  ),
});

export const createPartiesTableColumns = () =>
  PARTIES_TABLE_COLUMNS.map((column) => ({
    ...column,
    render: (party: Party) => createCellRenderers(party)[column.key]?.() || 'N/A',
  }));

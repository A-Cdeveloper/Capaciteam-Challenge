import type { House } from '@/types';
import { HOUSES_TABLE_COLUMNS } from '../constants/columns';
import { Link } from 'react-router-dom';
import { AddLinkOutlined } from '@mui/icons-material';

// create cell renderers for the houses table
const createCellRenderers = (house: House) => ({
  showAs: () => <span data-testid="house-name">{house.showAs}</span>,
  houseType: () => <span data-testid="house-type">{house.houseType}</span>,
  seats: () => <span data-testid="house-seats">{house.seats}</span>,
  houseNo: () => <span data-testid="house-number">{house.houseNo}</span>,
  uri: () => (
    <Link to={house.uri} target="_blank" data-testid="house-link">
      <AddLinkOutlined color="primary" />
    </Link>
  ),
});

export const createHousesTableColumns = () =>
  HOUSES_TABLE_COLUMNS.map((column) => ({
    ...column,
    render: (house: House) => createCellRenderers(house)[column.key]?.() || 'N/A',
  }));

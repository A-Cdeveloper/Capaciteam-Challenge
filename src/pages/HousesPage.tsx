import AllHouses from '@/features/houses/components/AllHouses';
import HousesTypeFilter from '@/features/houses/filters/HousesTypeFilter';
import { Box } from '@mui/material';

const HousesPage = () => {
  return (
    <>
      <Box sx={{ mb: 2, position: 'relative' }}>
        <HousesTypeFilter />
      </Box>
      <AllHouses />
    </>
  );
};

export default HousesPage;

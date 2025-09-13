import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { memo } from 'react';

import { useFavoritesStore } from '@/features/bills/stores/favoritesStore';
import type { Bill } from '@/types';

type FavoriteButtonProps = {
  bill: Bill;
};

const FavoriteButton = memo(({ bill }: FavoriteButtonProps) => {
  const theme = useTheme();
  const billId = `${bill.billNo}-${bill.billYear}`;
  const isFavorite = useFavoritesStore((state) => state.isFavorite(billId));
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);

  return (
    <IconButton
      aria-label={`Favourite bill ${bill.billNo}`}
      title={`Favourite bill ${bill.billNo}`}
      data-testid="favorite-button"
      size="small"
      sx={{
        color: isFavorite ? theme.palette.warning.main : theme.palette.text.secondary,
      }}
      onClick={(e) => {
        e.stopPropagation(); // prevent the click from bubbling up to the table row
        toggleFavorite(bill);
        console.log(
          `Request to ${isFavorite ? 'unfavourite' : 'favourite'} a bill ${bill.billNo} (${bill.billYear}) was dispatched to the server`
        );
      }}
    >
      {isFavorite ? <Favorite fontSize="small" /> : <FavoriteBorder fontSize="small" />}
    </IconButton>
  );
});

export default FavoriteButton;

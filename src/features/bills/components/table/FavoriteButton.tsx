import { IconButton, useTheme } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { memo } from 'react';

import { useFavoritesStore } from '@/features/bills/stores/favoritesStore';

type FavoriteButtonProps = {
  billNo: string;
  billYear: string;
};

const FavoriteButton = memo(({ billNo, billYear }: FavoriteButtonProps) => {
  const theme = useTheme();
  const uniqueId = `${billNo}-${billYear}`;
  const isFavorite = useFavoritesStore((state) => state.favorites.includes(uniqueId));
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);

  return (
    <IconButton
      aria-label={`Favourite bill ${billNo}`}
      title={`Favourite bill ${billNo}`}
      size="small"
      sx={{
        color: isFavorite ? theme.palette.warning.main : theme.palette.text.secondary,
      }}
      onClick={() => {
        toggleFavorite(uniqueId);
        console.log(
          `Request to ${isFavorite ? 'unfavourite' : 'favourite'} a bill ${billNo} (${billYear}) was dispatched to the server`
        );
      }}
    >
      {isFavorite ? <Favorite /> : <FavoriteBorder />}
    </IconButton>
  );
});

export default FavoriteButton;

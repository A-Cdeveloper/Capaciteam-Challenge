import { create } from 'zustand';

type FavoritesStore = {
  favorites: string[];
  toggleFavorite: (billNo: string) => void;
};

export const useFavoritesStore = create<FavoritesStore>((set) => ({
  favorites: [],

  // toggle the favorite status of a bill
  toggleFavorite: (billNo: string) => {
    set((state) => ({
      favorites: state.favorites.includes(billNo)
        ? state.favorites.filter((fav) => fav !== billNo)
        : [...state.favorites, billNo],
    }));
  },
}));

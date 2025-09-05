import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Bill } from '@/types';

type FavoritesStore = {
  favorites: Record<string, Bill>;
  toggleFavorite: (bill: Bill) => void;
  isFavorite: (billId: string) => boolean;
};

export const useFavoritesStore = create<FavoritesStore>()(
  persist(
    (set, get) => ({
      favorites: {},

      // toggle the favorite status of a bill
      toggleFavorite: (bill: Bill) => {
        const billId = `${bill.billNo}-${bill.billYear}`;
        set((state) => {
          const newFavorites = { ...state.favorites };
          if (newFavorites[billId]) {
            delete newFavorites[billId];
          } else {
            newFavorites[billId] = bill;
          }
          return { favorites: newFavorites };
        });
      },

      // check if a bill is favorite
      isFavorite: (billId: string) => {
        return !!get().favorites[billId];
      },
    }),
    {
      name: 'favorites-storage', // localStorage key
    }
  )
);

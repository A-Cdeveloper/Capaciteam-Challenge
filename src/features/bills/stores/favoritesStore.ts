import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Bill } from '@/types';

type FavoritesStore = {
  /** Map of favorite bills by billId (billNo-billYear) */
  favorites: Record<string, Bill>;
  /** Toggle favorite status of a bill */
  toggleFavorite: (bill: Bill) => void;
  /** Check if a bill is marked as favorite */
  isFavorite: (billId: string) => boolean;
};

export const useFavoritesStore = create<FavoritesStore>()(
  persist(
    (set, get) => ({
      favorites: {},

      /**
       * Toggle the favorite status of a bill
       * @param bill - The bill object to toggle favorite status for
       */
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

      /**
       * Check if a bill is marked as favorite
       * @param billId - The bill ID in format "billNo-billYear"
       * @returns True if the bill is favorited, false otherwise
       */
      isFavorite: (billId: string) => {
        return !!get().favorites[billId];
      },
    }),
    {
      name: 'favorites-storage', // localStorage key
    }
  )
);

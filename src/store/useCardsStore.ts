import { create } from 'zustand';

interface StoreCardsProps {
  selectedCards: number[];
  toggleCard: (id: number) => void;
  clearAllCards: () => void;
  isSelected: (id: number) => boolean;
}

export const useCardsStore = create<StoreCardsProps>((setNew, getCurrent) => ({
  selectedCards: [],

  toggleCard: (id) => {
    const { selectedCards } = getCurrent();
    const isSelected = selectedCards.includes(id);

    setNew({
      selectedCards: isSelected
        ? selectedCards.filter((cardId) => cardId !== id)
        : [...selectedCards, id],
    });
  },
  clearAllCards: () => setNew({ selectedCards: [] }),
  isSelected: (id) => getCurrent().selectedCards.includes(id),
}));

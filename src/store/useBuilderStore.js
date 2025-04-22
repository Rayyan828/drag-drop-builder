import create from 'zustand';

// Zustand store for managing the builder state
export const useBuilderStore = create((set) => ({
  // The items on the canvas
  items: [],
  
  // Feedback message
  feedback: '',
  
  // Add item to canvas
  addItem: (itemId, zoneId) => {
    set((state) => {
      const existingItem = state.items.find((item) => item.id === itemId);
      if (!existingItem) {
        return {
          items: [...state.items, { id: itemId, zoneId }],
          feedback: `Item added to ${zoneId}`,
        };
      }
      return state;
    });
  },

  // Remove item from canvas
  removeItem: (itemId) => {
    set((state) => {
      return {
        items: state.items.filter((item) => item.id !== itemId),
        feedback: `Item removed`,
      };
    });
  },

  // Set feedback message
  setFeedback: (message) => {
    set(() => ({
      feedback: message,
    }));
  },

  // Reset the builder (clear canvas and feedback)
  resetBuilder: () => {
    set(() => ({
      items: [],
      feedback: '',
    }));
  },
}));

import { create } from "zustand";

const useCartStore = create((set) => ({
    cartItems: [],
    addToCart: (payload) => {
        set((state) => ({
            cartItems: [...state.cartItems, payload]
        }))
    },
    removeFromCart: (payload) => {
        set((state) => ({
            cartItems: [...state.cartItems.filter((item) => item.id !== payload.id)]
        }))
    },
    removeAllBears: () => set({ bears: 0 }),
}))

export default useCartStore;
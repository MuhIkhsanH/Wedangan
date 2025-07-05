import { create } from 'zustand'

export const useCartStore = create((set) => ({
  cart: [],
  addToCart: (item) => set((state) => {
    const existing = state.cart.find(i => i.nama === item.nama)
    if (existing) {
      return {
        cart: state.cart.map(i =>
          i.nama === item.nama ? { ...i, jumlah: i.jumlah + 1 } : i
        )
      }
    }
    return { cart: [...state.cart, { ...item, jumlah: 1 }] }
  }),
  removeFromCart: (nama) => set((state) => ({
    cart: state.cart.filter(i => i.nama !== nama)
  })),
  totalHarga: () => useCartStore.getState().cart.reduce((t, i) => t + i.harga * i.jumlah, 0),
  totalItem: () => useCartStore.getState().cart.reduce((t, i) => t + i.jumlah, 0),
}))

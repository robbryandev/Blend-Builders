import { create } from "zustand";

export const cartStore = create((set) => ({
  cart: {},
}));

export const editStore = create((set) => ({
  show: false,
  coffee: {},
}));

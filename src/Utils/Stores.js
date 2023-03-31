import { create } from "zustand";

export const cartStore = create((set) => ({
  cart: {},
  hide: false,
  done: false
}));

export const editStore = create((set) => ({
  show: false,
  coffee: {},
}));

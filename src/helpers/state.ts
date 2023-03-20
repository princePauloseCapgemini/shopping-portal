import { atom } from "recoil";
import { ProductProps } from "../types";

export const cartState = atom<ProductProps[]>({
  key: "cartstate",
  default: [],
});

import { useStore } from "zustand";
import { cartStore } from "../Pages/Home";
import {v4} from "uuid";

export default function CartDisplay(
  props = {
    flavors: []
  }
) {
    const cart = useStore(cartStore);
  const keys = Object.keys(cart.cart);
  return (
    <div className="bg-black">
      {props.flavors.map((fl) => {
        const valid = keys.includes(fl.id);
        if (valid) {
          return (
            <div key={v4()} className="w-10/12 bg-primary">
              <img
                src={fl.img}
                alt={fl.name}
                className="object-fill w-20 h-auto aspect-square"
              />
              <p>{fl.name}</p>
              <p>{cart.cart[fl.id]}</p>
            </div>
          );
        }
      })}
    </div>
  );
}

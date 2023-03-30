import { useStore } from "zustand";
import { cartStore } from "../Utils/Stores";
import {v4} from "uuid";

export default function CartDisplay(
  props = {
    flavors: []
  }
) {
    const cart = useStore(cartStore);
  const keys = Object.keys(cart.cart);
  return (
    <div className="px-0.5 py-[0.1rem] bg-black">
      {props.flavors.map((fl) => {
        const valid = keys.includes(fl.id);
        if (valid) {
          return (
            <div key={v4()} className="w-full my-1 space-x-2 font-semibold text-white bg-primary">
              <img
                src={fl.img}
                alt={fl.name}
                className="inline object-fill w-12 h-auto p-2 aspect-square"
              />
              <p className="inline">{fl.name}</p>
              <p className="inline">{cart.cart[fl.id]}</p>
            </div>
          );
        }
      })}
    </div>
  );
}

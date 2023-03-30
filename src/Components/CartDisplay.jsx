import { useStore } from "zustand";
import { cartStore } from "../Utils/Stores";
import { v4 } from "uuid";

export default function CartDisplay(
  props = {
    flavors: [],
  }
) {
  const cart = useStore(cartStore);
  let keys = Object.keys(cart.cart);
  return (
    <div className="px-0.5 py-[0.1rem] bg-black text-white text-center">
      <p>
        Total $
        {props.flavors
          .reduce((result, val, index) => {
            let newResult = result;
            newResult += keys.includes(props.flavors[index].id)
              ? props.flavors[index].price * cart.cart[props.flavors[index].id]
              : 0;
            return newResult;
          }, 0)
          .toFixed(2)}
      </p>
      {props.flavors.map((fl) => {
        let valid = false;
        if (keys.includes(fl.id)) {
          valid = cart.cart[fl.id] > 0;
          if (cart.cart[fl.id] <= 0) {
            let removeCoffee = cartStore.getState();
            delete removeCoffee.cart[fl.id];
            cartStore.setState(removeCoffee, true);
          }
        }
        return valid ? (
          <div
            key={v4()}
            className="w-full my-1 space-x-2 font-semibold bg-primary"
          >
            <img
              src={fl.img}
              alt={fl.name}
              className="inline object-fill w-12 h-auto p-2 aspect-square"
            />
            <p className="inline">{fl.name}</p>
            <p className="inline">{cart.cart[fl.id]}</p>
            <button
              className="inline px-[0.5rem] font-bold ml-4 bg-secondary rounded-full"
              onClick={() => {
                let newCart = cart.cart;
                newCart[fl.id] -= 1;
                cartStore.setState({ cart: newCart }, true);
              }}
            >
              -
            </button>
          </div>
        ) : null;
      })}
    </div>
  );
}

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
    <>
    {
      keys.length > 0 ? (
        <div className="px-0.5 py-[0.1rem] bg-black">
          {props.flavors.map((fl) => {
            let valid = false;
            if (keys.includes(fl.id)) {
              valid = cart.cart[fl.id] > 0;
              if (!valid) {
                let removeCoffee = cartStore.getState();
                delete(removeCoffee.cart[fl.id]);
                cartStore.setState(removeCoffee, true);
              }
            }
            if (valid) {
              return (
                <div
                  key={v4()}
                  className="w-full my-1 space-x-2 font-semibold text-white bg-primary"
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
                      newCart[fl.id] -= 1
                      cartStore.setState(newCart);
                    }}
                  >
                    -
                  </button>
                </div>
              );
            }
          })}
        </div>
      ) : null
    }
    </>
  );
}

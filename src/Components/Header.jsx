import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { BsFillCartFill } from "react-icons/bs";
import { cartStore } from "../Pages/Home";
import { useStore } from "zustand";

export default function Header(
  props = {
    loggedIn: false,
    showAuth: true
  }
) {
  const cart = useStore(cartStore)

  const isMobile = () => {
    return window.innerWidth < 768 ? true : false;
  };
  const [mobile, setMobile] = useState(isMobile());
  useEffect(() => {
    window.addEventListener("resize", () => setMobile(isMobile()));
    return () =>
      window.removeEventListener("resize", () => setMobile(isMobile()));
  });

  function getCount(cartVal) {
    const keys = Object.keys(cartVal);
    let result = 0;
    for (let i = 0; i < keys.length; i++) {
      result += cartVal[keys[i]]
    }
    return result;
  }

  return (
    <header className="fixed z-30 w-screen py-4 border-b-4 bg-primary border-b-secondary">
      <div id="logo" className="w-10 mx-2 md:w-44">
        <a href="/">
          <img
            className="w-10 md:w-44"
            src={mobile ? "logo-mug.png" : "logo-no-background.svg"}
            alt="blend builders logo"
          />
        </a>
      </div>
      {props.showAuth ? (
        <div className="absolute top-4 right-28">
          <button
            className="text-lg text-white text-shadow"
            type="button"
            onClick={() => {
              if (props.loggedIn) {
                signOut(auth).catch((err) => {
                  console.log(err);
                });
              } else {
                window.location = "/login";
              }
            }}
          >
            {props.loggedIn ? "Logout" : "Login"}
          </button>
        </div>
      ) : null}
      {props.showAuth ? (
        <div className="absolute top-6 right-16">
          <button className="inline text-lg text-white">
            <BsFillCartFill />
            <span className="px-[0.3rem] py-[0.1rem] bg-black rounded-full text-sm icon relative bottom-10 left-4">{getCount(cart.cart)}</span>
          </button>
        </div>
      ) : null}
    </header>
  );
}

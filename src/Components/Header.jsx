import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";

export default function Header(
  props = {
    loggedIn: false,
    showAuth: true
  }
) {
  const isMobile = () => {
    return window.innerWidth < 768 ? true : false;
  };
  const [mobile, setMobile] = useState(isMobile());
  useEffect(() => {
    window.addEventListener("resize", () => setMobile(isMobile()));
    return () =>
      window.removeEventListener("resize", () => setMobile(isMobile()));
  });
  return (
    <header className="fixed z-30 w-screen py-4 border-b-4 bg-primary border-b-secondary">
      <div id="logo" className="w-10 mx-2 md:w-44">
        <a href={props.showAuth ? "#" : "/"}>
          <img
            className="w-10 md:w-44"
            src={mobile ? "logo-mug.png" : "logo-no-background.svg"}
            alt="blend builders logo"
          />
        </a>
      </div>
      {props.showAuth ? (
        <div className="absolute top-0 right-0 pt-4 pr-10 md:pr-20">
          <button
            className="text-lg text-white text-shadow"
            type="button"
            onClick={() => {
              if (props.loggedIn) {
                signOut(auth)
                  .catch((err) => {
                    console.log(err)
                  })
              } else {
                window.location = "/login";
              }
            }}
          >
            {props.loggedIn ? "Logout" : "Login"}
          </button>
        </div>
      ) : null}
    </header>
  );
}

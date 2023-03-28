import { useEffect, useState } from "react";

export default function Header() {
  const isMobile = () => {
    return window.innerWidth < 768
    ? true
    : false;
  }
  const [mobile, setMobile] = useState(isMobile());
  useEffect(() => {
    window.addEventListener("resize", () => setMobile(isMobile()));
    return () => window.removeEventListener("resize", () => setMobile(isMobile()));
  })
  return (
    <header className="py-4 border-b-4 bg-primary border-b-secondary">
      <div id="logo" className="w-10 mx-2 md:w-44">
        <a href="/">
          <img className="w-10 md:w-44" src={mobile ? "logo-mug.png" : "logo-no-background.svg"} alt="blend builders logo" />
        </a>
      </div>
    </header>
  );
}

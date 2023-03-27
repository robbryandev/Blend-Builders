export default function Header() {
  return (
    <header className="w-full h-16 bg-primary border-b-4 border-b-secondary">
      <div id="logo" className="w-4/12">
        <a href="/">
          <img
            src="logo-no-background.svg"
            alt="blend builders logo"
            className="h-16 py-3 pl-4"
          />
        </a>
      </div>
    </header>
  );
}

function Home() {
  return (
    <div className="w-screen min-h-screen bg-neutral-200">
      <header className="w-full h-16 bg-primary shadow-md">
        <div className="w-4/12">
          <a href="/">
            <img src="logo-no-background.svg" alt="blend builders logo" className="h-16 py-3 pl-4" />
          </a>
        </div>
      </header>
      <div id="hero" className="w-screen h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh]  p-0 m-0 bg-hero grayscale-[70%]">
        
      </div>
    </div>
  );
}

export default Home;

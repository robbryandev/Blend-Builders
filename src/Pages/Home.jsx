function Home() {
  return (
    <div className="w-full min-h-screen bg-neutral-200">
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
      <main>
        <div
          id="hero"
          className="w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh]  p-0 m-0 bg-hero grayscale-[70%]"
        ></div>
        <div
          id="menu"
          className="w-full min-h-[40vh] bg-primary border-y-secondary border-y-4"
        >
          <h1 className="text-4xl text-white font-semibold text-center mt-4">Menu</h1>
        </div>
      </main>
      <footer className="w-full min-h-[20vh] bg-black">
        <p className="text-white text-md p-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          reprehenderit repellat adipisci soluta quo cum deserunt voluptatem
          corporis sapiente nobis fugit, delectus nulla necessitatibus molestiae
          nihil culpa maiores numquam? Accusamus?
        </p>
      </footer>
    </div>
  );
}

export default Home;

import Header from "../Components/Header";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div className="w-full min-h-screen bg-neutral-200">
      <Header />
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
      <Footer />
    </div>
  );
}

export default Home;

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Coffee from "../Components/Coffee";
import menu from "../menu";

function Home() {
  return (
    <div className="w-full min-h-screen bg-neutral-200">
      <Header />
      <main>
        <div
          id="hero"
          className="w-full h-[40vh] sm:h-[50vh] md:h-[40vh] p-0 m-0 bg-hero"
        >
          <div>
            <h1 className="text-2xl md:text-4xl pl-4 pt-2 pb-6 text-white font-semibold text-shadow w-3/5">
              Welcome to Blend Builders, where every cup is a masterpiece!
            </h1>
            <a
              className="text-white text-shadow text-xl md:text-2xl"
              href="#footer"
            >
              <img
                className="inline w-[2.5rem] ml-10 pr-2"
                src="logo-mug.png"
                alt="Contact us"
              />
              Contact Us
            </a>
          </div>
        </div>
        <div
          id="menu"
          className="w-full min-h-[40vh] bg-primary border-y-secondary border-y-4"
        >
          <h1 className="text-4xl text-white font-semibold text-center mt-4 text-shadow">
            Menu
          </h1>
          <div className="flex flex-row flex-wrap w-[80vw] m-auto my-4">
            {
              menu.map((item, index) => {
                return <Coffee key={index} name={item.name} price={item.price} img={item.img} />
              })
            }
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;

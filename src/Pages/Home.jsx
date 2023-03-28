import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Coffee from "../Components/Coffee";
import menu from "../menu";
import { auth, db } from "../Utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, onSnapshot } from "firebase/firestore";
import AddCoffee from "../Components/AddCoffee";
import { useEffect, useState } from "react";

function Home() {
  const [user] = useAuthState(auth);
  const [flavors, setFlavors] = useState([]);
  const [showAdd, setShowAdd] = useState(false);

  useEffect(() => {
    if (user == null) {
      setShowAdd(false);
    }
  }, [user]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "flavors"), (snap) => {
      const flavs = [];
      snap.forEach((flav) => {
        console.log("new flavor");
        const flavData = flav.data();
        flavs.push({
          name: flavData.name,
          price: flavData.price,
          img: flavData.img,
          id: flav.id,
          owner: flavData.owner
        });
      });
      setFlavors(flavs);
    });
    return () => unsub();
  }, []);

  return (
    <div className="w-full min-h-screen bg-neutral-200">
      <Header showAuth={true} loggedIn={user != null} />
      <main className="pt-16">
        <div
          id="hero"
          className="w-full h-[30vh] md:h-[40vh] p-0 m-0 bg-hero pb-12"
        >
          <h1 className="w-3/5 pt-2 pb-6 pl-4 text-2xl font-semibold text-white md:text-4xl text-shadow">
            Welcome to Blend Builders, where every cup is a masterpiece!
          </h1>
          <a
            className="text-xl text-white text-shadow md:text-2xl"
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
        <div
          id="menu"
          className="w-full min-h-[40vh] bg-primary border-y-secondary border-y-4"
        >
          <h1 className="mt-4 text-4xl font-semibold text-center text-white text-shadow">
            Menu
          </h1>
          {user != null ? (
            <div className="mt-4 text-center">
              <button
                className="px-[1.5rem] py-[0.5rem] bg-secondary text-white font-semibold rounded-md"
                type="button"
                onClick={() => {
                  setShowAdd(showAdd === false);
                }}
              >
                New Coffee
              </button>
            </div>
          ) : null}
          {showAdd ? (
            <div className="w-4/5 max-w-[400px] m-auto my-4">
              <AddCoffee user={user} />
            </div>
          ) : null}
          <div className="flex flex-row flex-wrap justify-center w-[80vw] m-auto my-4">
            {menu.map((item, index) => {
              return (
                <Coffee
                  key={index}
                  id={index}
                  name={item.name}
                  price={item.price}
                  img={item.img}
                  owner={"robbryandev@gmail.com"}
                  user={user}
                />
              );
            })}
            {
              flavors.map((fl) => {
                return <Coffee key={fl.id} id={fl.id} name={fl.name} price={fl.price} img={fl.img} owner={fl.owner} user={user} />
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

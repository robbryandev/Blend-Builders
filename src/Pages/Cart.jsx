import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { auth } from "../Utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function Cart() {
  const [user] = useAuthState(auth);

  return (
    <div className="w-full min-h-screen bg-neutral-200">
      <Header showAuth={true} loggedIn={user != null} />
      <main className="w-full min-h-screen pt-16 bg-neutral-200">
      </main>
      <Footer />
    </div>
  );
}

export default Cart;

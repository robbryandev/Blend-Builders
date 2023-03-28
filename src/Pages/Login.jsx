import Header from "../Components/Header";
import LoginForm from "../Components/LoginForm";

function Login() {
  return (
    <div className="w-full min-h-screen bg-neutral-200">
      <Header showAuth={false} />
      <main className="w-screen min-h-screen pt-16 bg-black">
        <h1 className="mt-6 text-3xl text-center text-white text-shadow md:text-4xl">Admin Login</h1>
        <div className="w-4/5 m-auto mt-8 md:max-w-[500px]">
          <LoginForm />
        </div>
      </main>
    </div>
  );
}

export default Login;

import React from "react";
import { Link } from "react-router";
import signInBackground from "../../assets/images/signin-background.jpg";
import RivelleLogo from "../../assets/images/rivelle-logo-white.svg";
import SignInForm from "../../components/common/forms/SignInForm";

function SignIn() {
  return (
    <main className="min-h-screen flex flex-col-reverse lg:flex-row justify-between items-center gap-8 w-full p-8">
      <section className="w-full md:w-1/2">
        <div className="w-full md:w-[432px] mx-auto space-y-12">
          <div className="space-y-6 font-clashDisplay ">
            <h1 className="font-medium text-4xl text-dark-gray-2 leading-none">
              Welcome Back <span>👋</span>
            </h1>
            <p className="font-normal text-xl text-gray-2 leading-tight">
              Today is a new day. It's your day. You shape it. <br />
              Sign in to start managing your projects.
            </p>
          </div>

          <SignInForm />

          <p className="font-clashGrotesk text-lg text-center">
            Don't you have an account?{" "}
            <Link to="/signup" className="text-blue-700">
              Sign up
            </Link>
          </p>
        </div>
      </section>

      <section
        style={{ backgroundImage: `url(${signInBackground})` }}
        className="flex justify-center items-end w-full lg:w-1/2 min-h-full self-stretch max-lg:flex-1 bg-no-repeat bg-[length:40rem] md:bg-[length:100%] lg:bg-[length:88rem] bg-center pb-16 md:pb-32 rounded-3xl"
      >
        <Link to="/">
          <img
            src={RivelleLogo}
            alt="Rivelle Logo"
            className="w-60 sm:w-80 md:w-[404px]"
          />
        </Link>
      </section>
    </main>
  );
}

export default SignIn;

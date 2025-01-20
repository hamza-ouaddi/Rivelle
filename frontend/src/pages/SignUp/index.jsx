import React from "react";
import signUpBackground from "../../assets/images/signup-background.jpg";
import RivelleLogo from "../../assets/images/rivelle-logo-white.svg";
import { Link } from "react-router";
import SignUpForm from "../../components/common/forms/SignUpForm";

export default function SignUp() {
  return (
    <main className="min-h-screen flex flex-col lg:flex-row justify-between items-center gap-8 w-full p-8">
      <section
        style={{ backgroundImage: `url(${signUpBackground})` }}
        className="flex justify-center items-end w-full lg:w-1/2 min-h-full self-stretch max-lg:flex-1 bg-no-repeat bg-[length:44rem] md:bg-[length:100%] lg:bg-[length:88rem] bg-[center_-2rem] lg:bg-center pb-16 md:pb-32 rounded-3xl"
      >
        <Link to="/">
          <img
            src={RivelleLogo}
            alt="Rivelle Logo"
            className="w-60 sm:w-80 md:w-[404px]"
          />
        </Link>
      </section>

      <section className="w-full md:w-1/2">
        <div className="w-full md:w-[460px] mx-auto space-y-12">
          <div className="space-y-6 font-clashDisplay ">
            <h1 className="font-medium text-4xl text-dark-gray-2 leading-none">
              Join Rivelle <span>👋</span>
            </h1>
            <p className="font-normal text-xl text-gray-2 leading-tight">
              Start your fashion journey with us. Create an account to explore
              exclusive collections.
            </p>
          </div>

          <SignUpForm />

          <p className="font-clashGrotesk text-lg text-center">
            Already have an account?{" "}
            <Link to="/signin" className="text-blue-700">
              Sign in
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}

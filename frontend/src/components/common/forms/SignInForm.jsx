import React from "react";
import LabeledInput from "../inputs/LabeledInput";

function SignInForm() {
  return (
    <form className="space-y-6">
      <LabeledInput
        label="Email"
        type="email"
        name="email"
        placeholder="e.g. johndoe@email.com"
        required
      />

      <LabeledInput
        label="Password"
        type="password"
        name="password"
        placeholder="Enter your password"
        required
      />

      <button
        type="submit"
        className="font-clashGrotesk font-medium text-xl text-white bg-dark-gray-2 w-full py-[10px] rounded-full"
      >
        Sign in
      </button>
    </form>
  );
}

export default SignInForm;

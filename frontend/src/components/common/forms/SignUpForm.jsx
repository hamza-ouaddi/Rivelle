import React from "react";
import LabeledInput from "../inputs/LabeledInput";

function SignUpForm() {
  return (
    <form className="space-y-6">
      <LabeledInput
        label="Username"
        type="text"
        name="username"
        placeholder="e.g. john_doe"
        required
      />

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

      <LabeledInput
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        placeholder="Re-enter your password"
        required
      />

      <button
        type="submit"
        className="font-clashGrotesk font-medium text-xl text-white bg-dark-gray-2 w-full py-[10px] rounded-full"
      >
        Sign up
      </button>
    </form>
  );
}

export default SignUpForm;

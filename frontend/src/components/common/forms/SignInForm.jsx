import React, { useState } from "react";
import LabeledInput from "../inputs/LabeledInput";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../../../redux/features/auth/authApi";
import { useNavigate } from "react-router";
import { setUser } from "../../../redux/features/auth/authSlice";

function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };

    try {
      const response = await loginUser(data).unwrap();

      console.log("Signin Response: ", response);
      const { token, user } = response;
      dispatch(setUser({ user }));
      navigate("/");
    } catch (error) {
      console.log("Please provide a valid email and password");
    }
  };
  return (
    <form className="space-y-6" onSubmit={handleSignIn}>
      <LabeledInput
        label="Email"
        type="email"
        name="email"
        placeholder="e.g. johndoe@email.com"
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <LabeledInput
        label="Password"
        type="password"
        name="password"
        placeholder="Enter your password"
        onChange={(e) => setPassword(e.target.value)}
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

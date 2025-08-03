import React, { useState } from "react";
import LabeledInput from "../inputs/LabeledInput";
import { useRegisterMutation } from "../../../redux/features/auth/authApi";
import { useNavigate } from "react-router";

function SignUpForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [registerUser, { isLoading }] = useRegisterMutation();
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    const data = {
      username,
      email,
      password,
      confirmPassword,
    };

    try {
      const response = await registerUser(data).unwrap();
      navigate("/signin");
      console.log("Signup Response: ", response);
    } catch (error) {
      console.log("Registration failed");
    }
  };
  return (
    <form className="space-y-6" onSubmit={handleSignUp}>
      <LabeledInput
        label="Username"
        type="text"
        name="username"
        placeholder="e.g. john_doe"
        onChange={(e) => setUsername(e.target.value)}
        required
      />

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

      <LabeledInput
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        placeholder="Re-enter your password"
        onChange={(e) => setConfirmPassword(e.target.value)}
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

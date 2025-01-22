import User from "../models/user.model.js";

export const registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User already exists with this email." });
    }

    const user = new User({ username, email, password });

    await user.save();

    res.status(201).json({ message: "User created successfully!" });
  } catch (error) {
    console.error("Registration error: ", error.message);
    res.status(500).json({ message: "Error Registring user." });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isPasswordMatch = await user.comparePassword(password);

    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    res.status(200).json({ message: "Login successfully", user });
  } catch (error) {
    console.error("Login error: ", error.message);
    res.status(500).json({ message: "Error Logged in user." });
  }
};

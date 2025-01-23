import User from "../models/user.model.js";
import { generateToken } from "../utils/auth.utils.js";

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

    const token = generateToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.status(200).json({
      message: "Login successfully",
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
        profilePicture: user.profilePicture,
        bio: user.bio,
      },
    });
  } catch (error) {
    console.error("Login error: ", error.message);
    res.status(500).json({ message: "Error Logged in user." });
  }
};

import User from "../models/user.model.js";

export const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
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
  }
};

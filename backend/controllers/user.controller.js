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

export const logoutUser = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: true,
      sameSite: "None",
    });

    res.status(200).json({ message: "Logged out successfully!" });
  } catch (error) {
    console.error("Logout error: ", error.message);
    res.status(500).json({ message: "Error logging out user." });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    await User.findByIdAndDelete(id);

    res.status(200).json({ message: "User deleted successfully!" });
  } catch (error) {
    console.error("Delete user error: ", error.message);
    res.status(500).json({ message: "Error deleting user." });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, "id email username role")
      .select("-password")
      .sort({
        createdAt: -1,
      });
    res.status(200).json({ users });
  } catch (error) {
    console.error("Fetching all users error: ", error.message);
    res.status(500).json({ message: "Error fetching all users." });
  }
};

export const updateUserRole = async (req, res) => {
  try {
    const { id } = req.params;
    const { role } = req.body;

    const user = await User.findByIdAndUpdate(id, { role }, { new: true });

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    res.status(200).json({ message: "User role updated successfully!", user });
  } catch (error) {
    console.error("User role update error: ", error.message);
    res.status(500).json({ message: "Error updating user role." });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const { userId, username, email, profilePicture, bio } = req.body;

    if (!userId) {
      return res.status(400).json({ message: "User ID is required." });
    }

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    //To update user data
    if (username) user.username = username;
    if (email) user.email = email;
    if (profilePicture) user.profilePicture = profilePicture;
    if (bio) user.bio = bio;

    await user.save();
    res.status(200).json({
      message: "Profile updated successfully",
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
    console.error("Update profile error: ", error.message);
    res.status(500).json({ message: "Error updating user profile" });
  }
};

import User from "../models/UserSchema.js";
import Doctor from "../models/DoctorSchema.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { email, password, name, role, photo, gender } = req.body;

  try {
    let user = null;

    if (role === "patient") {
      user = User.findone({ email });
    }

    if (role === "doctor") {
      user = Doctor.findone({ email });
    }

    //check if user exist
    if (user) {
      res.status(400).json({ message: "User already exists." });
    }

    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    if (role === "patient") {
      user = new User({
        name,
        email,
        password: hashPassword,
        photo,
        gender,
        role,
      });
    }

    if (role === "doctor") {
      user = new Doctor({
        name,
        email,
        password: hashPassword,
        photo,
        gender,
        role,
      });
    }
    await user.save();

    res
      .status(200)
      .json({ success: true, message: "User created successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Internal server error,Try again" });
  }
};

export const login = async (req, res) => {
  try {
  } catch (error) {}
};

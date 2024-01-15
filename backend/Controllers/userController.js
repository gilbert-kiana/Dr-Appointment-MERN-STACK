import User from "../models/UserSchema.js";

export const updateUser = async (req, res) => {
  const id = req.params.id;

  try {
    const updateUser = await User.findByIdAndUpdate(id, {
      $set: req.body,
      new: true,
    });
    res.status(200).json({
      success: true,
      message: "Successfully Updated",
      data: updateUser,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to update" });
  }
};

export const deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    await User.findByIdAndDelete(id);
    res
      .status(200)
      .json({ success: true, message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to delete User" });
  }
};

export const singleUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findById(id).select("-password");

    res
      .status(200)
      .json({ success: true, message: "Single User Found", data: user });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch single user" });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}).select("-password");
    res.status(200).json({
      success: true,
      message: "Fetched All Users",
      data: users,
    });
  } catch (error) {
    res.status(404).json({ success: false, message: error });
  }
};

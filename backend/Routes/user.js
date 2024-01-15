import express from "express";
import {
  getAllUsers,
  singleUser,
  deleteUser,
  updateUser,
} from "../Controllers/userController.js";

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", singleUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;

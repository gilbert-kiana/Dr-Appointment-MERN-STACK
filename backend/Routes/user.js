import express from "express";
import {
  getAllUsers,
  singleUser,
  deleteUser,
  updateUser,
} from "../Controllers/userController.js";
import { authenticate, restrict } from "../auth/verifyToken.js";

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", authenticate, singleUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;

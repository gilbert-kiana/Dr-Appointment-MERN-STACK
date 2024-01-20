import express from "express";
import {
  updateDoctor,
  deleteDoctor,
  singleDoctor,
  getAllDoctor,
} from "../Controllers/doctorController.js";
import { authenticate, restrict } from "../auth/verifyToken.js";

const router = express.Router();

router.get("/", getAllDoctor);
router.get("/:id", singleDoctor);
router.put("/:id", authenticate, restrict(["doctor"]), updateDoctor);
router.delete("/:id", authenticate, restrict(["doctor"]), deleteDoctor);

export default router;

import express from "express";
import {
  updateDoctor,
  deleteDoctor,
  singleDoctor,
  getAllDoctor,
} from "../Controllers/doctorController.js";

const router = express.Router();

router.get("/", getAllDoctor);
router.get("/:id", singleDoctor);
router.put("/:id", updateDoctor);
router.delete("/:id", deleteDoctor);

export default router;

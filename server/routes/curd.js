import express from "express";
import {
  allData,
  addData,
  deleteData,
  dataById,
  updateById,
  contactInfo,
} from "../controllers/curdController.js";

const router = express.Router();

router.get("/", allData);
router.post("/", addData);
router.post("/contact", contactInfo);
router.get("/:id", dataById);
router.put("/:id", updateById);
router.delete("/:id", deleteData);

export default router;

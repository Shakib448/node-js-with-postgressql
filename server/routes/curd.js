import express from "express";
import {
  allData,
  addData,
  deleteData,
  dataById,
  updateById,
} from "../controllers/curdController.js";

const router = express.Router();

router.get("/", allData);
router.post("/", addData);
router.get("/:id", dataById);
router.put("/:id", updateById);
router.delete("/:id", deleteData);

export default router;

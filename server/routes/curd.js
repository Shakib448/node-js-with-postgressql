import express from "express";
import { allData, addData } from "../controllers/curdController.js";

const router = express.Router();

router.get("/", allData);
router.post("/", addData);

export default router;

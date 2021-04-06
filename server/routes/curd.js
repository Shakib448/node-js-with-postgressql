import express from "express";
import { allData } from "../controllers/curdController.js";

const router = express.Router();

router.get("/", allData);

export default router;

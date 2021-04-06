import asyncHandler from "express-async-handler";
import Curd from "../models/curdModel.js";

const allData = asyncHandler(async (req, res) => {
  const data = await Curd.findAll();
  if (data) {
    res.send(data);
  } else {
    res.status(404);
    throw new Error("Data is not found");
  }
});

export { allData };

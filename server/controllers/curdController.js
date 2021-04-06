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

const addData = asyncHandler(async (req, res) => {
  const { title, description, email } = req.body;
  const addList = await Curd.create({ title, description, email });
  if (addList) {
    res.send("Product added successfully");
  } else {
    res.status(503);
    throw new Error("Something went wrong");
  }
});

export { allData, addData };

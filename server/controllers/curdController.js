import asyncHandler from "express-async-handler";
import Curd from "../models/curdModel.js";
import { emailService } from "../service/emailService.js";

export const allData = asyncHandler(async (req, res) => {
  const data = await Curd.findAll();
  if (data) {
    res.send(data);
  } else {
    res.status(404);
    throw new Error("Data is not found");
  }
});

export const addData = asyncHandler(async (req, res) => {
  const { title, description, email } = req.body;
  const addList = await Curd.create({ title, description, email });
  if (addList) {
    res.send("Product added successfully");
  } else {
    res.status(503);
    res.json({ message: "Something went wrong" });
  }
});

export const dataById = asyncHandler(async (req, res) => {
  const foundById = await Curd.findByPk(req.params.id);
  if (foundById) {
    res.send(foundById);
  } else {
    res.status(503);
    res.json({ message: "Data not found" });
  }
});

export const deleteData = asyncHandler(async (req, res) => {
  const deleteList = await Curd.destroy({ where: { id: req.params.id } });
  if (deleteList) {
    res.send("Product deleted successfully");
  } else {
    res.status(503);
    res.json({ message: "Something went wrong" });
  }
});

export const updateById = asyncHandler(async (req, res) => {
  const { title, description, email } = req.body;
  const isUpdate = await Curd.findByPk(req.params.id);
  if (isUpdate) {
    isUpdate.title = title;
    isUpdate.description = description;
    isUpdate.email = email;
    const updateData = await isUpdate.save();
    res.json(updateData);
  } else {
    res.status(503);
    res.json({ message: "Something went wrong" });
  }
});

export const contactInfo = asyncHandler(async (req, res) => {
  const { name, email, subject, description } = req.body;
  console.log(name, email, subject, description);
  emailService(name, email, subject);
});

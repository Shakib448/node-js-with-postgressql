import asyncHandler from "express-async-handler";

const allData = asyncHandler(async (req, res) => {
  if (res) {
    res.send("Welcome to the postgres");
  } else {
    res.status(404);
    throw new Error("Data is not found");
  }
});

export { allData };

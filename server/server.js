import express from "express";
import "colors";
import connectDB from "./config/db.js";

const app = express();

const PORT = process.env.PORT || 5000;

// Body parser
app.use(express.json());
connectDB();
// App routes
// app.use("/api/employee", EmployeeRoutes);

app.listen(
  PORT,
  console.log(`Server is running on http://localhost:${PORT}`.yellow.bold)
);

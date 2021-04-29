import express from "express";
import "colors";
import connectDB from "./config/db.js";
import CurdRoute from "./routes/curd.js";
import userRoutes from "./routes/userRoute.js";
import { smsService } from "./service/smsService.js";

const app = express();

const PORT = process.env.PORT || 5000;

// Body parser

app.use(express.json());
connectDB();
// Service
// smsService();

// App routes
app.use("/api/curd", CurdRoute);
app.use("/api/users", userRoutes);

app.listen(
  PORT,
  console.log(`Server is running on http://localhost:${PORT}`.yellow.bold)
);

import express from "express";
import "colors";
import connectDB from "./config/db.js";
import CurdRoute from "./routes/curd.js";

const app = express();

const PORT = process.env.PORT || 5000;

// Body parser
app.use(express.json());
connectDB();
// App routes
app.use("/api/curd", CurdRoute);

app.listen(
  PORT,
  console.log(`Server is running on http://localhost:${PORT}`.yellow.bold)
);

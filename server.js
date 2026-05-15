import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";

dotenv.config();
connectDB();
const app = express();
const PORT = process.env.PORT || 5000

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend API Running");
});

app.use("/api/auth", authRoutes);
app.use("/api/task", taskRoutes);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
})
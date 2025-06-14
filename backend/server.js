import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

//routes
import authRoutes from "./routes/authRouter.js";
import notesRoutes from "./routes/notesRoute.js";

dotenv.config();
const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", authRoutes);
app.use("/api", notesRoutes);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => console.log(`server is running ${PORT}`));
  })
  .catch((err) => console.log(err));

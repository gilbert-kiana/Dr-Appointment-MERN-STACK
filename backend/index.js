import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import cors from "cors";
import authRoute from "./Routes/auth.js";
import userRoute from "./Routes/user.js";
import doctorRoute from "./Routes/doctor.js";
import reviewRoute from "./Routes/reviews.js";

dotenv.config();

const port = process.env.PORT || 8000;

const corsOptions = {
  origin: true,
};

const app = express();

app.get("/", (req, res) => {
  res.send("Server is working");
});

mongoose.set("strictQuery", false);

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongo Db Connected");
  } catch (error) {
    console.log("failed");
  }
};

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/doctors", doctorRoute);
app.use("/api/v1/reviews", reviewRoute);

app.listen(port, () => {
  connectDb();
  console.log(`Server running on port ${port}`);
});

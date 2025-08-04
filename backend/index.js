import express from 'express';
import connectToDb from './dbConnect/db.js';
import authRouter from './routes/authRoutes.js';
import cookieParser from 'cookie-parser';
import cors from "cors";

const app = express();

app.use(cors({
  origin: "https://internship-1-l5aa.onrender.com",
  credentials: true    // JavaScript boolean is lowercase
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));  // use express.urlencoded here
app.use(cookieParser());

connectToDb();

app.get("/", (req, res) => {
  res.json("hello");
});

app.use("/api/v1", authRouter);

// Generic Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

app.listen(8000, () => {
  console.log("Server is listening on port 8000");
});

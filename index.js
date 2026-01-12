import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRouter from "./routes/authRoute.js";
import post_router from "./routes/postRoute.js";
const app = express();

app.use(express.json());

dotenv.config();

app.use(cors({
  origin: process.env.FRONT_URL,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

const MONGO_URI = process.env.MONGO_URL;
console.log("hehe")
mongoose.connect(MONGO_URI)
.then(() => console.log("db is connected"))
.catch((err) => console.log(err))



app.use('/auth' , authRouter);
app.use('/auth' , post_router);


app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
  });

  

const PORT = process.env.PORT || 3001;

app.listen(PORT , console.log(`server is running on http://localhost:${PORT}`));
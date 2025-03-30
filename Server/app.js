import express from "express";
import user from "./controllers/user.js";
import connectDB from "./db/database.js";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import Host from "./controllers/Host.js";
import dotenv from "dotenv";
import cors from "cors";
const app = express();
dotenv.config();
connectDB();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
const PORT = process.env.PORT || 3000;

app.use("/api/v1/user", user);
app.use("/api/v1/host", Host);

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});

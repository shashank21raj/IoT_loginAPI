import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./routes/user.js";
import ejsLayouts from "express-ejs-layouts";
import path from "path";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

// app.use(ejsLayouts);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.set("view engine", "ejs");
app.set("views", path.join(path.resolve(),"views"));

app.use("/user", userRoutes);
app.get("/", (req, res) => {
  res.render("register");
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
      console.log(`Database Connection established`);
    })
  )
  .catch((err) => console.log(err));

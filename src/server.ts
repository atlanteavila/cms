import express from "express";
import passport from "passport";
import dbConnect from "./config/dbConnect";
import pageRoutes from "./routes/pages";
import authRoutes from "./routes/auth";
import "./config/passport";

const app = express();

dbConnect();

app.use(express.json());
app.use(passport.initialize());

app.use("/api/pages", pageRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

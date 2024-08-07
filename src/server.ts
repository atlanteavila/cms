import express from "express";
import passport from "passport";
import dbConnect from "./config/dbConnect";
import pageRoutes from "./routes/pages";
import authRoutes from "./routes/auth";
import "./config/passport";

// Import the cors package
import cors from "cors";

const app = express();

dbConnect();

// Configure CORS to allow requests from any origin
app.use(cors());

// Use JSON middleware
app.use(express.json());

// Initialize Passport.js
app.use(passport.initialize());

// Define your routes
app.use("/api/pages", pageRoutes);
app.use("/api/auth", authRoutes);

// Define the port
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

import express from "express";
import dbConnect from "./src/config/dbConnect";
import pageRoutes from "./src/routes/pages";

const app = express();

dbConnect();

app.use(express.json());

app.use("/api/pages", pageRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

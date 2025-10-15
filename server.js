import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import contactsRoutes from "./backend/routes/contacts.routes.js";
import projectRoutes from "./backend/routes/projects.routes.js";
app.use("/api/projects", projectRoutes);


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
app.use("/api/contacts", contactsRoutes);
app.use("/api/projects", projectsRoutes); // if you have projects route

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Connected"))
.catch((err) => console.log(err));

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

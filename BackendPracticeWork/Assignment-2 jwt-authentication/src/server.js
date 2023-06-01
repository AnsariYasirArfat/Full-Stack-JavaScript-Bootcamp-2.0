const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./controllers/authController");

const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost/your-database-name", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database");
    // Start the server after successful database connection
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to the database:", error);
  });

// Routes
app.use("/api/auth", authRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

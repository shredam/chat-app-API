const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/auth.routes");
const messageRoutes = require("./routes/message.routes");
const userRoutes = require("./routes/user.routes");

const connectToMongoDb = require("./db/connectToMongoDb");
const { app, server } = require("./socket/socket");

const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

server.listen(PORT, () => {
  connectToMongoDb();
  console.log(`Server running on port: ${PORT}`);
});

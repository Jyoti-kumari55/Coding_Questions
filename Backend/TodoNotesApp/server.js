require("./db/dbConnect");
const mongoose = require("mongoose");
const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express()

const authRoutes = require("./routes/auth");
const notesRoutes = require("./routes/todoNotes");
const userRoutes = require("./routes/user");

app.use(express.json());
app.use(cookieParser());
app.use(
    express.urlencoded({
      extended: true,
    })
  );
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Hello, Todo Notes App!");
  });

app.use("/api/auth", authRoutes);
app.use("/api/todo", notesRoutes);
app.use("/api/user", userRoutes);
const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server of Todo Note app is running on ${PORT}`);
})
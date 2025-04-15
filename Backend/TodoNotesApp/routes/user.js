const router = require("express").Router();
const authenticateToken = require("../config.js/verifyToken");
const Notes = require("../models/Notes");
const User = require("../models/User");

//Get a user by id
router.get("/getUser", authenticateToken, async (req, res) => {
  try {
    // const userId = req.params.userId;
    const loggedInUser = req.user;

    const isUser = await User.findOne({ _id: loggedInUser });

    if (!isUser) {
      return res.status(401).json({ message: "User not found." });
    }

    const userNotes = await Notes.find({ userId: loggedInUser }).sort({
      isPinned: -1,
    });
    return res
      .status(200)
      .json({
        message: `Hello ${isUser.name}!`,
        details: isUser,
        notes: userNotes,
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: true,
      message: "Failed to fetch a user.",
      details: error.message,
    });
  }
});

//Update a User
router.put("/updateUser", authenticateToken, async (req, res) => {
  try {
    const loggedInUser = req.user;
    const { name, email, username, password } = req.body;

    const isUser = await User.findById(loggedInUser);
    if (!isUser) {
      return res.status(404).json({ error: true, message: "User not found." });
    }

    if (name) isUser.name = name;
    if (email) isUser.email = email;
    if (password) isUser.password = password;

    const updatedUser = await isUser.save();
    return res
      .status(200)
      .json({ error: false, message: "User updated successfully." });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: true,
      message: "Failed to update user.",
      details: error.message,
    });
  }
});
//Delete a user
router.delete("/deleteUser", authenticateToken, async (req, res) => {
  try {
    const loggedInUser = req.user;

    const isUser = await User.findById(loggedInUser);
    if (!isUser) {
      return res.status(404).json({ error: true, message: "User not found." });
    }

    await Notes.deleteMany({ userId: loggedInUser });
    await User.findByIdAndDelete(loggedInUser);

    return res.status(200).json({
      error: false,
      message: "User and all their notes deleted successfully.",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: true,
      message: "Failed to delete user.",
      details: error.message,
    });
  }
});
module.exports = router;

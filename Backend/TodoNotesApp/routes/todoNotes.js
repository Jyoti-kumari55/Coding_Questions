const router = require("express").Router();
const User = require("../models/User");
const Notes = require("../models/Notes");
const authenticateToken = require("../config.js/verifyToken");

// Create a Note
router.post("/addNote", authenticateToken, async (req, res) => {
  try {
    const { title, content, tags } = req.body;
    const loggedInUser = req.user;
    // console.log("999", loggedInUser)

    if (!title || !content) {
      return res
        .status(400)
        .json({ message: "Title and content are required for notes." });
    }

    const note = new Notes({
      title,
      content,
      tags: tags || [],
      userId: loggedInUser,
    });

    const savedNote = await note.save();
    return res.status(200).json({
      error: false,
      message: "Note added successfully.",
      note: savedNote,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Failed to add notes.", details: error.message });
  }
});

//Update a Note
router.put("/editNote/:noteId", authenticateToken, async (req, res) => {
  try {
    const noteId = req.params.noteId;
    const { title, content, tags, isPinned } = req.body;
    const loggedInUser = req.user;

    if (!title && !content && !tags) {
      return res
        .status(400)
        .json({ error: true, message: "No changes provided!!" });
    }

    const note = await Notes.findOne({ _id: noteId, userId: loggedInUser });

    if (!note) {
      return res.status(404).json({ error: true, message: "Note not found." });
    }

    if (title) note.title = title;
    if (content) note.content = content;
    if (tags) note.tags = tags;
    if (isPinned) note.isPinned = isPinned;

    const updatedNote = await note.save();

    return res.status(200).json({
      error: false,
      message: "Note updated successfully",
      note: updatedNote,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Failed to update a note.", details: error.message });
  }
});

// Get all notes by a user
router.get("/getNotes", authenticateToken, async (req, res) => {
  try {
    const loggedInUser = req.user;

    const notes = await Notes.find({ userId: loggedInUser }).sort({
      isPinned: -1,
    });
    return res.status(200).json({
      error: false,
      message: "Notes fetched successfully.",
      Notes: notes,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: true,
      message: "Failed to fetch notes.",
      details: error.message,
    });
  }
});

//Delete a note by a noteId
router.delete("/deleteNote/:noteId", authenticateToken, async (req, res) => {
  try {
    const noteId = req.params.noteId;
    const loggedInUser = req.user;

    const note = await Notes.findOne({ _id: noteId, userId: loggedInUser });

    if (!note) {
      return res.status(400).json({ error: true, message: "Notes not found." });
    }

    const deletedNote = await Notes.deleteOne({
      _id: noteId,
      userId: loggedInUser,
    });

    return res
      .status(200)
      .json({
        error: false,
        message: "Note deleted successfully.",
        note: deletedNote,
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: true,
      message: "Failed to delete a note.",
      details: error.message,
    });
  }
});

module.exports = router;

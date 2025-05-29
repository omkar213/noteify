import Note from "../models/Note.js";

export const createNote = async (req, res) => {
  try {
    const { title, details, category } = req.body;

    if (!title || !details)
      return res
        .status(400)
        .json({ message: "Title & description are required" });

    const newNote = new Note({
      title,
      details,
      category,
      userId: req.user.id,
    });

    await newNote.save();

    res.status(200).json({ message: "Note created Succefully", note: newNote });
  } catch (error) {
    res.status(500).json({ message: "Failed to create note", error });
  }
};

export const getNotes = async (req, res) => {
  try {
    if (!req.user || !req.user.id) {
      return res
        .status(401)
        .json({ message: "Unauthorized: User ID not found" });
    }
    const userId = req.user.id;
    const userNotes = await Note.find({ userId }).sort({ createdAt: -1 });
    res.status(200).json({ notes: userNotes });
  } catch (error) {
    console.error("Error fetching notes:", error);
    res.status(500).json({ message: "Failed to fetch notes", error });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const noteId = req.params.id;

    if (!noteId) {
      return res.status(400).json({
        message: "Note Id is required",
      });
    }

    const deletedNote = await Note.findByIdAndDelete(noteId);

    if (!deletedNote) {
      return res.status(404).json({ message: "Note not found" });
    }

    return res
      .status(200)
      .json({ message: "Note delete succefully", deletedNote });
  } catch (error) {
    return res.status(500).json({ message: "Failed to delete the Note" });
  }
};

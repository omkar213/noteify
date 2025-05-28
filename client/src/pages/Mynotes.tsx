import { useEffect, useState } from "react";
import NoteCard from "../components/NoteCard";
import { deleteNoteByID, getNotes } from "../services";
import type { Note } from "../types";
import { useSnackbarStore } from "../store/store";

const Mynotes = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const showSnackbar = useSnackbarStore((state) => state.showSnackbar);

  useEffect(() => {
    const fetchNotes = async () => {
      const data = await getNotes();
      setNotes(data);
    };
    fetchNotes();
  }, []);

  //deletion here
  const handleDeleteNote = async (id: string) => {
    try {
      const data = await deleteNoteByID(id);
      showSnackbar(data?.message || "Note delete successfully", "success");
      setNotes((prev) => prev.filter((note) => note._id !== id));
    } catch (error) {
      showSnackbar("Failed to delete note", "error");
      console.log(error);
    }
  };

  return (
    <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-6 lg:grid-cols-3 lg:gap-x-8">
      {Array.isArray(notes) &&
        notes?.map((note) => (
          <NoteCard
            key={note?._id}
            note={note}
            onDelete={() => handleDeleteNote(note._id)}
          />
        ))}
    </div>
  );
};

export default Mynotes;

import { useEffect, useState } from "react";
import NoteCard from "../components/NoteCard";
import { getNotes } from "../services";
import type { Note } from "../types";

const Mynotes = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const data = await getNotes();
      setNotes(data);
    };
    fetchNotes();
  }, []);
  return (
    <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-6 lg:grid-cols-3 lg:gap-x-8">
      {Array.isArray(notes) &&
        notes?.map((note) => <NoteCard key={note?._id} note={note} />)}
    </div>
  );
};

export default Mynotes;

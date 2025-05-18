import NoteCard from "../components/NoteCard";

const Mynotes = () => {
  return (
    <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-6 lg:grid-cols-3 lg:gap-x-8">
      <NoteCard />
      <NoteCard />
    </div>
  );
};

export default Mynotes;

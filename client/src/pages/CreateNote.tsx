import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import CustomButton from "../components/ui/CustomButton";
import { categories } from "../constants/index";
import { useState } from "react";
import type { NoteData } from "../types";
import { createNote } from "../services";
import { useNavigate } from "react-router-dom";

const defaultValues: NoteData = {
  title: { value: "", error: null },
  details: { value: "", error: null },
  category: { value: "", error: null },
};

const CreateNote = () => {
  const [note, setNote] = useState(defaultValues);

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNote((prev) => ({
      ...prev,
      [name]: {
        value,
        error: null,
      },
    }));
  };

  const handleValidation = (): boolean => {
    const updatedNote: NoteData = { ...note };
    let isValid = false;

    if (!note.title.value.trim()) {
      updatedNote.title.error = "Title is required";
      isValid = true;
    }

    if (!note.details.value.trim()) {
      updatedNote.details.error = "Details are required";
      isValid = true;
    }

    if (!note.category.value.trim()) {
      updatedNote.category.error = "Category is required";
      isValid = true;
    }

    setNote(updatedNote);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const hasErrors = handleValidation();
    console.log(hasErrors);
    if (!hasErrors) {
      try {
        const res = await createNote(note);
        if (res?.note) {
          setNote(defaultValues);
          navigate("/mynotes");
        }
      } catch (error) {
        console.error("Error creating note:", error);
      }
    }
  };

  return (
    <div className="flex flex-col gap-5 md:gap-6">
      <h1 className="text-3xl font-semibold">Create a New Note</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 md:gap-6">
        <TextField
          fullWidth
          label="Note Title*"
          name="title"
          variant="outlined"
          value={note.title.value}
          onChange={handleChange}
          error={!!note.title.error}
          helperText={note.title.error ?? ""}
        />
        <TextField
          fullWidth
          label="Details*"
          name="details"
          variant="outlined"
          rows={6}
          value={note.details.value}
          onChange={handleChange}
          multiline
          error={!!note.details.error}
          helperText={note.details.error ?? ""}
        />
        <FormControl error={!!note.category.error}>
          <FormLabel id="note-category-label">Note Category</FormLabel>
          <RadioGroup
            aria-labelledby="note-category-label"
            name="category"
            value={note.category.value}
            onChange={handleChange}
          >
            {categories.map((cat) => (
              <FormControlLabel
                key={cat.value}
                value={cat.value}
                control={<Radio />}
                label={cat.label}
              />
            ))}
          </RadioGroup>
          {note.category.error && (
            <p className="text-sm text-red-500 mt-1">{note.category.error}</p>
          )}
        </FormControl>

        <CustomButton type="submit" className="max-w-28">
          Submit
        </CustomButton>
      </form>
    </div>
  );
};

export default CreateNote;

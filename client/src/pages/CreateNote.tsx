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

const CreateNote = () => {
  return (
    <div className="flex flex-col gap-5 md:gap-6">
      <h1 className="text-3xl font-semibold">Create a New Note</h1>
      <form className="flex flex-col gap-5 md:gap-6">
        <TextField
          fullWidth
          label="Note Title*"
          name="title"
          variant="outlined"
        />
        <TextField
          fullWidth
          label="Details*"
          name="title"
          variant="outlined"
          rows={6}
          multiline
        />
        <FormControl>
          <FormLabel id="note-category-label">Note Category</FormLabel>
          <RadioGroup aria-labelledby="note-category-label" name="category">
            {categories.map((cat) => (
              <FormControlLabel
                key={cat.value}
                value={cat.value}
                control={<Radio />}
                label={cat.label}
              />
            ))}
          </RadioGroup>
        </FormControl>

        <CustomButton type="submit" className="max-w-28">
          Submit
        </CustomButton>
      </form>
    </div>
  );
};

export default CreateNote;

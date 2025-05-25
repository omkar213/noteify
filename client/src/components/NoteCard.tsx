import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Chip,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import type { Note } from "../types";

const NoteCard = ({ note }: { note: Note }) => {
  return (
    <Card>
      <CardHeader
        className="!items-start"
        avatar={<Avatar>{note.title.charAt(0).toUpperCase()}</Avatar>}
        title={
          <div className="flex flex-col items-start gap-2">
            <Typography>{note.title}</Typography>
            <Chip label={note.category} />
          </div>
        }
        action={
          <IconButton>
            <DeleteIcon />
          </IconButton>
        }
      />
      <CardContent>
        <Typography>{note.details}</Typography>
      </CardContent>
    </Card>
  );
};

export default NoteCard;

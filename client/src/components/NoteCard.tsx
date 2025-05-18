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

const NoteCard = () => {
  return (
    <Card>
      <CardHeader
        className="!items-start"
        avatar={<Avatar>M</Avatar>}
        title={
          <div className="flex flex-col items-start gap-2">
            <Typography className="">Note 1</Typography>
            <Chip label="money" />
          </div>
        }
        action={
          <IconButton>
            <DeleteIcon />
          </IconButton>
        }
      ></CardHeader>
      <CardContent>
        <Typography>My First Note</Typography>
      </CardContent>
    </Card>
  );
};

export default NoteCard;

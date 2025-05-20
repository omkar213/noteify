import { TextField } from "@mui/material";
import type { TextFieldProps } from "@mui/material/TextField";

type PasswordInputProps = TextFieldProps;

const PasswordInput = (props: PasswordInputProps) => {
  return (
    <TextField label="Password*" variant="outlined" fullWidth {...props} />
  );
};

export default PasswordInput;

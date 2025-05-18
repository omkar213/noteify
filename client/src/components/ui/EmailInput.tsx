import { TextField } from "@mui/material";
import type { TextFieldProps } from "@mui/material";

type EmailInputProps = TextFieldProps;

const EmailInput = (props: EmailInputProps) => {
  return (
    <TextField
      label="Email*"
      type="email"
      variant="outlined"
      {...props}
      fullWidth
    />
  );
};

export default EmailInput;

import { Button } from "@mui/material";
import type { ButtonProps } from "@mui/material";

type customButtonProps = ButtonProps;

const CustomButton = ({ children, ...props }: customButtonProps) => {
  return (
    <Button variant="contained" color="primary" {...props}>
      {children}
    </Button>
  );
};

export default CustomButton;

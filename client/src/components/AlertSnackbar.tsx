import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import type { AlertProps } from "@mui/material/Alert";
import { useSnackbarStore } from "../store/store";
import React from "react";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AlertSnackbar = () => {
  const { open, message, severity, closeSnackbar } = useSnackbarStore();
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={closeSnackbar}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert onClose={closeSnackbar} severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default AlertSnackbar;

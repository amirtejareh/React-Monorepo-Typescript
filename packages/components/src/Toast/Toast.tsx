import React from "react";
import Snackbar from "@mui/material/Snackbar";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface SnackbarOrigin {
  vertical: "top" | "bottom";
  horizontal: "left" | "center" | "right";
}

type Props = {
  openToast: boolean;
  setOpenToast: React.Dispatch<React.SetStateAction<boolean>>;
  snackbarOrigin?: SnackbarOrigin;
  timer?: number;
  message: string;
};

export default (props: Props) => {
  const { openToast, timer, snackbarOrigin, message, setOpenToast } = props;

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenToast(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <Snackbar
      anchorOrigin={snackbarOrigin}
      open={openToast}
      onClose={handleClose}
      message={message}
      autoHideDuration={timer}
      action={action}
    />
  );
};

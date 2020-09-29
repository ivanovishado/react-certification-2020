import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useAuth } from "providers/Auth/Auth";
import { storage } from "utils/storage";
import { AUTH_STORAGE_KEY } from "utils/constants";

interface Props {
  open: boolean;
  handleClose: () => void;
}

export default function LogInModal({ open, handleClose }: Props) {
  const { setIsLoggedIn } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (username === "wizeline" && password === "Rocks!") {
      setIsLoggedIn(true);
      storage.set(AUTH_STORAGE_KEY, "true");
      handleClose();
    } else {
      console.error("Chale");
    }
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Log In</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter your credentials to log in.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Username"
            type="text"
            fullWidth
            value={username}
            onChange={handleUsernameChange}
          />
          <TextField
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            value={password}
            onChange={handlePasswordChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Log In
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

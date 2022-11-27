import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
       Recuperează parola
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Ti-ai uitat parola?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Intodu adresa de email si vei putea reseta parola
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Adresa de email "
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Inchide</Button>
          <Button onClick={handleClose}>Trimite</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

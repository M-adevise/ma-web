import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { FC, useState } from 'react';
import { EditEventDialogProps } from './types';

export const EditEventDialog: FC<EditEventDialogProps> = ({ event, isOpen, close }) => {
  const [title, setTitle] = useState(event.title);
  const [start, setStart] = useState(event.start);
  const [end, setEnd] = useState(event.end);

  const handleSave = () => {
    close();
  };

  return (
    <Dialog open={isOpen} onClose={close}>
      <DialogTitle id='form-dialog-title'>Edit Event</DialogTitle>
      <DialogContent>
        <TextField autoFocus margin='dense' label='Event Title' type='text' fullWidth value={title} onChange={e => setTitle(e.target.value)} />
        <TextField
          margin='dense'
          label='Start Date'
          type='datetime-local'
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          value={start.toISOString().slice(0, 16)}
          onChange={e => setStart(new Date(e.target.value))}
        />
        <TextField
          margin='dense'
          label='End Date'
          type='datetime-local'
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          value={end.toISOString().slice(0, 16)}
          onChange={e => setEnd(new Date(e.target.value))}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={close} color='primary'>
          Cancel
        </Button>
        <Button onClick={handleSave} color='primary'>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

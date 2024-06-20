import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { FC } from 'react';
import { FormProvider } from 'react-hook-form';
import { useCalendarEventForm } from '../../common/resolver';
import { RHFInput } from '../../components';
import { EditEventDialogProps } from './types';

const DateTimeLocalProps = {
  shrink: true,
};

export const EditEventDialog: FC<EditEventDialogProps> = ({ event, isOpen, close }) => {
  const form = useCalendarEventForm(event);
  const handleSave = () => {
    console.log(form.watch());
    close();
  };

  return (
    <Dialog open={isOpen} onClose={close}>
      <DialogTitle id='form-dialog-title'>Edit Event</DialogTitle>
      <DialogContent>
        <FormProvider {...form}>
          <RHFInput name='title' autoFocus margin='dense' fullWidth label='Event Title' />
          <RHFInput InputLabelProps={DateTimeLocalProps} name='start' autoFocus margin='dense' fullWidth label='Start Date' type='datetime-local' />
          <RHFInput InputLabelProps={DateTimeLocalProps} name='end' autoFocus margin='dense' fullWidth label='End Date' type='datetime-local' />
        </FormProvider>
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

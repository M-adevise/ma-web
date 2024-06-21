import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import axios from 'axios';
import { FC } from 'react';
import { FormProvider } from 'react-hook-form';
import { useCalendarEventForm } from '../../common/resolver';
import { RHFAutocompleteBackend, RHFInput } from '../../components';
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
          <RHFInput name='summary' multiline minRows={4} autoFocus margin='dense' fullWidth label='Event Title' />
          <RHFInput InputLabelProps={DateTimeLocalProps} name='start' autoFocus margin='dense' fullWidth label='Start Date' type='datetime-local' />
          <RHFInput InputLabelProps={DateTimeLocalProps} name='end' autoFocus margin='dense' fullWidth label='End Date' type='datetime-local' />
          <RHFAutocompleteBackend<any>
            name='participant'
            getLabel={option => (option as any).title}
            fetcher={async (input: string) => (await axios.get('https://dummyjson.com/products/search?q=' + input)).data.products}
          />
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

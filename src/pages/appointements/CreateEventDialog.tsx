import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { useTranslate } from '@refinedev/core';
import { FC } from 'react';
import { FormProvider } from 'react-hook-form';
import { useCalendarEventForm } from '../../common/resolver';
import { CrupdateEventForm } from './CrupdateEventForm';
import { EditEventDialogProps } from './types';

export const CreateEventDialog: FC<EditEventDialogProps> = ({ event, isOpen, close }) => {
  const form = useCalendarEventForm(event);
  const translate = useTranslate();
  const handleSave = () => {
    close();
  };
  return (
    <Dialog open={isOpen} onClose={close}>
      <DialogTitle id='form-dialog-title'>{translate('appointments.title.creationDialog')}</DialogTitle>
      <DialogContent>
        <FormProvider {...form}>
          <form>
            <CrupdateEventForm />
          </form>
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

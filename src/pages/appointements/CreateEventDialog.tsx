import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { useCreate, useTranslate } from '@refinedev/core';
import { FC } from 'react';
import { FormProvider } from 'react-hook-form';
import { v4 as v4UuidGenerator } from 'uuid';
import { useCalendarEventForm } from '../../common/resolver';
import { Button } from '../../components';
import { CrupdateEventForm } from './CrupdateEventForm';
import { EditEventDialogProps } from './types';

export const CreateEventDialog: FC<EditEventDialogProps> = ({ isOpen, close }) => {
  const form = useCalendarEventForm();
  const { mutateAsync: createCalendarEvent, isLoading } = useCreate();
  const translate = useTranslate();

  const handleSave = form.handleSubmit(async data => {
    const newEventId = v4UuidGenerator();
    await createCalendarEvent({ resource: 'appointments', values: { ...data, id: newEventId }, meta: { id: newEventId } });
    close();
  });

  return (
    <Dialog open={isOpen} onClose={close}>
      <form onSubmit={handleSave}>
        <DialogTitle id='form-dialog-title'>{translate('appointments.title.creationDialog')}</DialogTitle>
        <DialogContent>
          <FormProvider {...form}>
            <CrupdateEventForm />
          </FormProvider>
        </DialogContent>
        <DialogActions>
          <Button onClick={close} color='primary' label='Annuler' />
          <Button isLoading={isLoading} type='submit' label='Enregistrer' />
        </DialogActions>
      </form>
    </Dialog>
  );
};

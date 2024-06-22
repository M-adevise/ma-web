import { Button, Drawer, Stack, Typography } from '@mui/material';
import { useUpdate } from '@refinedev/core';
import { FC } from 'react';
import { FormProvider } from 'react-hook-form';
import { useCalendarEventForm } from '../../common/resolver';
import { CrupdateEventForm } from './CrupdateEventForm';
import { EditEventDialogProps } from './types';

export const EditEventDrawer: FC<EditEventDialogProps> = ({ event, isOpen, close }) => {
  const form = useCalendarEventForm(event);
  const { mutate: editCalendarEvent } = useUpdate();

  const handleSave = form.handleSubmit(data => {
    editCalendarEvent({ resource: 'appointments', values: data, id: event.id });
  });

  return (
    <Drawer anchor='right' open={isOpen} onClose={close}>
      <Stack p={2} minWidth={500}>
        <Stack direction='row' py={2} justifyContent='space-between'>
          <Typography variant='h5'>Rendez vous</Typography>
          <Button variant='contained'>Rejoindre le rendez-vous</Button>
        </Stack>
        <FormProvider {...form}>
          <CrupdateEventForm />
        </FormProvider>
      </Stack>
    </Drawer>
  );
};

import { useCreate } from '@refinedev/core';
import axios from 'axios';
import { FC } from 'react';
import { v4 as v4UuidGenerator } from 'uuid';
import { useCalendarEventForm } from '../../common/resolver';
import { Button, RHFAutocompleteBackend, RHFInput } from '../../components';

const DateTimeLocalProps = {
  shrink: true,
};

export const CrupdateEventForm: FC = () => {
  const form = useCalendarEventForm();
  const { mutate: createCalendarEvent, isLoading } = useCreate();

  const handleSave = form.handleSubmit(data => {
    createCalendarEvent({ resource: 'appointments', values: data, meta: { id: v4UuidGenerator() } });
  });

  return (
    <form onSubmit={handleSave}>
      <RHFInput InputLabelProps={DateTimeLocalProps} name='start' autoFocus margin='dense' fullWidth label='Start Date' type='datetime-local' />
      <RHFInput InputLabelProps={DateTimeLocalProps} name='end' autoFocus margin='dense' fullWidth label='End Date' type='datetime-local' />
      <RHFInput name='summary' multiline minRows={4} autoFocus margin='dense' fullWidth label='Event Title' />
      <RHFAutocompleteBackend<any>
        name='participant'
        getLabel={option => (option as any).title}
        //TODO: get participants from backend
        fetcher={async (input: string) => (await axios.get('https://dummyjson.com/products/search?q=' + input)).data.products}
      />
      <Button isLoading={isLoading} label='Enregistrer' />
    </form>
  );
};

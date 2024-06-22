import axios from 'axios';
import { FC } from 'react';
import { RHFAutocompleteBackend, RHFInput } from '../../components';

const DateTimeLocalProps = {
  shrink: true,
};

export const CrupdateEventForm: FC = () => {
  return (
    <>
      <RHFInput InputLabelProps={DateTimeLocalProps} name='start' autoFocus margin='dense' fullWidth label='Start Date' type='datetime-local' />
      <RHFInput InputLabelProps={DateTimeLocalProps} name='end' autoFocus margin='dense' fullWidth label='End Date' type='datetime-local' />
      <RHFInput name='summary' multiline minRows={4} autoFocus margin='dense' fullWidth label='Event Title' />
      <RHFAutocompleteBackend<any>
        name='participant'
        getLabel={option => (option as any).title}
        fetcher={async (input: string) => (await axios.get('https://dummyjson.com/products/search?q=' + input)).data.products}
      />
    </>
  );
};

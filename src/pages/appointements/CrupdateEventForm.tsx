import { FC } from 'react';
import { RHFAutocompleteBackend, RHFInput } from '../../components';
import { Doctor, doctorProvider } from '../../providers';

const DateTimeLocalProps = {
  shrink: true,
};

export const CrupdateEventForm: FC = () => {
  return (
    <>
      <RHFInput InputLabelProps={DateTimeLocalProps} name='start' autoFocus margin='dense' fullWidth label='Start Date' type='datetime-local' />
      <RHFInput InputLabelProps={DateTimeLocalProps} name='end' autoFocus margin='dense' fullWidth label='End Date' type='datetime-local' />
      <RHFInput name='title' multiline minRows={4} autoFocus margin='dense' fullWidth label='Event Title' />
      <RHFAutocompleteBackend<Doctor>
        name='participant'
        getLabel={({ firstName, lastName }) => `${firstName} ${lastName}`}
        fetcher={(input: string) => doctorProvider.getAllBy({}, { firstName: input, lastName: input })}
      />
    </>
  );
};

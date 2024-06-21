import { Autocomplete, CircularProgress, TextField } from '@mui/material';
import { debounce } from '@mui/material/utils';
import { useResource, useTranslate } from '@refinedev/core';
import { useMutation } from '@tanstack/react-query';
import React, { ComponentProps, useEffect, useMemo, useState } from 'react';
import { useFormContext } from 'react-hook-form';

interface AutocompleteBackendProps<T> {
  fetcher: (input: string) => Promise<T[]>;
  getLabel: (option: T) => string;
  name: string;
  inputProps?: ComponentProps<typeof TextField>;
}

export const RHFAutocompleteBackend = <T,>({ fetcher, getLabel, inputProps, name }: AutocompleteBackendProps<T>) => {
  const [open, setOpen] = useState(false);
  const { mutate, isLoading, data: options } = useMutation<T[], Error, string>(input => fetcher(input));

  const { setValue } = useFormContext();

  useEffect(() => {
    mutate('');
  }, []);

  const debouncedFetch = useMemo(() => debounce((value: string) => mutate(value), 500), [mutate]);

  const handleInputChange = (_event: React.ChangeEvent<{}>, value: string) => {
    debouncedFetch(value);
  };

  const translate = useTranslate();
  const { resource } = useResource();

  return (
    <Autocomplete<T>
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      onInputChange={handleInputChange}
      options={options || []}
      getOptionLabel={getLabel}
      loading={isLoading}
      onChange={(_event, value) => setValue(name, value)}
      renderInput={params => (
        <TextField
          {...params}
          {...inputProps}
          label={translate(`${translate(`${`${resource?.name}.inputs.${name}`}`)}`)}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {isLoading ? <CircularProgress color='inherit' size={20} /> : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
};


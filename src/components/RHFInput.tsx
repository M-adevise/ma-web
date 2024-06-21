import { TextField } from '@mui/material';
import { useResource, useTranslate } from '@refinedev/core';
import { ComponentProps, FC } from 'react';
import { useFormContext } from 'react-hook-form';

interface RHFInputProps extends ComponentProps<typeof TextField> {
  name: string;
}

export const RHFInput: FC<RHFInputProps> = ({ name, ...props }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const translate = useTranslate();
  const error = errors[name];
  const { resource } = useResource();

  return (
    <TextField
      {...props}
      {...register(name)}
      label={translate(`${resource?.name}.inputs.${name}`)}
      error={!!error}
      helperText={(error && (error.message as string)) || ''}
      size='small'
    />
  );
};

import { CircularProgress, Button as MuiButton } from '@mui/material';
import { ComponentProps, FC } from 'react';

interface ButtonProps extends ComponentProps<typeof MuiButton> {
  isLoading: boolean;
  label: string;
}

export const Button: FC<ButtonProps> = ({ isLoading, label, ...othersProps }) => {
  return (
    <MuiButton {...othersProps} endIcon={isLoading ? <CircularProgress color='inherit' size={20} /> : null}>
      {label}
    </MuiButton>
  );
};

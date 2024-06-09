import { PropsWithChildren, useMemo, useState } from 'react';
import { RefineListView } from '../../components';
import { Grid } from '@mui/material';
import ImgMediaCard from '../../components/card/card';
import { PatientShow } from './show';

export const PatientList = ({ children }: PropsWithChildren) => {
  const [isOpen, setOpen] = useState(false);
  const open = () => {
    setOpen(true);
  };

  const close = () => {
    setOpen(false);
  };

  return (
    <>
      <RefineListView breadcrumb={false}>
        <PatientShow isOpen={isOpen} close={close} itinerary={null} />
        <Grid container direction='row' spacing={2} alignItems='stretch'>
          <Grid item>
            <ImgMediaCard open={open} />
          </Grid>
        </Grid>
      </RefineListView>
    </>
  );
};

import { PropsWithChildren, useMemo, useState } from 'react';
import { RefineListView } from '../../components';
import { Grid } from '@mui/material';
import ImgMediaCard from '../../components/card/card';

export const PatientList = ({ children }: PropsWithChildren) => {
  return (
    <>
      <RefineListView breadcrumb={false}>
        <Grid container direction='row' spacing={2} alignItems='stretch'>
          <Grid item>
            <ImgMediaCard />
          </Grid>
          <Grid item>
            <ImgMediaCard />
          </Grid>
          <Grid item>
            <ImgMediaCard />
          </Grid>
          <Grid item>
            <ImgMediaCard />
          </Grid>
          <Grid item>
            <ImgMediaCard />
          </Grid>
          <Grid item>
            <ImgMediaCard />
          </Grid>
        </Grid>
      </RefineListView>
    </>
  );
};

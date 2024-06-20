import { Box } from '@mui/material';
import { FC } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import pdffile from '../../assets/cv.pdf';
import { Drawer, DrawerHeader } from '../../components';
import { Itinerary } from '../../providers';

pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.js', import.meta.url).toString();

interface PatientShowProps {
  isOpen: boolean;
  close: () => void;
  itinerary: Itinerary | null;
}

export const PatientShow: FC<PatientShowProps> = ({ close, isOpen, itinerary }) => {
  return (
    <Drawer
      open={isOpen}
      onClose={close}
      anchor='right'
      PaperProps={{
        sx: {
          width: '100%',
          maxWidth: '1000px',
        },
      }}>
      <DrawerHeader onCloseClick={close} title='Medical Document' />
      <Box alignItems='center' padding={2}>
        <Document file={pdffile}>
          <Page width={955} pageNumber={1} />
        </Document>
      </Box>
    </Drawer>
  );
};

import { Box, Stack } from '@mui/material';
import { FC } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Drawer, DrawerHeader } from '../../components';
import { Itinerary } from '../../providers';

interface HistoryDrawerShowProps {
  isOpen: boolean;
  close: () => void;
  itinerary: Itinerary | null;
}

export const HistoryDrawerShow: FC<HistoryDrawerShowProps> = ({ close, isOpen, itinerary }) => {
  return (
    <Drawer
      open={isOpen}
      onClose={close}
      anchor='right'
      PaperProps={{
        sx: {
          width: '100%',
          maxWidth: '736px',
        },
      }}>
      <DrawerHeader onCloseClick={close} title={itinerary?.title} />
      <Box p={5}>
        <Stack flexDirection='row' justifyContent='space-between'></Stack>
        <Markdown remarkPlugins={[remarkGfm]}>{itinerary?.travel_description}</Markdown>
      </Box>
    </Drawer>
  );
};

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';

export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <Avatar variant='square' style={{ width: '100%', height: 150 }} />
      <CardContent>
        <Typography variant='body1' component='div'>
          Jean De La Montagne
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          20 ans, Lot IIIAB 13 TCR, Andrononobe, Antananarivo 103
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Share</Button>
        <Button size='small'>Learn More</Button>
      </CardActions>
    </Card>
  );
}

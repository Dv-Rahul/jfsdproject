import React from 'react';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

export default function MuiCard() {
  return (
    <div style={{marginTop:'40px'}}>
      <Box width={"300px"}>
        <Card>
          {/* use props to add image */}
          <CardMedia
            component="img"
            image="https://media.istockphoto.com/id/1405200010/photo/hand-holding-and-glowing-light-bulb.webp?b=1&s=170667a&w=0&k=20&c=2Hi64s_RNI0EkAZr9Zgvk4_QfPU9FCgJH_9SzCrn5gQ="
            height="150px"
            alt="Random image"
          ></CardMedia>

          <CardContent>
            {/* render text in mui typography */}
            <Typography variant='h5' gutterBottom>
            SECOND  BLOG
            </Typography>
            <Typography variant="body2">
              this is my second blog
            </Typography>   
          </CardContent>
          <CardActions>
            <Button size='small'>SHARE</Button>
          </CardActions>
        </Card>
      </Box>
    </div>
  );
}

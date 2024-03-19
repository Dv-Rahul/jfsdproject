import React from 'react';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

export default function MuiCard() {
  return (
    <div>
      <Box width={"300px"}>
        <Card>
          {/* use props to add image */}
          <CardMedia
            component="img"
            image="https://source.unsplash.com/random"
            height="150px"
            alt="Random image"
          ></CardMedia>

          <CardContent>
            {/* render text in mui typography */}
            <Typography variant='h5' gutterBottom>
            FIRST BLOG
            </Typography>
            <Typography variant="body2">
              this is my first blog
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

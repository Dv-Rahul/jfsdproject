import { Typography } from '@mui/material'
import React from 'react'

export default function MuiTypography() {
  return (
    <div>
      <Typography variant="h1"> Heading 1</Typography>
      <Typography variant="h2"> Heading 2</Typography>
      <Typography variant="h3"> Heading 3</Typography>
      <Typography variant="h4" component="h1">
        {" "}
        Heading 4
      </Typography>
      <Typography variant="h5"> Heading 5</Typography>
      <Typography variant="h6" gutterBottom>
        {" "}
        Heading 6
      </Typography>
      <Typography variant="subtitle1"> Subtitile1</Typography>
      <Typography variant="subtitle2"> Subtitile2</Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem eaque
        repudiandae saepe impedit facilis, facere consequuntur sequi aliquam
        non, ipsa sunt consequatur illo minima? Corporis minima culpa quidem
        inventore quisquam!
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, at nihil
        perspiciatis minus nam exercitationem explicabo quaerat consequuntur
        unde aperiam voluptas eveniet in error. Pariatur ducimus itaque
        asperiores accusamus. Perspiciatis.
      </Typography>
    </div>
  );
}
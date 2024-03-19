import React, { useState } from 'react';
import { Button, ButtonGroup, ToggleButton, ToggleButtonGroup, Stack } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

export default function MuiButton() {
  const [formats, setFormats] = useState([]);

  const handleFormats = (event, newFormats) => {
    setFormats(newFormats);
  };

  console.log({ formats });

  return (
    <Stack spacing={4}>
      <Stack direction='row' spacing={2}>
        <Button variant='outlined'>Outlined</Button>
        <Button variant="text">Text</Button>
        <Button variant='contained'>Contained</Button>
      </Stack>
      <Stack direction='row' spacing={2}>
        <Button variant='contained' color='primary'>Primary</Button>
        <Button variant='contained' color='secondary'>Secondary</Button>
        <Button variant='contained' color='error'>Error</Button>
        <Button variant='contained' color='warning'>Warning</Button>
        <Button variant='contained' color='info'>Info</Button>
        <Button variant='contained' color='success'>Success</Button>
      </Stack>
      <Stack direction='row' spacing={2}>
        <Button variant='contained' size='small'>Small</Button>
        <Button variant='contained' size='medium' disableElevation>Small</Button>
        <Button variant='contained' size='large' disableRipple>Small</Button>
      </Stack>
      <Stack direction='row' spacing={2}>
        <Button variant='contained' startIcon={<SendIcon/>}>Send</Button>
        <Button variant='contained' endIcon={<SendIcon/>}>Send</Button>
      </Stack>
      <Stack direction='row'>
        <ButtonGroup variant="contained" orientation='vertical' color='secondary'>
          <Button>Text1</Button>
          <Button onClick={() => alert("Text2 clicked")}>Text2</Button>
          <Button>Text3</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction='row'>
        <ToggleButtonGroup value={formats} onChange={handleFormats}>
          <ToggleButton value='bold'>
            <FormatBoldIcon/>
          </ToggleButton>
          <ToggleButton value='italic'>
            <FormatItalicIcon/>
          </ToggleButton>
          <ToggleButton value='underline'>
            <FormatUnderlinedIcon/>
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
}

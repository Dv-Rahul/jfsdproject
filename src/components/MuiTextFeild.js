import React, { useState } from "react";
import { Stack, TextField, InputAdornment } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export default function MuiTextField() {
  const [showPassword, setShowPassword] = useState(false);

  const handleMouseDownShowPassword = (event) => {
    event.preventDefault();
  }

  const handleClickShowPassword = () => {
    setShowPassword((x) => !x);
  }

  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="Name" variant="outlined" required></TextField>
        <TextField label="Name" variant="filled"></TextField>
        <TextField label="Name" variant="standard"></TextField>
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          helperText="Do not share password with others"
          required
        ></TextField>
        <TextField
          label="small textfield"
          size="small"
          color="secondary"
        ></TextField>
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">Rs.</InputAdornment>
            ),
          }}
        ></TextField>
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
          }}
        ></TextField>
        <TextField
          label="UserName"
          value={2000}
          InputProps={{ readOnly: true }}
        ></TextField>
      </Stack>
      <Stack direction="row">
        <TextField
          label="Password"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownShowPassword}>
                  {showPassword ? <VisibilityOffIcon/> : <VisibilityIcon/>}
                </IconButton>
              </InputAdornment>
            ),
          }}
        ></TextField>
      </Stack>
    </Stack>
  );
}

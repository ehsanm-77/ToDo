import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

function CustomTextField({ label, helperText, icon, ...props }: textField) {
  return (
    <TextField
      label={label}
      helperText={helperText}
      color="secondary"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">{icon}</InputAdornment>
        ),
      }}
      {...props}
    />
  );
}

export default CustomTextField;

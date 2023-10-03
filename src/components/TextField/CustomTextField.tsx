import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

function CustomTextField({
  type,
  label,
  helperText,
  icon,
  error,
  ...props
}: textField) {
  return (
    <TextField
      type={type}
      label={label}
      helperText={helperText}
      color="secondary"
      error={error}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">{icon}</InputAdornment>
        ),
      }}
      fullWidth
      {...props}
    />
  );
}

export default CustomTextField;

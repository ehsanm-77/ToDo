import CustomTextField from '@/components/TextField/CustomTextField';
import { Box } from '@mui/material';
import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { BiPhoneCall } from 'react-icons/bi';
const MainPage = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <CustomTextField
        label="Name"
        helperText="Enter Your Name"
        icon={<AiOutlineUser />}
        required
      />
      <CustomTextField
        label="Number"
        helperText="Enter Your Number"
        icon={<BiPhoneCall />}
        required
      />
    </Box>
  );
};

export default MainPage;

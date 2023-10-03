import CustomTextField from '@/components/TextField/CustomTextField';
import { Box, Button } from '@mui/material';
import React from 'react';
import { AiOutlineUser, AiOutlineMail } from 'react-icons/ai';
import { BiPhoneCall } from 'react-icons/bi';
import { BsCalendar2Date } from 'react-icons/bs';
const MainPage = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: '10px',
          }}
        >
          <CustomTextField
            type="text"
            label="Name"
            helperText="Enter Your Name"
            icon={<AiOutlineUser />}
            required
          />
          <CustomTextField
            type="number"
            label="Number"
            helperText="Enter Your Number"
            icon={<BiPhoneCall />}
            required
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            gap: '10px',
          }}
        >
          <CustomTextField
            type="email"
            label="Email"
            helperText="Enter Your Email"
            icon={<AiOutlineMail />}
            required
          />
          <CustomTextField
            type="date"
            label="Date"
            helperText="Enter Your Date"
            icon={<BsCalendar2Date />}
            required
          />
        </Box>
        <Box>
          <Button
            type="submit"
            variant="outlined"
            fullWidth
            color="secondary"
            size="large"
          >
            Submit
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default MainPage;

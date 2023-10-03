import CustomTextField from '@/components/TextField/CustomTextField';
import { Box, Button } from '@mui/material';
import React from 'react';
import {
  Controller,
  useForm,
  SubmitHandler,
  FieldValues,
} from 'react-hook-form';
import { AiOutlineUser, AiOutlineMail } from 'react-icons/ai';
import { BiPhoneCall } from 'react-icons/bi';
import { BsCalendar2Date } from 'react-icons/bs';

const MainPage = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log('Form data submitted:', data);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        sx={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          border: '1px solid #8d30bf',
          padding: '30px',
          borderRadius: '10px 30px 10px 30px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: '10px',
          }}
        >
          <Controller
            name="name"
            control={control}
            defaultValue=""
            rules={{
              required: 'Name is required',
            }}
            render={({ field }) => (
              <CustomTextField
                type="text"
                label="Name"
                required={true}
                error={!!errors.name}
                helperText={errors.name && errors.name.message}
                icon={<AiOutlineUser />}
                {...field}
              />
            )}
          />
          <Controller
            name="number"
            control={control}
            defaultValue=""
            rules={{
              required: 'Number is required',
              pattern: {
                value: /^[0-9]{11}$/,
                message: 'Phone number must be 11 digits',
              },
            }}
            render={({ field }) => (
              <CustomTextField
                type="text"
                label="Number"
                required={true}
                error={!!errors.number}
                helperText={errors.number && errors.number.message}
                icon={<BiPhoneCall />}
                {...field}
              />
            )}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            gap: '10px',
          }}
        >
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            }}
            render={({ field }) => (
              <CustomTextField
                required={true}
                type="email"
                label="Email"
                error={!!errors.email}
                helperText={errors.email && errors.email.message}
                icon={<AiOutlineMail />}
                {...field}
              />
            )}
          />
          <Controller
            name="date"
            control={control}
            defaultValue=""
            rules={{
              required: 'Date is required',
            }}
            render={({ field }) => (
              <CustomTextField
                type="date"
                label="Date"
                required={true}
                error={!!errors.date}
                helperText={errors.date && errors.date.message}
                icon={<BsCalendar2Date />}
                {...field}
              />
            )}
          />
        </Box>
        <Box>
          <Button
            type="submit"
            variant="outlined"
            fullWidth
            color="secondary"
            size="large"
            // disabled={!isValid}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default MainPage;

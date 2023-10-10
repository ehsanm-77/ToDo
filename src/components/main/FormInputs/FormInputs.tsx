import { Box } from '@mui/material';
import { Controller } from 'react-hook-form';
import CustomTextField from '@/components/TextField/CustomTextField';
import { BiPhoneCall } from 'react-icons/bi';
import { BsCalendar2Date } from 'react-icons/bs';
import { AiOutlineUser, AiOutlineMail } from 'react-icons/ai';

const FormInputs = ({ control, errors }: FormInputs) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
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
              error={!!errors.date}
              helperText={errors.date && errors.date.message}
              icon={<BsCalendar2Date />}
              {...field}
            />
          )}
        />
      </Box>
    </Box>
  );
};

export default FormInputs;

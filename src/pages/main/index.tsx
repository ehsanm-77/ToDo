import FormInputs from '@/components/main/FormInputs/FormInputs';
import SubmitButton from '@/components/shared/SubmitButton/SubmitButton';
import { Box } from '@mui/material';
import React from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';

const MainPage = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
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
        <FormInputs control={control} errors={errors} />
        <Box>
          <SubmitButton />
        </Box>
      </Box>
    </form>
  );
};

export default MainPage;

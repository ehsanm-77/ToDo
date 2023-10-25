import FormInputs from '@/components/main/FormInputs/FormInputs';
import SubmitButton from '@/components/shared/SubmitButton/SubmitButton';
import { setFormData } from '@/redux/slice/formSlice';
import { Box } from '@mui/material';
import router, { Router } from 'next/router';
import React from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

const MainPage = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const formData: IFormInput = useSelector(
    (state: RootState) => state.form.formData
  );
  console.log(formData);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log('Form data submitted:', data);
    dispatch(setFormData(data));
    reset();
    router.push('/users');
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

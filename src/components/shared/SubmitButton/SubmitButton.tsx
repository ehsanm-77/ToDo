import { Button } from '@mui/material';

const SubmitButton = () => {
  return (
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
  );
};

export default SubmitButton;

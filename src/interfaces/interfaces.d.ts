interface textField {
  type: string;
  label: string;
  helperText:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
  icon: React.ReactNode;
  error: boolean | undefined;
}

interface IFormInput {
  name: string;
  number: string;
  email: string;
  date: string;
}

interface FormInputs {
  control: Control<FieldValues, any>;
  errors: FieldErrors<FieldValues>;
}

interface DarkBtn {
  toggleDarkMode: () => void;
  modePage: 'light' | 'dark';
}

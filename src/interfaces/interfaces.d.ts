interface textField {
  type: string;
  label: string;
  helperText:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
  icon: React.ReactNode;
  required: true;
  error: boolean | undefined;
}

interface IFormInput {
  name: string;
  number: string;
  email: string;
  date: string;
}

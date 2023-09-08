import * as yup from 'yup';


export const signUpSchema = yup.object().shape({
  username: yup
  .string()
  .required('Username is required')
  .min(2, 'Name must be at least 2 letters'),
  email: yup
  .string()
  .email('Email is not valid')
  .required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(4, 'Name must be at least 4 characters'),
})
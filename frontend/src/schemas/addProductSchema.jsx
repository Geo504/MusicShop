import * as yup from 'yup';


export const addProductSchema = yup.object().shape({
  img: yup
  .string()
  .required('An image is required')
  .max(255),
  name: yup
  .string()
  .required('Name is required')
  .min(3)
  .max(50),
  price: yup
  .string()
  .required('Price is required')
  .matches(/^\d+\.\d{2}$/, 'Must be a number with 2 decimal.'),
  category: yup
  .string()
  .required('Category is required'),
  description: yup
  .string()
  .required('Description is required')
  .max(600),
})
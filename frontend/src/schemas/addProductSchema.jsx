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
  .number()
  .typeError('Price must be a number')
  .required('Price is required')
  .test('is-decimal', 'Number with 2 decimals max.', value =>
    (value + "").match(/^\d+(\.\d{1,2})?$/)
  ),
  category: yup
  .string()
  .required('Category is required'),
  description: yup
  .string()
  .required('Description is required')
  .max(600),
})
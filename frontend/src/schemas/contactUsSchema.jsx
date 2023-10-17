import * as yup from 'yup';


export const contactUsSchema = yup.object().shape({
  img: yup
  .string()
  .max(255),
  subject_message: yup
  .string()
  .required('Subject message is required')
  .min(3)
  .max(50),
  message_categorie: yup
  .string()
  .required('Message category is required'),
  message: yup
  .string()
  .required('A message is required')
  .max(500),
})
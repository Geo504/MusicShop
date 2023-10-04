import {z} from 'zod';

export const productSchema = z.object({
  name: z
  .string({required_error: 'Name is required'}),
  price: z
  .string({required_error: 'Price is required'}),
  description: z
  .string({required_error: 'Description is required'}),
  img: z
  .string({required_error: 'Image is required'}),
  tags: z.optional(
    z.array(z.string())
    .refine((value) => value.length > 0, { message: 'Strings list is required' })
  ),
})

export const productLikeSchema = z.object({
  productId: z
  .number({required_error: 'productId is required'}),
})
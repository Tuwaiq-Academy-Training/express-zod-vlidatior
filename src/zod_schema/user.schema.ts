import { z, TypeOf } from 'zod';

export const registerSchema = z.object({
  body: z.object({
    id: z.string({ required_error: 'id is required !' }),
    username: z
      .string({ required_error: 'username is required' })
      .min(6, 'username must be more than 6 char'),
    password: z
      .string({ required_error: 'Password is required !' })
      .min(6, 'Password is required !'),
    email: z
      .string({ required_error: 'email is required ' })
      .email('Please enter valid email !'),
  }),
});

export const loginSchema = z.object({
  body: z.object({
    username: z.string({ required_error: 'username is required' }),
    password: z.string({ required_error: 'Password is required !' }),
  }),
});

export type RegisterSchemaType = TypeOf<typeof registerSchema>['body'];

export type LoginSchemaType = TypeOf<typeof loginSchema>['body'];

import { z, TypeOf } from 'zod';

export const employeeSchema = z.object({
  body: z.object({
    id: z.string({ required_error: 'ID is required !' }),
    name: z
      .string({ required_error: 'name is required !' })
      .min(3, 'You name must be more than 3 char'),
    age: z
      .number({ required_error: 'number is required !' })
      .min(18, 'You age must be more than 18')
      .max(60, 'You age must be less than 60'),
    salary: z
      .number({ required_error: 'salary is required !' })
      .min(10000, 'Salary must be more than 10000'),
    position: z.string({ required_error: 'position is required !' }),
    major: z.enum(['CS', 'IS'], { required_error: 'major is required !' }),
  }),
});

export type EmployeeSchemaType = TypeOf<typeof employeeSchema>['body'];

import express from 'express';
import validate from '../middleware/validate';

import {
  employeeSchema,
  EmployeeSchemaType,
} from '../zod_schema/employee.schema';

const router = express.Router();

const employees: EmployeeSchemaType[] = [];

router.get('/', (req, res, next) => {
  return res.json(employees);
});

router.post('/', validate(employeeSchema), (req, res, next) => {
  const newEmployee = req.body as EmployeeSchemaType;

  employees.push(newEmployee);
  return res.status(201).json({ message: 'Employee Added !' });
});

export default router;

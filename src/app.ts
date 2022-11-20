import express from 'express';
import employeeRouter from './routes/employee.route';
import authRouter from './routes/auth.router';
import { z } from 'zod';
const app = express();

app.use(express.json());

app.use('/api/v1/employee', employeeRouter);
app.use('/api/v1/auth', authRouter);

app.listen(5000, () => {
  console.log('Server is running in port 5000');
});

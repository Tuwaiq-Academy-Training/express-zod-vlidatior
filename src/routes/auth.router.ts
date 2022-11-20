import express from 'express';
import validate from '../middleware/validate';
import {
  loginSchema,
  LoginSchemaType,
  registerSchema,
  RegisterSchemaType,
} from '../zod_schema/user.schema';

const router = express.Router();

const users: RegisterSchemaType[] = [];

router.get('/', (req, res, next) => {
  return res.status(200).json(users);
});

router.post('/register', validate(registerSchema), (req, res, next) => {
  const newUser = req.body as RegisterSchemaType;
  users.push(newUser);
  return res.status(201).json({ message: 'Register completed !' });
});

router.post('/login', validate(loginSchema), (req, res, next) => {
  const oldUser = req.body as LoginSchemaType;

  const isValid = users.find((user) => {
    return (
      user.username === oldUser.username && user.password === oldUser.password
    );
  });

  if (!isValid) {
    return res.status(400).json({ message: 'Wrong username or password !' });
  }

  return res.status(200).json({ message: 'Welcome back !' });
});

export default router;

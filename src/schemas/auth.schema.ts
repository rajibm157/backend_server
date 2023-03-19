import { number, object, string } from 'yup';
import { validate } from '_middleware';

export const signupSchema = object().shape({
  body: object().shape({
    firstName: string().required(),
    lastName: string().required(),
    businessName: string(),
    email: string().email(),
    phone: number().required().positive().integer(),
    dob: string(),
  }),
});

export const loginSchema = object().shape({
  body: object().shape({
    email: string().email().required(),
    password: string().required(),
  }),
});

export const loginValidate = validate(loginSchema);
export const signupValidate = validate(signupSchema);

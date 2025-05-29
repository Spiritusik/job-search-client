import { InferType, object, string } from "yup";

export const authSchema = object({
  email: string()
    .required("Email is required")
    .email("Email must be a valid email address"),
  password: string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters long"),
});

export type AuthSchemaForm = InferType<typeof authSchema>;
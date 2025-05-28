import { InferType, object, string } from "yup";

export const createProfileSchema = object({
  name: string().required("Name is required"),
  jobTitle: string().required("Job title is required"),
  about: string().optional(),
});

export type CreateProfileForm = InferType<typeof createProfileSchema>;
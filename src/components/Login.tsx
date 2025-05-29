'use client'
import React, { FormEvent, useCallback } from 'react'
import Input from './ui/inputs/Input'
import H2 from './ui/typography/H2'
import { useFormik } from 'formik'
import Button from './ui/buttons/Button/Button'
import { authSchema } from '@/schemas/authSchema'
import Link from 'next/link'
import { useUser } from '@/context/user/useUser'
import { useRouter } from 'next/navigation'
import { AxiosError } from 'axios'

export default function Login() {
  const { login } = useUser();
  const router = useRouter();
  
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    enableReinitialize: true,
    validationSchema: authSchema,
    onSubmit: async (values, { setSubmitting, setStatus }) => {
      try {
        await login(values.email, values.password);
        router.push('/jobs');
      } catch (error: unknown) {
        const err = error as AxiosError<{ message: string }>;
        const message =
          err?.response?.data?.message || err.message || "Something went wrong";
        setStatus(message); 
      } finally {
        setSubmitting(false)
      }
    },
  });

  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    formik.submitForm();
  }, [formik])
  return (
    <div className="flex flex-col items-center justify-center grow px-4 sm:px-6">
      <form 
        className="flex flex-col gap-5 w-full max-w-screen-sm rounded-md bg-white dark:bg-gray-900 px-6 py-10 shadow-md border border-gray-200 dark:border-gray-700"
        onSubmit={handleSubmit}
      >
        <H2 className="text-center">
          Sign in
        </H2>
        <Input
          label="Email"
          type="text"
          name="email"
          placeholder="Your email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && formik.errors.email}
        />
        <Input
          label="Password"
          type="password"
          name="password"
          placeholder="Your password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && formik.errors.password}
        />
  
        {formik.status && (
          <p className="text-sm text-red-600 dark:text-red-400 text-center">
            {formik.status}
          </p>
        )}
        
        <Button type="submit" disabled={formik.isSubmitting}>
          Sign in
        </Button>

        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
          Don’t have an account?{" "}
          <Link href="/auth/register" className="text-blue-600 hover:underline dark:text-blue-400">
            Sign up
          </Link>
        </p>
      </form>

    </div>
  )
}

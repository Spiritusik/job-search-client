'use client'
import React, { FormEvent, useCallback } from 'react'
import Input from './ui/inputs/Input'
import Textarea from './ui/inputs/Textarea'
import H2 from './ui/typography/H2'
import { useFormik } from 'formik'
import { createProfileSchema } from '@/schemas/createProfileSchema'
import Button from './ui/buttons/Button'
import { useProfile } from '@/context/profile'

export default function CreateProfile() {
  const { profile, setProfile } = useProfile();
  const formik = useFormik({
    initialValues: {
      name: profile?.name ?? '',
      jobTitle: profile?.jobTitle ??  '',
      about: profile?.about ?? '',
    },
    enableReinitialize: true,
    validationSchema: createProfileSchema,
    onSubmit: (values) => {
      setProfile(values);
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
          Create Your Profile
        </H2>
        <Input
          label="Name"
          type="text"
          name="name"
          placeholder="Your full name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && formik.errors.name}
        />
        <Input
          label="Job Title"
          type="text"
          name="jobTitle"
          placeholder="Desired job title"
          value={formik.values.jobTitle}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.jobTitle && formik.errors.jobTitle}
        />
        <Textarea
          label="About Me"
          name="about"
          placeholder="Tell us a bit about yourself"
          rows={5}
          value={formik.values.about}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.about && formik.errors.about}
        />
        <Button type="submit" disabled={formik.isSubmitting}>
          Save Profile
        </Button>
      </form>
    </div>
  )
}

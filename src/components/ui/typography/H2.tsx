import { BaseProps } from '@/types/baseProps'
import clsx from 'clsx'
import React from 'react'

export default function H2({ className, children }: BaseProps) {
  return (
    <h2 className={clsx("text-2xl font-semibold text-gray-800 dark:text-gray-100", className)}>
      {children}
    </h2>
  )
}

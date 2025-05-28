import { BaseProps } from '@/types/baseProps'
import clsx from 'clsx'
import React from 'react'

export default function H2({ className, children }: BaseProps) {
  return (
    <h2 className={clsx("text-3xl", className)}>
      {children}
    </h2>
  )
}

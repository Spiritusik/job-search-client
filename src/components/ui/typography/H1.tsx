import { BaseProps } from '@/types/baseProps'
import clsx from 'clsx'
import React from 'react'

export default function H1({ className, children }: BaseProps) {
  return (
    <h1 className={clsx("text-5xl", className)}>
      {children}
    </h1>
  )
}

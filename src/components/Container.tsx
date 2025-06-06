import { BaseProps } from '@/types/baseProps'
import React from 'react'

export default function Container({ className, children }: BaseProps) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  )
}

'use client'
import Link from 'next/link'
import React from 'react'
import Container from './Container'
import Button from './ui/buttons/Button/Button'
import { useProfile } from '@/context/profile'

export default function Header() {
  const { profile } = useProfile();

  return (
    <header className="sticky top-0 py-4 bg-white text-gray-900 shadow-sm dark:bg-gray-900 dark:text-white dark:shadow-md z-50">
      <Container>
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-4xl font-bold">Home</Link>

          <ul className="flex items-center gap-5 p-2">
            <li>
              <Link href="/liked" className="text-2xl">Liked</Link>
            </li>
            <li>
              <Button href="/create-profile">{`${profile ? "Update" : "Create"} Profile`}</Button>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  )
}

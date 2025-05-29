'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Container from './Container'
import Button from './ui/buttons/Button/Button'
import { useProfile } from '@/context/profile'
import { useUser } from '@/context/user/useUser'
import { MenuIcon } from './ui/icons/MenuIcon'
import { CloseIcon } from './ui/icons/CloseIcon'

export default function Header() {
  const { profile } = useProfile();
  const { user, isLoading, logout } = useUser();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 py-4 bg-white text-gray-900 shadow-sm dark:bg-gray-900 dark:text-white dark:shadow-md z-50">
      <Container>
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-4xl font-bold">Home</Link>

          <button
            className="lg:hidden text-3xl p-2"
            onClick={() => setIsOpen(prev => !prev)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>

          <ul className="hidden lg:flex items-center gap-5 p-2">
            <li>
              <Link href="/liked" className="text-2xl">Liked</Link>
            </li>
            <li>
              <Button href="/create-profile">{`${profile ? "Update" : "Create"} Profile`}</Button>
            </li>
            <li>
              {
                user
                  ? <Button variant="secondary" disabled={isLoading} onClick={() => logout()}>Logout</Button>
                  : <Button variant="secondary" href="/auth/login">Login</Button>
              }
            </li>
          </ul>
        </nav>

        {isOpen && (
          <div className="lg:hidden mt-4 flex flex-col gap-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-4 rounded-md shadow-md">
            <Link href="/liked" className="text-xl" onClick={() => setIsOpen(false)}>Liked</Link>
            <Button href="/create-profile" onClick={() => setIsOpen(false)}>
              {`${profile ? "Update" : "Create"} Profile`}
            </Button>
            {
              user
                ? <Button variant="secondary" disabled={isLoading} onClick={() => { logout(); setIsOpen(false); }}>Logout</Button>
                : <Button variant="secondary" href="/auth/login" onClick={() => setIsOpen(false)}>Login</Button>
            }
          </div>
        )}
      </Container>
    </header>
  )
}

import Link from 'next/link'
import React from 'react'
import Container from './Container'

export default function Header() {
  return (
    <header className="py-4">
      <Container>
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-4xl font-bold">Home</Link>

          <ul className="flex ga  p-2">
            <li>
              <Link href="/liked" className="text-2xl">Liked</Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  )
}

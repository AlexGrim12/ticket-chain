import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
  return (
    <header className="container mx-auto py-6">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <h1 className="text-3xl font-bold">TicketChain</h1>
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="/events" className="hover:text-purple-300 transition">
              Events
            </Link>
          </li>
          <li>
            <Link href="/collect" className="hover:text-purple-300 transition">
              Collect
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-purple-300 transition">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

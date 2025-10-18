import React from 'react'
import Link from "next/link"
import { NavLinkProps } from '@/types'

const NavLink = ({ href, children, isActive }: NavLinkProps) => {
  return (
    <li className="text-sm uppercase">
      <Link
        href={href}
        className={`px-4 py-2 transition-colors rounded-md cursor-pointer hover:text-orange-accent ${isActive ? "text-orange-accent" : "text-gray-700"}`}
      >{children}</Link>
    </li>
  )
}

export default NavLink
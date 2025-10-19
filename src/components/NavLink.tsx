import React from 'react'
import Link from "next/link"
import { NavLinkProps } from '@/types'

const NavLink = ({ href, children, isActive }: NavLinkProps) => {
  return (
    <li className="text-sm">
      <Link
        href={href}
        className={`cursor-pointer ${isActive ? "font-bold text-black" : "text-black"}`}
      >
        <span
          className={`
            relative 
            after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] 
            after:bg-current after:transition-all after:duration-300
            ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}
          `}
        >
          {children}
        </span>
      </Link>
    </li>
  )
}

export default NavLink
"use client";

import Link from 'next/link';
import React from 'react'
import NavLink from './Navlink';
import { usePathname } from 'next/navigation';
import PFLogo from "/public/logo.svg"
import Image from 'next/image'

const Navbar = () => {
  const pathname = usePathname()
  return (
    <header className="w-full bg-white">
        <nav className="flex justify-between px-6 py-4 pr-2">
                <ul className="flex items-center gap-1.5">
                    <NavLink href="/photo-gallery" isActive={pathname.startsWith("/photo-gallery")}>Fotogalerie</NavLink>
                        <Link href="/">
                            <div className="relative cursor-pointer">
                                <Image
                                    src={PFLogo.src}
                                    alt="PrintForge Logo"
                                    className="w-[200px] h-auto hidden md:block"
                                    width={245}
                                    height={230}
                                />
                                
                            </div>
                        </Link>
                    <NavLink href="/about" isActive={pathname === "/about"}>O nás</NavLink>
                </ul>
        </nav>
    </header>
  )
}

export default Navbar
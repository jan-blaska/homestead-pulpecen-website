"use client";

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import HorseLogo from "/public/horse-logo.svg";
import Image from 'next/image';
import NavLink from './NavLink';

const headers: Record<string, { partOne: string; partTwo: string }> = {
  "/": { partOne: "Vítejte v naší", partTwo: "Stáji Půlpecen" },
  "/photo-gallery": { partOne: "Stáj", partTwo: "Půlpecen" },
  "/our-horses": { partOne: "Stáj", partTwo: "Půlpecen" },
  "/about-us": { partOne: "Stáj", partTwo: "Půlpecen" },
  "/contact": { partOne: "Stáj", partTwo: "Půlpecen" },
};

const logoSize: { width: number; height: number } = {
  width: 150,
  height: 150,
};

const Navbar = () => {
    const pathname = usePathname();
    const header = headers[pathname] ?? { partOne: "Stáj", partTwo: "Půlpecen" };
    const headerOffset = logoSize.width / 2 + 8;

    return (
        <header className="w-full bg-white relative z-10">
            <div className='w-full items-center flex bg-hp-primary h-16'>
                <h1 className='w-1/2 text-right' style={{ marginRight: `${headerOffset}px` }}>{header.partOne}</h1>
                <h1 className='w-1/2' style={{ marginLeft: `${headerOffset}px` }}>{header.partTwo}</h1>
            </div>
            <nav className="flex justify-center">
                <ul className="flex h-12 w-full">
                    <div className='w-1/2 flex items-center justify-around' style={{ paddingRight: `${headerOffset}px` }}> 
                        <NavLink href="/photo-gallery" isActive={pathname.startsWith("/photo-gallery")}>Fotogalerie</NavLink>
                        <NavLink href="/our-horses" isActive={pathname.startsWith("/our-horses")}>Naši koně</NavLink>
                    </div>
                    <Link className='absolute top-0 rounded-full left-1/2 -translate-x-1/2 overflow-hidden' style={{ clipPath: "circle(50%)" }} href="/">
                        <div className="relative z-100 cursor-pointer">
                            <Image
                                src={HorseLogo.src}
                                alt="Logo with horse"
                                width={logoSize.width}
                                height={logoSize.height}
                            />
                        </div>
                    </Link>
                    <div className='w-1/2 flex items-center justify-around' style={{ paddingLeft: `${headerOffset}px` }}>
                        <NavLink href="/about-us" isActive={pathname === "/about-us"}>O nás</NavLink>
                        <NavLink href="/contact" isActive={pathname === "/contact"}>Kontakt</NavLink>
                    </div>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
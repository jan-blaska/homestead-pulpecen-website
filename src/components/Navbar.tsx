"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import HorseLogo from "/public/horse-logo.svg";
import Image from 'next/image';
import NavLink from './NavLink';
import { useState } from "react";
import { Menu, X } from "lucide-react";
import clsx from 'clsx';
import { NAV_LINKS } from '@/config/links';

const headers: Record<string, { partOne: string; partTwo: string }> = {
  "/": { partOne: "Vítejte v naší", partTwo: "Stáji Půlpecen" },
};

const logoSize: { width: number; height: number } = {
  width: 150,
  height: 150,
};

const Navbar = () => {
    const pathname = usePathname();
    const header = headers[pathname] ?? { partOne: "Stáj", partTwo: "Půlpecen" };
    const headerOffset = logoSize.width / 2 + 8;

    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);

    return (
        <header className="w-full bg-white relative z-10">
            
            {/* mobile menu */}
            <nav className='flex md:hidden justify-between items-center p-4 bg-hp-primary text-white'>
                <Link href="/">
                    <Image src={HorseLogo.src} alt="logo" width={54} height={54} />
                </Link>
                <h1>Stáj Půlpecen</h1>
                <button 
                    onClick={() => setOpen(!open)} 
                    className="p-2 cursor-pointer"
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                    aria-label={open ? "Zavřít menu" : "Otevřít menu"}
                >
                    {open ? <X size={28} /> : <Menu size={28} />}
                </button>
            </nav>

            {open && (
                <div className="flex md:hidden w-full flex-col bg-hp-primary absolute py-2">
                    {NAV_LINKS.map((link, index) => {
                        return (
                            <Link 
                                key={index}
                                href={link.href} 
                                className={clsx("px-4 py-2 hover:bg-white/10")}
                                onClick={handleClose}
                            >
                                <p className={clsx(pathname.startsWith(link.href) ? "text-black font-bold" : "text-white")}>{link.label}</p>
                            </Link>)
                    })}
                </div>
            )}


            {/* desktop menu */}
            <div className='hidden md:flex w-full items-center bg-hp-primary h-16 text-white'>
                <h1 className='w-1/2 text-right' style={{ marginRight: `${headerOffset}px` }}>{header.partOne}</h1>
                <h1 className='w-1/2' style={{ marginLeft: `${headerOffset}px` }}>{header.partTwo}</h1>
            </div>
            <nav className="hidden md:flex justify-center ">
                <ul className="flex h-12 w-full md:max-w-7xl">
                    <div className='w-1/2 flex items-center justify-around' style={{ paddingRight: `${headerOffset}px` }}> 
                        <NavLink href="/photo-gallery" isActive={pathname.startsWith("/photo-gallery")}>Fotogalerie</NavLink>
                        <NavLink href="/photos-from-trips" isActive={pathname.startsWith("/photos-from-trips")}>Fotky z výletů</NavLink>
                        <NavLink href="/our-horses" isActive={pathname === "/our-horses"}>Naši koně</NavLink>
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
                        <NavLink href="/about-our-homestead" isActive={pathname === "/about-our-homestead"}>O našem statku</NavLink>
                        <NavLink href="/contact" isActive={pathname === "/contact"}>Kontakt</NavLink>
                    </div>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
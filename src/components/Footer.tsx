"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import FooterWave from "/public/footer-wave.svg";
import PusaLogoOnlyHead from "/public/pusa-logo-only-head.svg";
import NavLink from './NavLink';

const Footer = () => {
  const pathname = usePathname();
  
  return (
    <footer className='w-full mt-24'>
      <Image
        src={FooterWave.src}
        alt="Footer wave"
        width={1600}
        height={200}
        className='w-full'
      />
      <div className='bg-hp-primary flex flex-col items-center'>
        <div className='w-[95%] md:max-w-7xl'>
          <div className='flex w-full justify-between'>
            <div className='flex flex-col gap-4'>
              <h1>Stáj Půlpecen</h1>
              <ul className="flex h-12 w-full md:max-w-7xl gap-16">
                <NavLink href="/photo-gallery" isActive={pathname.startsWith("/photo-gallery")}>Fotogalerie</NavLink>
                <NavLink href="/photos-from-trips" isActive={pathname.startsWith("/photos-from-trips")}>Fotky z výletů</NavLink>
                <NavLink href="/our-horses" isActive={pathname.startsWith("/our-horses")}>Naši koně</NavLink>
                <NavLink href="/about-us" isActive={pathname === "/about-us"}>O nás</NavLink>
                <NavLink href="/about-our-homestead" isActive={pathname === "/about-our-homestead"}>O našem statku</NavLink>
                <NavLink href="/contact" isActive={pathname === "/contact"}>Kontakt</NavLink>    
              </ul>
            </div>
            <Image
              src={PusaLogoOnlyHead.src}
              alt="Pusa logo only head"
              width={150}
              height={150}
            />
          </div>
          <p className='text-center mt-8'>© 2025 Stáj Půlpecen</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
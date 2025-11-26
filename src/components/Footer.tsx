"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import FooterWave from "/public/footer-wave.svg";
import PusaLogoOnlyHead from "/public/pusa-logo-only-head.svg";
import NavLink from './NavLink';
import { NAV_LINKS } from '@/config/links';
import clsx from 'clsx';

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
              <span className="font-kaushan-script text-2xl">Stáj Půlpecen</span>
              <ul className="flex w-full flex-wrap md:max-w-7xl gap-4 md:gap-8">
                {NAV_LINKS.map((link, index) => {
                    return (
                        <NavLink
                            key={index}
                            href={link.href}
                            isActive={pathname.startsWith(link.href)}
                        >
                            <p className={clsx(pathname.startsWith(link.href) ?? "font-bold")}>{link.label}</p>
                        </NavLink>)
                    })}
              </ul>
            </div>
            <Image
              src={PusaLogoOnlyHead.src}
              alt="Pusa logo only head"
              width={150}
              height={150}
              className='pl-2'
            />
          </div>
          <p className='text-center mt-4 md:mt-8'>© 2025 Stáj Půlpecen</p>
        </div>
      </div>
      
    </footer>
  )
}

export default Footer
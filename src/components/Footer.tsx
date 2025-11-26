"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import FooterWave from "/public/footer-wave.svg";
import PusaLogoOnlyHead from "/public/pusa-logo-only-head.svg";
import NavLink from './NavLink';
import { NAV_LINKS } from '@/config/links';

const Footer = () => {
  const pathname = usePathname();
  const year = new Date().getFullYear();

  return (
    <footer className='w-full mt-24'>
      <Image
        src={FooterWave.src}
        alt=""
        aria-hidden="true"
        width={1600}
        height={200}
        className='w-full'
      />

      <div className='bg-hp-primary flex flex-col items-center'>
        <div className='w-[95%] md:max-w-7xl'>
          <div className='flex w-full justify-between'>
            <nav aria-label="Footer navigation" className='flex flex-col gap-4'>
              <span className="font-kaushan-script text-2xl">Stáj Půlpecen</span>
              <ul className="flex w-full flex-wrap md:max-w-7xl gap-4 md:gap-8 list-none">
                {NAV_LINKS.map((link) => {
                    return (
                        <li key={link.href}>
                          <NavLink
                              href={link.href}
                              isActive={pathname.startsWith(link.href)}
                          >
                              {link.label}
                          </NavLink>
                        </li>
                        )

                    })}
              </ul>
            </nav>
            <Image
              src={PusaLogoOnlyHead.src}
              alt="Pusa logo only head"
              width={150}
              height={150}
              className='pl-2'
            />
          </div>
          <p className='text-center mt-4 md:mt-8'>© {year} Stáj Půlpecen</p>
        </div>
      </div>
      
    </footer>
  )
}

export default Footer
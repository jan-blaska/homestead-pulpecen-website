import React from 'react';
import people from '@/app/about-us/about-us.json';
import ContentTextWithPhoto from '@/components/ContentTextWithPhoto';
import type { Person } from '@/types';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kdo jsme – Stáj Půlpecen",
  description:
    "Seznamte se s lidmi, kteří tvoří Stáj Půlpecen. Jezdkyně, ošetřovatelé a členové rodiny, kteří se starají o naše koně a rodinný statek.",
  openGraph: {
    title: "Kdo jsme – Stáj Půlpecen",
    description:
      "Poznejte tým Stáje Půlpecen – jezdkyně, ošetřovatele a členy rodiny, kteří pečují o naše koně a rodinný statek.",
    url: "https://stajpulpecen.cz/about-us",
    siteName: "Stáj Půlpecen",
    type: "article",
    images: [
      {
        url: "https://stajpulpecen.cz/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://stajpulpecen.cz/about-us",
  },
};

const AboutUs = () => {
  return (
    <main className='mx-auto flex flex-col items-stretch w-[95%] md:max-w-7xl mt-24'>
      
      <h1 className='mt-16 mb-8 w-[95%] md:max-w-7xl text-left'>
        Kdo jsme my
      </h1>
  
        {people.map((person: Person) => {
          return (
            <div key={person.id}>
              <h2 className='mb-2'>
                {person.name}
              </h2>
              <ContentTextWithPhoto
                imageSrc={person.image}
                imageAspectRatio={person.imageAspectRatio ?? "3 / 2"}
                reverseTextWithPhoto={true}
                className='mb-8'
                imageAlt={person.imageAlt}
                textArray={person.texts}
              />
            </div>
          )
        })}
    </main>
  )
}

export default AboutUs
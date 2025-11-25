import React from 'react';
import Image from 'next/image';
import ContentTextWithPhoto from '@/components/ContentTextWithPhoto';
import HorsesTogether from "/public/horses-together.svg";
import horses from '@/app/our-horses/our-horses.json';
import type { Horse } from '@/types';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Naši koně – Stáj Půlpecen",
  description:
    "Seznamte se s koňmi naší stáje. Naši současní koně a vzpomínka na ty, kteří u nás dříve žili. Fotografie, popisy a příběhy každého z nich.",
  openGraph: {
    title: "Naši koně – Stáj Půlpecen",
    description:
      "Poznejte naše současné i minulé koně. Každý kůň má svůj příběh, charakter a místo v historii naší stáje.",
    url: "https://stajpulpecen.cz/our-horses",
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
    canonical: "https://stajpulpecen.cz/our-horses",
  },
};

const OurHorses = () => {
  const currentHorses = (horses as Horse[]).filter(horse => horse.status === 'current');
  const pastHorses = (horses as Horse[]).filter(horse => horse.status === 'past');
  
  return (
    <main className='mx-auto flex flex-col items-stretch w-[95%] md:max-w-7xl'>
        <Image
          src={HorsesTogether.src}
          alt="Ilustrační kresba dvou koní"
          width={750}
          height={500}
          className='mt-8 mb-8 mx-auto'
        />

        <h1 className='my-0 w-[95%] md:max-w-7xl text-left'>
          Koně v naší stáji
        </h1>

        <h2 className='mt-8 mb-4 underline underline-offset-4'>
          Koně současní:
        </h2>

        {currentHorses.map((horse: Horse) => {
          return (
            <div key={horse.id}>
              <h3 className='mb-2'>
                {horse.name} {horse.alias && `(alias ${horse.alias})`}
              </h3>
              <ContentTextWithPhoto
                imageSrc={horse.image}
                imageAspectRatio={horse.imageAspectRatio ?? "3 / 2"}
                reverseTextWithPhoto={true}
                className='mb-8'
                imageAlt={horse.imageAlt}
                textArray={horse.texts}
              />
            </div>
          )
        })}

        <h2 className='mt-8 mb-4 underline underline-offset-4'>
          Koně minulí:
        </h2>

        {pastHorses.map((horse: Horse) => {
          return (
            <div key={horse.id}>
              <h3 className='mb-2'>
                {horse.name} {horse.alias && `(alias ${horse.alias})`}
              </h3>
              <ContentTextWithPhoto 
                imageSrc={horse.image}
                imageAspectRatio={horse.imageAspectRatio ?? "3 / 2"}
                reverseTextWithPhoto={true}
                className='mb-8'
                imageAlt={horse.imageAlt}
                textArray={horse.texts}
              />
            </div>
          )
        })}
    </main>
  )
}

export default OurHorses  
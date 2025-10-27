import React from 'react';
import Image from 'next/image';
import ContentTextWithPhoto from '@/components/ContentTextWithPhoto';
import HorsesTogether from "/public/horses-together.svg";
import horses from '@/app/our-horses/our-horses.json';
import type { Horse } from '@/types';

const OurHorses = () => {
  const currentHorses = (horses as Horse[]).filter(horse => horse.status === 'current');
  const pastHorses = (horses as Horse[]).filter(horse => horse.status === 'past');
  
  return (
    <div className='mx-auto flex flex-col items-stretch w-[95%] md:max-w-7xl'>
        <Image
          src={HorsesTogether.src}
          alt="Horses together"
          width={750}
          height={500}
          className='mt-8 mb-8 mx-auto'
        />

        <h1 className='mt-8 mb-4 underline underline-offset-5'>
          Koně současní:
        </h1>
        {currentHorses.map((horse: Horse) => {
          return (
            <div key={horse.id}>
              <h2 className='mb-2'>
                {horse.name} {horse.alias && `(alias ${horse.alias})`}
              </h2>
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

        <h1 className='mt-8 mb-4 underline underline-offset-5'>
          Koně předchozí:
        </h1>
        {pastHorses.map((horse: Horse) => {
          return (
            <div key={horse.id}>
              <h2 className='mb-2'>
                {horse.name} {horse.alias && `(alias ${horse.alias})`}
              </h2>
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
    </div>
  )
}

export default OurHorses  
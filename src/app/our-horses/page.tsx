import React from 'react';
import Image from 'next/image';
import ContentTextWithPhoto from '@/components/ContentTextWithPhoto';
import HorsesTogether from "/public/horses-together.svg";
import Pusa from "/public/our-horses/pusa.jpg";

const OurHorses = () => {
  return (
    <div className='flex flex-col items-center'>
        <Image
          src={HorsesTogether.src}
          alt="Horses together"
          width={750}
          height={500}
          className='mt-12 mb-12 w-[95%] md:max-w-2xl'
        />
        <h1 className='mt-8 mb-4 w-[95%] md:max-w-7xl text-left underline underline-offset-5'>Koně současní:</h1>
        <h2 className='mb-8 w-[95%] md:max-w-7xl text-left'>Pusa (alias Pusinka)</h2>
        <ContentTextWithPhoto 
          imageSrc={Pusa.src}
          imageAspectRatio='3 / 2'
          reverseTextWithPhoto={true}
          className='mb-16'
          imageAlt='Horse Pusa walking like a queen.'
          textArray={["..."]}
        />
        <h2 className='mb-8 w-[95%] md:max-w-7xl text-left'>Ester (alias Esterka)</h2>
    </div>
  )
}

export default OurHorses
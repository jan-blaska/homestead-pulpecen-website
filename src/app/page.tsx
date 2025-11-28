import React from 'react'
import Video from 'next-video';
import myVideo from '/videos/background-video-horses.mov';
import Image from 'next/image';
import ThreeHorseShoes from "/public/three-horse-shoes.svg";
import HelenWithPusa from "/public/homepage/helen-with-pusa.jpg";
import HelenWithSmallDaja from "/public/homepage/helen-with-small-daja.jpg";
import Helen from "/public/homepage/helen.jpg";
import PusaAsBull from "/public/homepage/pusa-as-bull.jpg";
import Sam from "/public/homepage/sam.jpg";
import ThreeHorses from "/public/homepage/three-horses.jpg";
import TwoCuteHorsesWinter from "/public/homepage/two-cute-horses-winter.jpg";
import HorsePath from "/public/horse-path.svg";
import ContentTextWithPhoto from '@/components/ContentTextWithPhoto';
import ContentTwoPhotos from '@/components/ContentTwoPhotos';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stáj Půlpecen – Rodinný koňský statek na Svitavsku",
  description:
    "Stáj Půlpecen je malý rodinný koňský statek v obci Půlpecen na Svitavsku. Koně jsou součástí naší rodiny – sdílíme náš příběh, fotografie a každodenní život s koňmi.",
  openGraph: {
    title: "Stáj Půlpecen – Rodinný koňský statek na Svitavsku",
    description:
      "Rodinný koňský statek v obci Půlpecen na Svitavsku. Poznejte naše koně a běžný život na statku plném přírody, klidu a radosti.",
    url: "https://stajpulpecen.cz",
    siteName: "Stáj Půlpecen",
    type: "website",
    images: [
      {
        url: "https://stajpulpecen.cz/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Stáj Půlpecen – Rodinný koňský statek",
      },
    ],
  },
  alternates: {
    canonical: "https://stajpulpecen.cz",
  },
};


const Home = () => {
  return (
    <>
      <Video 
        src={myVideo}
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        className='w-full object-cover'
        aria-hidden="true"
      />
      <main className='flex flex-col items-center'>
        <Image
          src={ThreeHorseShoes.src}
          alt="Tři podkovy - ozdobný prvek stránky"
          width={750}
          height={200}
          className='mt-6 md:mt-12 mb-12 md:mb-24 w-[95%] md:max-w-2xl scale-80 md:scale-100'
        />

        <h1 className='mb-8 md:mb-16 w-[95%] md:max-w-7xl'>
          Rodinný statek, kde koně jsou součástí rodiny
        </h1>

        <ContentTextWithPhoto 
          imageSrc={TwoCuteHorsesWinter.src}
          imageAlt='Dva koně na zasněžené pastvině'
          textArray={["Jsme malý rodinný statek, kde se všechno točí kolem koní. Každý z nich má svou povahu, své radosti i vrtochy, ale společně s námi tvoří jeden domov.", "Statek pro nás není jen místo, kde bydlíme. Je to kousek přírody, klidu a pohody, který si neseme v srdci. Je to prostor, kde můžeme zpomalit, nadechnout se a najít radost v obyčejných věcech – ať už je to ranní krmení, procházka s koňmi po louce, nebo společné chvíle v rodině.", "Tento web vznikl proto, abychom se podělili o naše místo i s vámi. Najdete tu náš příběh, fotky z každodenního života a také možnost se s námi spojit. Protože věříme, že radost ze života s koňmi stojí za sdílení."]}
        />

        <div>
          <Image
            src={HorsePath.src}
            alt="Linka ve tvaru koňské cesty oddělující sekce stránky"
            width={1800}
            height={60}
            className='my-12 md:my-24 scale-200 md:scale-150 xl:scale-100'
          />
        </div>
        
        <ContentTwoPhotos 
          imageSrc1={Helen.src} 
          imageAlt1={'Klisna Helen se dívá do objektivu'} 
          imageSrc2={HelenWithSmallDaja.src} 
          imageAlt2={'Helen se pase s malou Dájou na pastvě'}
          className='mb-8 md:mb-16'
        />
        <ContentTwoPhotos 
          imageSrc1={ThreeHorses.src} 
          imageAlt1={'Tři koně společně na pastvě'} 
          imageSrc2={Sam.src} 
          imageAlt2={'Kůň Sam na pastvě'}
        />

        <span className='w-full bg-hp-primary text-center text-white font-kaushan-script text-xl py-6 my-12 md:my-18'>
          I po tisících mil jsme stále někde na začátku.
        </span>

        <ContentTwoPhotos 
          imageSrc1={PusaAsBull.src} 
          imageAlt1={'Klisna Pusa v běhu, připomíná býka'} 
          imageSrc2={HelenWithPusa.src} 
          imageAlt2={'Helen s Pusou na pastvině'}
        />   
      </main>
      
      
    </>
  )
}

export default Home

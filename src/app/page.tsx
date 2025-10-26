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
      />
      <div className='flex flex-col items-center'>
        <Image
          src={ThreeHorseShoes.src}
          alt="Three horse shoes"
          width={750}
          height={200}
          className='mt-6 md:mt-12 mb-12 md:mb-24 w-[95%] md:max-w-2xl scale-80 md:scale-100'
        />
        <h1 className='mb-8 md:mb-16'>Rodinný statek, kde koně jsou součástí rodiny</h1>
        <ContentTextWithPhoto 
          imageSrc={TwoCuteHorsesWinter.src}
          imageAlt='Two cute horses in the winter'
          textArray={["Jsme malý rodinný statek, kde se všechno točí kolem koní. Každý z nich má svou povahu, své radosti i vrtochy, ale společně s námi tvoří jeden domov.", "Statek pro nás není jen místo, kde bydlíme. Je to kousek přírody, klidu a pohody, který si neseme v srdci. Je to prostor, kde můžeme zpomalit, nadechnout se a najít radost v obyčejných věcech – ať už je to ranní krmení, procházka s koňmi po louce, nebo společné chvíle v rodině.", "Tento web vznikl proto, abychom se podělili o naše místo i s vámi. Najdete tu náš příběh, fotky z každodenního života a také možnost se s námi spojit. Protože věříme, že radost ze života s koňmi stojí za sdílení."]}
        />
        <div>

        <Image
          src={HorsePath.src}
          alt="Horse Path"
          width={1800}
          height={60}
          className='my-12 md:my-24 scale-200 md:scale-150 xl:scale-100'
        />
        </div>
        <ContentTwoPhotos 
          imageSrc1={Helen.src} 
          imageAlt1={'Helen se dívá'} 
          imageSrc2={HelenWithSmallDaja.src} 
          imageAlt2={'Helen se pase s malou Dájou'}
          className='mb-8 md:mb-16'
        />
        <ContentTwoPhotos 
          imageSrc1={ThreeHorses.src} 
          imageAlt1={'Tři koně'} 
          imageSrc2={Sam.src} 
          imageAlt2={'Kůň Sam'}
        />
        <span className='w-full bg-hp-primary text-center text-white font-kaushan-script text-xl py-6 my-12 md:my-18'>I po tisících mil jsme stále někde na začátku.</span>
        <ContentTwoPhotos 
          imageSrc1={PusaAsBull.src} 
          imageAlt1={'Pusa v běhu, vypadá jako býk'} 
          imageSrc2={HelenWithPusa.src} 
          imageAlt2={'Helen s Pusou'}
        />   
      </div>
      
      
    </>
  )
}

export default Home

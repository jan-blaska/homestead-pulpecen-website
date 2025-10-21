import React from 'react'
import Video from 'next-video';
import myVideo from '/videos/background-video-horses.mov';
import Image from 'next/image';
import ThreeHorseShoes from "/public/three-horse-shoes.svg";
import TwoCuteHorsesWinter from "/public/two-cute-horses-winter.jpg";
import HorsePath from "/public/horse-path.svg";
import HelenWithOtherHorse from "/public/helen-with-other-horse.jpg";
import PusaAsBull from "/public/pusa-as-bull.jpg";
import ContentTextWithPhoto from '@/components/ContentTextWithPhoto';

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
          className='mt-12 mb-24 w-[95%] md:max-w-2xl'
        />
        <h1 className='mb-16'>Rodinný statek, kde koně jsou součástí rodiny</h1>
        <ContentTextWithPhoto 
          imageSrc={TwoCuteHorsesWinter.src}
          imageAlt='Two cute horses in the winter'
          textArray={["Jsme malý rodinný statek, kde se všechno točí kolem koní. Každý z nich má svou povahu, své radosti i vrtochy, ale společně s námi tvoří jeden domov.", "Statek pro nás není jen místo, kde bydlíme. Je to kousek přírody, klidu a pohody, který si neseme v srdci. Je to prostor, kde můžeme zpomalit, nadechnout se a najít radost v obyčejných věcech – ať už je to ranní krmení, procházka s koňmi po louce, nebo společné chvíle v rodině.", "Tento web vznikl proto, abychom se podělili o naše místo i s vámi. Najdete tu náš příběh, fotky z každodenního života a také možnost se s námi spojit. Protože věříme, že radost ze života s koňmi stojí za sdílení."]}
        />
        <Image
          src={HorsePath.src}
          alt="Horse Path"
          width={1800}
          height={60}
          className='my-24'
        />
        <Image
          src={HelenWithOtherHorse.src}
          alt="Helen with other horse"
          width={800}
          height={600}
          className='rounded-md w-[95%] md:max-w-7xl'
        />
        <span className='w-full bg-hp-primary text-center text-white font-kaushan-script text-xl py-6 my-24'>I po tisících mil jsme stále někde na začátku.</span>
        <Image
          src={PusaAsBull.src}
          alt="Pusa as bull"
          width={1280}
          height={853}
          className='rounded-md w-[95%] md:max-w-7xl'
        />
      </div>
      
      
    </>
  )
}

export default Home

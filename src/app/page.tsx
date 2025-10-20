import React from 'react'
import Video from 'next-video';
import myVideo from '/videos/background-video-horses.mov';
import Image from 'next/image';
import ThreeHorseShoes from "/public/three-horse-shoes.svg";
import TwoCuteHorsesWinter from "/public/two-cute-horses-winter.jpg";
import HorsePath from "/public/horse-path.svg";
import HelenWithOtherHorse from "/public/helen-with-other-horse.jpg";
import PusaAsBull from "/public/pusa-as-bull.jpg";

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
          className='mt-12 mb-24'
        />
        <h1 className='mb-16'>Rodinný statek, kde koně jsou součástí rodiny</h1>
        <div className='flex w-full md:max-w-7xl gap-16 items-center'>
          <div className='flex flex-col gap-4 flex-2'>
            <p>Jsme malý rodinný statek, kde se všechno točí kolem koní. Každý z nich má svou povahu, své radosti i vrtochy, ale společně s námi tvoří jeden domov.</p>
            <p>Statek pro nás není jen místo, kde bydlíme. Je to kousek přírody, klidu a pohody, který si neseme v srdci. Je to prostor, kde můžeme zpomalit, nadechnout se a najít radost v obyčejných věcech – ať už je to ranní krmení, procházka s koňmi po louce, nebo společné chvíle v rodině.</p>
            <p>Tento web vznikl proto, abychom se podělili o naše místo i s vámi. Najdete tu náš příběh, fotky z každodenního života a také možnost se s námi spojit. Protože věříme, že radost ze života s koňmi stojí za sdílení.</p>
          </div>
          <Image
            src={TwoCuteHorsesWinter.src}
            alt="Two cute horses in the winter"
            width={750}
            height={750}
            className='flex-1 rounded-md'
          />
        </div>
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
          className='rounded-md'
        />
        <span className='w-full bg-hp-primary text-center text-white font-kaushan-script text-xl py-6 my-24'>I po tisících mil jsme stále někde na začátku.</span>
        <Image
          src={PusaAsBull.src}
          alt="Pusa as bull"
          width={800}
          height={600}
          className='rounded-md'
        />
      </div>
      
      
    </>
  )
}

export default Home

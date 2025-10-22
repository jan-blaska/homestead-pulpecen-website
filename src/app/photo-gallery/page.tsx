import React from 'react';
import Image from 'next/image';
import HorseWithCamera from "/public/horse-with-camera.svg";
import Placeholder from "/public/placeholder.png";
import PhotoGalleryCard from '@/components/PhotoGalleryCard';

const PhotoGallery = () => {
    return (
      <div className='mx-auto flex flex-col items-center w-[95%] md:max-w-7xl'>
        <Image
          src={HorseWithCamera.src}
          alt="Horse with camera"
          width={300}
          height={300}
          className='mt-16 mb-12'
        />
        <div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3'>
          <PhotoGalleryCard 
            href=''
            imageSrc={Placeholder.src}
            imageAlt=''
            dateCreated='20.10.2012'
            title='Zima 2012/2013'
            description='Jak holky přivítaly první sníh'
          />
          {/* Images will go here */}
        </div>
      </div>
    )
}

export default PhotoGallery

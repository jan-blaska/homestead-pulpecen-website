import React from 'react';
import Image from 'next/image';
import HorseWithCamera from "/public/horse-with-camera.svg";
import Placeholder from "/public/placeholder.png";
import PhotoGalleryCard from '@/components/PhotoGalleryCard';
import { createClient } from '@/utils/supabase/server';

const PhotoGallery = async () => {
  const supabase = await createClient();  
  const { data: photoGallery, error } = await supabase.from("photo-gallery").select();

  if (error) {
    console.error("Chyba při načítání galerie:", error.message);
    return <p>Galerii se nepodařilo načíst.</p>;
  }

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
          {photoGallery?.map((item) => (
            <PhotoGalleryCard
              key={item.id}
              href='' 
              imageSrc={item.cover_image_url}
              imageAlt={item.title ?? ''}
              dateCreated={new Date(item.created_at).toLocaleDateString('cs-CZ')}
              title={item.title}
              description={item.description ?? ''}
            />
          ))}
        </div>
      </div>
    )
}

export default PhotoGallery

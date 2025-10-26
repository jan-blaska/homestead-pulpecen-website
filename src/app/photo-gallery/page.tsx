import React from 'react';
import Image from 'next/image';
import HorseWithCamera from "/public/horse-with-camera.svg";
import Placeholder from "/public/placeholder.png";
import PhotoGalleryCard from '@/components/PhotoGalleryCard';
import { createClient } from '@/utils/supabase/server';
import { getImageUrl } from '@/utils/supabase/helpers';

const PhotoGallery = async () => {
  const supabase = await createClient();  
  const { data: photoGallery, error } = await supabase.from("photo-gallery").select("id, title, description, cover_image_url, created_at")
    .order('created_at', { ascending: false });

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
          {photoGallery?.map((gallery) => (
            <PhotoGalleryCard
              key={gallery.id}
              href={`/photo-gallery/${gallery.id}`}
              imageSrc={getImageUrl(gallery.cover_image_url)}
              imageAlt={gallery.title ?? ''}
              dateCreated={new Date(gallery.created_at).toLocaleDateString('cs-CZ')}
              title={gallery.title}
              description={gallery.description ?? ''}
            />
          ))}
        </div>
      </div>
    )
}

export default PhotoGallery

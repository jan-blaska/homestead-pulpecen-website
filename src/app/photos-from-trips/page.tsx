import React from 'react';
import Image from 'next/image';
import HorseWithCamera from "/public/horse-with-camera.svg";
import PhotoGalleryCard from '@/components/PhotoGalleryCard';
import { createClient } from '@/utils/supabase/server';
import { getImageUrl } from '@/utils/supabase/helpers';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fotky z výletů – Stáj Půlpecen",
  description:
    "Prohlédněte si fotky z našich vyjížděk, výletů a společných chvil se stádem mimo domov. Momentky z přírody i cestování s koňmi.",
  openGraph: {
    title: "Fotky z výletů – Stáj Půlpecen",
    description:
      "Fotografie z našich výletů a vyjížděk se stájemi Stáj Půlpecen. Momentky z cest, přírody a společných zážitků.",
    url: "https://stajpulpecen.cz/photos-from-trips",
    siteName: "Stáj Půlpecen",
    type: "website",
    images: [
      {
        url: "https://stajpulpecen.cz/og-image.jpg",
        width: 1200,
        height: 630
      }
    ]
  },
  alternates: {
    canonical: "https://stajpulpecen.cz/photos-from-trips"
  }
};


const PhotosFromTrips = async () => {
  const supabase = await createClient();  
  const { data: photosFromTrips, error } = await supabase.from("photos-from-trips").select("id, title, description, cover_image_url, created_at")
    .order('created_at', { ascending: false });

  if (error) {
    console.error("Chyba při načítání galerie:", error.message);
    return (
      <main className="mx-auto w-[95%] md:max-w-7xl mt-16">
        <h1>Fotky z výletů</h1>
        <p>Galerii se nepodařilo načíst. Zkuste to prosím znovu později.</p>
      </main>
    );
  }

  return (
      <main className='mx-auto flex flex-col items-stretch w-[95%] md:max-w-7xl'>
        
        <Image
          src={HorseWithCamera.src}
          alt="Ilustrační obrázek koně s fotoaparátem"
          width={300}
          height={300}
          className='mt-16 mb-12 mx-auto'
        />

        <h1 className='mt-0 mb-4 md:mb-8 w-[95%] md:max-w-7xl text-left'>
          Fotky z výletů
        </h1>

        <section className='grid grid-cols-1 gap-y-6 md:gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3'>
          {photosFromTrips?.map((gallery) => (
            <PhotoGalleryCard
              key={gallery.id}
              href={`/photos-from-trips/${gallery.id}`}
              imageSrc={getImageUrl(`/photos-from-trips/${gallery.cover_image_url}`)}
              imageAlt={gallery.title ?? ''}
              dateCreated={new Date(gallery.created_at).toLocaleDateString('cs-CZ')}
              title={gallery.title}
              description={gallery.description ?? ''}
            />
          ))}
        </section>

      </main>
    )
}

export default PhotosFromTrips

import React from 'react';
import Image from 'next/image';
import HorseWithCamera from "/public/horse-with-camera.svg";
import PhotoGalleryCard from '@/components/PhotoGalleryCard';
import { createClient } from '@/utils/supabase/server';
import { getImageUrl } from '@/utils/supabase/helpers';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fotogalerie – Stáj Půlpecen",
  description:
    "Prohlédněte si fotogalerii koní, statku a momentů z našeho každodenního života ve Stáji Půlpecen.",
  openGraph: {
    title: "Fotogalerie – Stáj Půlpecen",
    description:
      "Fotografie koní, statku a života ve Stáji Půlpecen. Objevte naše nejnovější alba.",
    url: "https://stajpulpecen.cz/photo-gallery",
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
    canonical: "https://stajpulpecen.cz/photo-gallery"
  }
};

const PhotoGallery = async () => {
  const supabase = await createClient();  
  const { data: photoGallery, error } = await supabase.from("photo-gallery").select("id, title, description, cover_image_url, created_at")
    .order('created_at', { ascending: false });

  if (error) {
    console.error("Chyba při načítání galerie:", error.message);
    return (
        <main className="mx-auto w-[95%] md:max-w-7xl mt-16">
          <h1>Fotogalerie</h1>
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

        <h1 className='mt-0 mb-4 md:mb-8 text-left'>
          Fotogalerie
        </h1>

        <section className='grid grid-cols-1 gap-y-6 md:gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3'>
          {photoGallery?.map((gallery) => (
            <PhotoGalleryCard
              key={gallery.id}
              href={`/photo-gallery/${gallery.id}`}
              imageSrc={getImageUrl(`/photo-gallery/${gallery.cover_image_url}`)}
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

export default PhotoGallery

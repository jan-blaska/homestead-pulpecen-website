import Image from 'next/image';
import { createClient } from '@/utils/supabase/server';
import Link from 'next/link';
import { getImageUrl } from '@/utils/supabase/helpers';
import type { Metadata } from "next";
import { GalleryDetailImage, DetailPageParams } from '@/types';
import { ArrowLeft } from 'lucide-react';

export const revalidate = 60;

export async function generateMetadata(
  { params }: DetailPageParams
): Promise<Metadata> {
  const supabase = await createClient();
  const { id } = await params;

  const { data: gallery } = await supabase
    .from("photos-from-trips")
    .select("title, description, cover_image_url")
    .eq("id", id)
    .single();

  if (!gallery) {
    return {
      title: "Galerie z výletu nenalezena – Stáj Půlpecen",
    };
  }

  return {
    title: `${gallery.title} – Fotky z výletů | Stáj Půlpecen`,
    description:
      gallery.description ??
      "Fotky z výletů a vyjížděk se stádem Stáj Půlpecen.",
    openGraph: {
      title: `${gallery.title} – Stáj Půlpecen`,
      description:
        gallery.description ??
        "Fotografie z výletů a vyjížděk Stáje Půlpecen.",
      url: `https://stajpulpecen.cz/photos-from-trips/${id}`,
      siteName: "Stáj Půlpecen",
      type: "article",
      images: [
        {
          url: `https://stajpulpecen.cz${
            gallery.cover_image_url || "/og-image.jpg"
          }`,
          width: 1200,
          height: 630,
        },
      ],
    },
    alternates: {
      canonical: `https://stajpulpecen.cz/photos-from-trips/${id}`,
    },
  };
}

export default async function GalleryDetail({ params }: DetailPageParams) {
  const supabase = await createClient();
  const { id } = await params;

  const { data: gallery, error } = await supabase
    .from('photos-from-trips')
    .select('id, title, description, created_at, images')
    .eq('id', id)
    .single();

  if (error) {
    console.error(error);
    return (
      <main className="p-6">
        <Link href="/photos-from-trips" className="underline">
          &larr; Zpět na fotky z výletů
        </Link>
        <p className="mt-4">Nepodařilo se načíst tuto galerii.</p>
      </main>
    );
  }

  return (
    <main className="mx-auto w-[95%] md:max-w-7xl p-6">
      
      <Link 
        href="/photo-gallery"
        className="inline-flex items-center gap-2 text-hp-primary hover:underline transition mb-8 mt-4"
      >
        <ArrowLeft size={18} />
        Zpět na fotky z výletů
      </Link>

      <h1 className="mt-8 mb-2">{gallery.title}</h1>
      {gallery.description && (
        <p className="text-sm opacity-80 mt-1">{gallery.description}</p>
      )}
      <p className="text-xs opacity-60 mt-1">Vytvořeno:{" "}
        {gallery.created_at
          ? new Date(gallery.created_at).toLocaleDateString('cs-CZ')
          : ''}
      </p>

      <div className="grid gap-4 md:gap-8 grid-cols-1 md:grid-cols-2 mt-6 place-items-center">
        {Array.isArray(gallery.images) && gallery.images.length > 0 ? (
          gallery.images.map(({src, desc} : GalleryDetailImage, index: number) => (
            <div key={index}>
              <Image
                src={getImageUrl(`/photos-from-trips/${src}`)}
                alt={`${gallery.title} – fotografie č. ${index + 1}`}
                width={800}
                height={500}
                priority={index === 0}
                className="rounded-lg"
              />
              {desc && <p>{desc}</p>} 
            </div>
          ))
        ) : (
          <p>Žádné fotky.</p>
        )}
      </div>
    </main>
  );
}

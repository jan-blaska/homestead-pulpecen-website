import Image from 'next/image';
import { createClient } from '@/utils/supabase/server';
import Link from 'next/link';
import { getImageUrl } from '@/utils/supabase/helpers';
import { GalleryDetailImage, DetailPageParams } from '@/types';

export const revalidate = 60;

export default async function GalleryDetail({ params }: DetailPageParams) {
  const supabase = await createClient();
  const { id } = await params;

  const { data: gallery, error } = await supabase
    .from('photos-from-trips')
    .select('id, title, description, created_at, images')
    .eq('id', id)
    .single();

  console.log("Fetched data for detail", gallery);

  if (error) {
    console.error(error);
    return (
      <main className="p-6">
        <Link href="/photos-from-trips" className="underline">
          &larr; Zpět na Fotogalerii
        </Link>
        <p className="mt-4">Nepodařilo se načíst tuto galerii.</p>
      </main>
    );
  }

  return (
    <main className="mx-auto w-[95%] md:max-w-7xl p-6">
      <Link href="/photos-from-trips">
        &larr; Zpět na Fotogalerii
      </Link>

      <h1 className="mt-8">{gallery.title}</h1>
      {gallery.description && (
        <p className="text-sm opacity-80 mt-1">{gallery.description}</p>
      )}
      <p className="text-xs opacity-60 mt-1">Vytvořeno:{" "}
        {gallery.created_at
          ? new Date(gallery.created_at).toLocaleDateString('cs-CZ')
          : ''}
      </p>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-6">
        {Array.isArray(gallery.images) && gallery.images.length > 0 ? (
          gallery.images.map(({src, desc} : GalleryDetailImage, index: number) => (
            <div key={index}>
              <Image
                src={getImageUrl(`/photos-from-trips/${src}`)}
                alt={`${gallery.title} #${index + 1}`}
                width={500}
                height={300}
                priority={index === 0} // first photo is priority
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

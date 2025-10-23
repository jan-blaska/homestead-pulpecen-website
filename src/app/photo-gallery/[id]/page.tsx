import Image from 'next/image';
import { createClient } from '@/utils/supabase/server';
import Link from 'next/link';
import { getImageUrl } from '@/utils/supabase/helpers';

export const revalidate = 60;

type Params = { params: { id: string } };

export default async function GalleryDetail({ params }: Params) {
  const supabase = await createClient();
  const id = Number(params.id);

  const { data: item, error } = await supabase
    .from('photo-gallery')
    .select('id, title, description, created_at, images_urls')
    .eq('id', id)
    .single();

  console.log("Fetched data for detail", item);

  if (error) {
    console.error(error);
    return (
      <main className="p-6">
        <Link href="/photo-gallery" className="underline">
          &larr; Zpět na Fotogalerii
        </Link>
        <p className="mt-4">Nepodařilo se načíst tuto galerii.</p>
      </main>
    );
  }

  return (
    <main className="mx-auto w-[95%] md:max-w-5xl p-6">
      <Link href="/photo-gallery">
        &larr; Zpět na Fotogalerii
      </Link>

      <h1 className="mt-8">{item.title}</h1>
      {item.description && (
        <p className="text-sm opacity-80 mt-1">{item.description}</p>
      )}
      <p className="text-xs opacity-60 mt-1">Vytvořeno:{" "}
        {item.created_at
          ? new Date(item.created_at).toLocaleDateString('cs-CZ')
          : ''}
      </p>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-6">
        {Array.isArray(item.images_urls) && item.images_urls.length > 0 ? (
          item.images_urls.map((url: string, i: number) => (
            <div key={i} className="relative w-full h-64">
              <Image
                src={getImageUrl(url)}
                alt={`${item.title} #${i + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw,
                       (max-width: 1200px) 50vw,
                       33vw"
                priority={i === 0} // první obrázek priorita
              />
            </div>
          ))
        ) : (
          <p>Žádné fotky.</p>
        )}
      </div>
    </main>
  );
}

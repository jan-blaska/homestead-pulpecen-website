import { PhotoAlbumNames } from "@/types";
import { createClient } from "../client";

type CreateAlbumArgs = {
  table: PhotoAlbumNames;
  title: string;
  createdAt: Date;
};

export async function createAlbum({ table, title, createdAt }: CreateAlbumArgs) {
  const supabase = createClient();

  const { data: authData } = await supabase.auth.getUser();
  console.log("auth user:", authData.user?.id);

  const { data, error } = await supabase
    .from(table)
    .insert({
      title: title.trim(),
      created_at: createdAt.toISOString(),
      images: [],
      cover_image_url: null,
    })
    .select("id")
    .single();

  if (error) {
    return { id: null as number | null, error };
  }

  return { id: data.id as number, error: null };
}


export type AlbumImageDb = { src: string; desc?: string };

type UpdateAlbumImagesArgs = {
  table: PhotoAlbumNames;
  id: number;
  images: AlbumImageDb[];
  cover_image_url: string | null;
};

export async function updateAlbumImages({
  table,
  id,
  images,
  cover_image_url,
}: UpdateAlbumImagesArgs) {
  const supabase = createClient();

  const { error } = await supabase
    .from(table)
    .update({ images, cover_image_url })
    .eq("id", id);

  return { error };
}
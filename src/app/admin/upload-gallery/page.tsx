"use client";

import { FormButton } from '@/components/form/FormButton';
import { ChangeEvent, useRef, useState, useTransition } from 'react';
import { uploadImage } from '@/utils/supabase/storage/client';
import { ImagePlus, X } from "lucide-react";
import { slugify } from './helper-functions';
import { AlbumImageDb, createAlbum, updateAlbumImages } from '@/utils/supabase/database/client';
import { PhotoAlbumNames } from '@/types';
import Image from 'next/image';

const PHOTO_ALBUMS: Record<PhotoAlbumNames, true> = {
  "photo-gallery": true,
  "photos-from-trips": true,
};

const isPhotoAlbumName = (v: string): v is PhotoAlbumNames => v in PHOTO_ALBUMS;


const AdminUploadGallery = () => {
  const [files, setFiles] = useState<File[]>([]);
  
  const imageInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (!fileList) return;

    setFiles((prev) => [...prev, ...Array.from(fileList)]);
  };

  const handleRemoveFile = (indexToRemove: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== indexToRemove));
  };

  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const fd = new FormData(e.currentTarget);
    const category = fd.get("select-category")?.toString() ?? "";
    if (!isPhotoAlbumName(category)) return;
    
    const albumName = fd.get("name-album")?.toString().trim() ?? "";
    if (!albumName) return;

    const createdAtRaw = fd.get("created-at")?.toString().trim() ?? "";
    const createdAt = createdAtRaw ? new Date(createdAtRaw) : new Date();

    handleClickUploadImagesButton(category, albumName, createdAt);
  };
  
  const handleClickUploadImagesButton = (category: PhotoAlbumNames, albumName: string, createdAt: Date) => {
    startTransition(async () => {
      const { id, error } = await createAlbum({ table: category, title: albumName, createdAt: createdAt });

      if (error || !id) {
        console.error("createAlbum failed:", error);
        return;
      }

      const folder = `${id}-${slugify(albumName)}`;
      const albumSlug = slugify(albumName);
      
      const uploads = await Promise.all(
        files.map((file, index) =>
          uploadImage({
            file,
            bucket: category,
            folder,
            filename: `${albumSlug}-${index + 1}`,
          })
        )
      );

      const failed = uploads.find(u => u.error);
      if (failed) {
        console.error("upload failed:", failed.error);
        return;
      }

      const images: AlbumImageDb[] = uploads
          .map(u => u.path)
          .filter((p): p is string => typeof p === "string")
          .map(p => ({ src: p }));
      const cover_image_url = images[0]?.src ?? null;
      
      await updateAlbumImages({ table: category, id, images, cover_image_url });

      setFiles([]);
      if (imageInputRef.current) imageInputRef.current.value = "";
    });
  };

  return (
      <main className='mx-auto flex flex-col items-stretch w-[95%] md:max-w-md flex-1'> 
        <h1 className='mt-12 md:mt-24 mb-4 md:mb-8 text-center'>
          Admin sekce - přidání nového fotoalba
        </h1>
        
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          
          <div className='flex flex-col'>
            <label htmlFor="select-category">Vyberte kategorii</label>
            <select 
              name="select-category" 
              id="select-category"
              className="rounded-md border p-2 text-sm shadow-sm"
              required
            >
              <option value="">-- vyberte --</option>
              <option value="photo-gallery">Fotogalerie</option>
              <option value="photos-from-trips">Fotky z výletů</option>
            </select>
          </div>

          <div className='flex flex-col'>
            <label htmlFor="name-album">Vyplňte název alba</label>
            <input type="text" name="name-album" id="name-album" className="rounded-md border p-2 text-sm shadow-sm" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="created-at">Datum pořízení alba (volitelné)</label>
            <input
              type="datetime-local"
              name="created-at"
              id="created-at"
              className="rounded-md border p-2 text-sm shadow-sm"
            />
          </div>

          <div className='flex flex-col'>
            <label htmlFor="add-photos">Vyberte fotografie</label>
            <input
              type="file"
              hidden
              multiple
              id="add-photos"
              name="add-photos"
              ref={imageInputRef}
              onChange={handleImageChange}
              disabled={isPending}
            />
            <button
              type="button"
              className="py-4 border rounded-lg flex justify-center items-center hover:cursor-pointer"
              onClick={() => imageInputRef.current?.click()}
              disabled={isPending}
            >
              <ImagePlus
                className="w-10 h-10 text-gray-200"
              />
            </button>

            <div className="my-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {files.map((file, index) => {
                const url = URL.createObjectURL(file);
                return (
                  <div key={`${file.name}-${file.size}-${index}`} className="relative aspect-square overflow-hidden rounded-xl border bg-white">
                    <Image
                      src={url}
                      alt={file.name}
                      className="h-full w-full object-cover"
                      onLoad={() => URL.revokeObjectURL(url)}
                    />

                    <button
                      type="button"
                      onClick={() => handleRemoveFile(index)}
                      className="absolute right-2 top-2 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/45 text-white hover:cursor-pointer"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>  

          <FormButton 
            className='py-4'
            disabled={isPending || files.length === 0}
          >
            Přidat fotoalbum
          </FormButton>
        
        </form>


      </main>
    )
}

export default AdminUploadGallery

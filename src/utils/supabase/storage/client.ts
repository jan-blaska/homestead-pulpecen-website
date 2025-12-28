import imageCompression from "browser-image-compression";
import { createClient } from "../client";
import { PhotoAlbumNames } from "@/types";

function getStorage() {
  const { storage } = createClient();
  return storage;
}

type UploadProps = {
  file: File;
  bucket: PhotoAlbumNames;
  folder: string;
  filename: string;
};

export const uploadImage = async ({
  file,
  bucket,
  folder,
  filename,
}: UploadProps) => {
  const ext = file.name.split(".").pop()?.toLowerCase() ?? "jpg";

  try {
    file = await imageCompression(file, {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    });
  } catch {
    return { imageUrl: "", error: "Image compression failed" as const };
  }

  const storage = getStorage();
  const path = `${folder}/${filename}.${ext}`;

  const { error } = await storage
    .from(bucket)
    .upload(path, file, {
      contentType: file.type,
    });

  if (error) {
    return { path: "", error: "Upload failed" as const };
  }

  return { path, error: "" as const };
};

import type { ReactNode } from "react"

export type PhotoAlbumNames = "photo-gallery" | "photos-from-trips";

export type NavLinkProps = {
    href: string
    children: ReactNode
    isActive?: boolean
}

export type DetailPageParams = { params: Promise<{ id: string }> };

export type GalleryDetailImage = {
  src: string,
  desc?: string,
}

export type Horse = {
  id: string;
  name: string;
  alias?: string;
  image: string;
  imageAlt: string;
  imageAspectRatio?: string;
  texts: string[];
  status: "current" | "past";
};

export type Person = {
  id: string;
  name: string;
  image: string;
  imageAlt: string;
  imageAspectRatio?: string;
  texts: string[];
};

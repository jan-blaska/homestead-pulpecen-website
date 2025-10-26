import type { ReactNode } from "react"

export type NavLinkProps = {
    href: string
    children: ReactNode
    isActive?: boolean
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
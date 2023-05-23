import { IPage } from "@/types";
import { IconProps } from "@nimbus-ds/components";
import { HomeIcon, PictureIcon, TagIcon } from "@nimbus-ds/icons";
import { FC } from "react";

export const appRoutes:IPage[] = [
  {
    title: "Inicio",
    name: "inicio",
    slug: "/",
    icon: HomeIcon as FC<IconProps>,
  },
  {
    title: "Galería de ejemplos",
    name: "galeria-de-ejemplos",
    slug: "/examples",
    icon: PictureIcon as FC<IconProps>,
  },
  {
    title: "Productos de mi tienda",
    name: "productos-de-mi-tienda",
    slug: "/products",
    icon: TagIcon as FC<IconProps>,
  },
];

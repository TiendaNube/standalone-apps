import { IPage } from "@/types";
import { IconProps } from "@nimbus-ds/components";
import { HomeIcon, PictureIcon, TagIcon } from "@nimbus-ds/icons";
import { FC } from "react";

export const appRoutes:IPage[] = [
  {
    title: "Início",
    name: "inicio",
    slug: "/",
    icon: HomeIcon as FC<IconProps>,
  },
  {
    title: "Galeria de exemplos",
    name: "galeria-de-exemplos",
    slug: "/examples",
    icon: PictureIcon as FC<IconProps>,
  },
  {
    title: "Produtos da minha loja",
    name: "produtos-da-minha-loja",
    slug: "/products",
    icon: TagIcon as FC<IconProps>,
  },
];

import { IPage } from "@/types";
import { IconProps } from "@nimbus-ds/components";
import { HomeIcon, PictureIcon, TagIcon } from "@nimbus-ds/icons";
import { FC } from "react";

export const appRoutes:IPage[] = [
  {
    title: "home",
    name: "home",
    slug: "/",
    icon: HomeIcon as FC<IconProps>,
  },
  {
    title: "examples-gallery",
    name: "examples-gallery",
    slug: "/examples",
    icon: PictureIcon as FC<IconProps>,
  },
  {
    title: "store-products",
    name: "store-products",
    slug: "/products",
    icon: TagIcon as FC<IconProps>,
  },
];

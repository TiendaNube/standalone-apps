import { IconProps } from "@nimbus-ds/components";
import { ReactNode, SVGProps } from "react";

export interface IPage {
  title: string;
  name: string;
  slug: string;
  icon: React.FC<IconProps>
}

export interface SectionRoutes {
  label: string;
  pages: IPage[];
}

export interface Routes {
  sectionRoutes: SectionRoutes[];
}

// export const routes = {
//   appRoutes,
//   exampleRoutes,
// }

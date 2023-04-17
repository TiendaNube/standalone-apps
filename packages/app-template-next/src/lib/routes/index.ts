import { ReactNode } from "react";
import { appRoutes } from "./app";
import { exampleRoutes } from "./examples";

interface Page {
  title: string;
  name: string;
  slug: string;
  icon?: ReactNode;
}

interface SectionRoutes {
  label: string;
  pages: Page[];
}

export interface Routes {
  sectionRoutes: SectionRoutes[];
}

export const routes = {
  appRoutes,
  exampleRoutes,
}

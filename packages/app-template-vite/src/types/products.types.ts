import { faker } from "@faker-js/faker";

export interface ProductProps {
  id: number;
  name: {
    pt?: string;
    es?: string;
  };
  variants?: IVariant[];
  images: IImage[];
}

interface IVariant {
  id: number;
  image_id: number;
  product_id: number;
  position: number;
  price: string;
  compare_at_price: string;
  promotional_price: null | string;
  stock_management: boolean;
  stock: number;
  weight: string;
  width: string;
  height: string;
  depth: string;
  sku: null | string;
  values: any[];
  barcode: null | string;
  mpn: null | string;
  age_group: null | string;
  gender: null | string;
  created_at: string;
  updated_at: string;
  inventory_levels: IInventoryLevel[];
}

interface IImage {
  id: number;
  product_id: number;
  src: string;
  position: number;
  alt: any[];
  created_at: string;
  updated_at: string;
}


interface IInventoryLevel {
  id: number;
  variant_id: number;
  location_id: string;
  stock: number;
}

export const generateProducts = (count: number, maxId?: number): ProductProps[] => {
  const products: ProductProps[] = [];
  const startId = maxId ? maxId + 1 : 1;

  for (let i = 0; i < count; i++) {
    const id = startId + i;
    products.push({
      id,
      name: {
        pt: faker.commerce.productName(),
      },
      images: [],
      variants: [],
    });
}
  return products;
};

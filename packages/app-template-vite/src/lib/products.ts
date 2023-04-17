import { faker } from "@faker-js/faker";

export interface ProductProps {
  id: number;
  image: string;
  name: string;
  stock: string;
  price: string;
}

export const generateProducts = (count: number, maxId?: number): ProductProps[] => {
  const products: ProductProps[] = [];
  const startId = maxId ? maxId + 1 : 1;

  for (let i = 0; i < count; i++) {
    const id = startId + i;
    products.push({
      id,
      image: faker.image.abstract(72, 72, true),
      name: faker.commerce.productName(),
      stock: faker.random.numeric(),
      price: faker.finance.amount(100, 10000, 2, "$", true),
    });
  }
  return products;
};

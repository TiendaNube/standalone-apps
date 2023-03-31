import { faker } from "@faker-js/faker";

export interface ProductProps {
  id: number;
  image: string;
  name: string;
  stock: string;
  price: string;
}

export const generateProducts = (count: number): ProductProps[] => {
  const products: ProductProps[] = [];
  for (let i = 1; i <= count; i += 1) {
    products.push({
      id: i,
      image: faker.image.abstract(72, 72, true),
      name: faker.commerce.productName(),
      stock: faker.random.numeric(),
      price: faker.finance.amount(100, 10000, 2, "$", true),
    });
  }
  return products;
};

import { faker } from "@faker-js/faker";
import Product from "./product.interface";

export default function generateProduct(): Product {
    return {
      images: [
        {
          src: faker.image.abstract(72, 72, true),
        },
      ],
      name: {
        en: faker.commerce.productName(),
        pt: faker.commerce.productName(),
        es: faker.commerce.productName(),
      },
      variants: [
        {
          price: faker.finance.amount(100, 10000, 2),
          stock_management: true,
          stock: faker.random.numeric(),
          weight: faker.random.numeric(),
          cost: faker.finance.amount(1, 100, 2),
        },
      ],
      categories: [
        +faker.random.numeric(),
      ],
    };
};

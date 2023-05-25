import { faker } from "@faker-js/faker";
import IProduct from "./product.interface";

export default function generateProduct(): IProduct {
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
    };
};

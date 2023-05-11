export default interface Product {
  images: [{ src: string }];
  name: { en: string, pt: string, es: string};
  variants: [ {
    price: string;
    stock_management: boolean;
    stock: string;
    weight: string;
    cost: string;
  }] ;
  categories: [number];
}

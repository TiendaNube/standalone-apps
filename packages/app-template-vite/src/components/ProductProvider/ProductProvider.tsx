import { useState, createContext, useContext, ReactNode } from "react";
import { generateProducts, ProductProps } from "../../lib";

interface IProductContext {
  products: ProductProps[];
  addProducts: (count: number) => void;
  removeProduct: (id: number) => void;
  selectedProducts: Set<number>;
  toggleSelectedProduct: (id: number) => void;
  removeSelectedProducts: () => void;
  setSelectedProducts: React.Dispatch<React.SetStateAction<Set<number>>>;
}

interface IProductProvider {
  children: ReactNode;
  initialProducts: ProductProps[];
}

const ProductContext = createContext<IProductContext | undefined>(undefined);

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
};

export const ProductProvider: React.FC<IProductProvider> = ({ children, initialProducts }) => {
  const [products, setProducts] = useState<ProductProps[]>(initialProducts);
  const [selectedProducts, setSelectedProducts] = useState<Set<number>>(new Set());

  const addProducts = (count: number) => {
    const maxId = Math.max(...products.map((product) => product.id), 0);
    const newProducts = generateProducts(count, maxId);
    setProducts((prevProducts) => [...prevProducts, ...newProducts]);
  };

  const removeProduct = (id: number) => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
  };

  const toggleSelectedProduct = (id: number) => {
    setSelectedProducts((prevState) => {
      const updatedState = new Set(prevState);
      if (prevState.has(id)) {
        updatedState.delete(id);
      } else {
        updatedState.add(id);
      }
      return updatedState;
    });
  };

  const removeSelectedProducts = () => {
    setProducts((prevProducts) => prevProducts.filter((product) => !selectedProducts.has(product.id)));
    setSelectedProducts(new Set());
  };

  return (
    <ProductContext.Provider value={{ products, addProducts, removeProduct, selectedProducts, toggleSelectedProduct, removeSelectedProducts, setSelectedProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;

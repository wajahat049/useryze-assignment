import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import ProductCardVersionA from "./ProductCard/VersionA";
import ProductCardVersionB from "./ProductCard/VersionB";
import "./styles.css";

interface Product {
  id: number;
  title: string;
  price: number;
  oldPrice: number;
  imageUrl: string;
  rating: number;
}

interface ProductGridProps {
  products: Product[];
}

const ProductList: React.FC<ProductGridProps> = ({ products }) => {
  const version: string | null = useSelector(
    (state: RootState) => state?.version
  );

  console.log("Current version: " + version);

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-grid-item">
          {version === "A" ? (
            <ProductCardVersionA
              title={product.title}
              price={product.price}
              imageUrl={product.imageUrl}
            />
          ) : (
            <ProductCardVersionB
              title={product.title}
              price={product.price}
              oldPrice={product.oldPrice}
              imageUrl={product.imageUrl}
              rating={product.rating}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductList;

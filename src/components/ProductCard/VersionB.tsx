import React from "react";
import "../styles.css";

interface ProductCardProps {
  title: string;
  price: number;
  oldPrice: number;
  imageUrl: string;
  rating: number;
}

const ProductCardVersionB: React.FC<ProductCardProps> = ({
  title,
  price,
  oldPrice,
  imageUrl,
  rating,
}) => {
  return (
    <div className="product-card">
      <img src={imageUrl} alt={title} className="product-image" />
      <h3 className="product-title">{title}</h3>
      <div className="product-rating">
        {Array.from({ length: rating }).map((_, index) => (
          <span key={index} className="star">
            ★
          </span>
        ))}
      </div>
      <div className="product-price-container">
        {oldPrice && (
          <span className="product-old-price">${oldPrice.toFixed(2)}</span>
        )}
        <span className="product-price">${price.toFixed(2)}</span>
      </div>
      <button className="add-to-cart-button">Add to Cart</button>
    </div>
  );
};

export default ProductCardVersionB;

// Baseline to create each job card
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

interface ProductProps {
  name: string;
  description: string;
  pricing: string;
  features: string[];
  benefits: string[];
  testimonial: string;
  productImage: string;
}

const ProductCard: React.FC<ProductProps> = ({
  name,
  description,
  pricing,
  features,
  benefits,
  testimonial,
  productImage,
}) => {
  return (
    <div className="col-md-4">
      <div className="m-3">
        <img
          src={productImage}
          alt={`${name} Image`}
          className="card-img-top img-fluid rounded"
        ></img>
        <div className="card" style={{ width: "32rem", height: "72rem" }}>
          <h2 className="product-title m-3">{name}</h2>
          <h5 className="product-description m-3">{description}</h5>
          <h5 className="product-pricing m-3">{pricing}</h5>

          <div className="m-3">
            <h5>Features:</h5>
            <ul>
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="m-3">
            <h5>Benefits:</h5>
            <ul>
              {benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>

          <div className="m-3">
            <h5>Customer Testimonial:</h5>
            <p>{testimonial}</p>
          </div>

          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <button
              className="btn btn-primary me-md-2 btn-lg"
              type="button"
              style={{
                position: "absolute",
                bottom: "25px",
                left: "75%",
              }}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

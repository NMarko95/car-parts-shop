import { useState } from "react";
import "./singleProduct.css";
import ProductInformation from "../../components/productInformation/ProductInformation";

const SingleProduct = () => {
  const images = [
    "https://automarket.blob.core.windows.net/articleimages2223/7793e96a-afbc-4bb9-992c-584d683c6125",
    "https://automarket.blob.core.windows.net/articleimagesplus-prod/be894434-43d6-45b6-bc76-2d24c170de2a",
    "https://automarket.blob.core.windows.net/articleimagesplus-prod/7c9e68ed-9ebe-424d-811c-d100bfd4dcbd",
  ];
  const maxCount = 10;

  const [showImage, setShowImage] = useState(images[0]);
  const [count, setCount] = useState(1);

  const handleCount = (adding) => {
    if (adding) {
      setCount((prev) => {
        const current = prev + 1;
        if (current > maxCount) return prev;
        else return current;
      });
    } else {
      setCount((prev) => {
        const current = prev - 1;
        if (current === 0) return 1;
        else return current;
      });
    }
  };

  return (
    <div className="single-product">
      <div className="single-product-left">
        <img src={showImage} alt="" className="single-product-left-show" />
        <div className="single-product-left-all">
          {images.map((image) => {
            return (
              <img
                src={image}
                alt=""
                className="single-product-left-image"
                onClick={(e) => setShowImage(image)}
              />
            );
          })}
        </div>
      </div>
      <div className="single-product-middle">
        <h3 className="single-product-middle-title">
          FEBI BILSTEIN - 32931 - Ulje za motor (Hemijski proizvodi)
        </h3>
        <span className="single-product-middle-text">
          SKU (šifra artikla): FEB32931
        </span>
      </div>
      <div className="single-product-right">
        <ProductInformation />
        <div className="single-product-right-counter">
          <div
            className="single-product-right-counter-opp"
            onClick={() => handleCount(false)}
          >
            -
          </div>
          <div className="single-product-right-counter-number">{count}</div>
          <div
            className="single-product-right-counter-opp"
            onClick={() => handleCount(true)}
          >
            +
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;

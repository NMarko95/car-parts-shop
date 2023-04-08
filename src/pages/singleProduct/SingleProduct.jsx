import { useState } from "react";
import "./singleProduct.css";
import ProductInformation from "../../components/productInformation/ProductInformation";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import SellIcon from "@mui/icons-material/Sell";

const SingleProduct = () => {
  const images = [
    "https://automarket.blob.core.windows.net/articleimages2223/7793e96a-afbc-4bb9-992c-584d683c6125",
    "https://automarket.blob.core.windows.net/articleimagesplus-prod/be894434-43d6-45b6-bc76-2d24c170de2a",
    "https://automarket.blob.core.windows.net/articleimagesplus-prod/7c9e68ed-9ebe-424d-811c-d100bfd4dcbd",
  ];
  const maxCount = 10;
  const fakeInfo = [
    {
      name: "Tehnička informacija broj:",
      value: "15W40",
    },
    {
      name: "Tehnička informacija broj:",
      value: "15W40",
    },
    {
      name: "Tehnička informacija broj:",
      value: "15W40",
    },
    {
      name: "Tehnička informacija broj:",
      value: "15W40",
    },
    {
      name: "Tehnička informacija broj:",
      value: "15W40",
    },
    {
      name: "Tehnička informacija broj:",
      value: "15W40",
    },
    {
      name: "Tehnička informacija broj:",
      value: "15W40",
    },
    {
      name: "Tehnička informacija broj:",
      value: "15W40",
    },
    {
      name: "Tehnička informacija broj:",
      value: "15W40",
    },
    {
      name: "Tehnička informacija broj:",
      value: "15W40",
    },
    {
      name: "Tehnička informacija broj:",
      value: "15W40",
    },
    {
      name: "Tehnička informacija broj:",
      value: "15W40",
    },
    {
      name: "Tehnička informacija broj:",
      value: "15W40",
    },
    {
      name: "Tehnička informacija broj:",
      value: "15W40",
    },
    {
      name: "Tehnička informacija broj:",
      value: "15W40",
    },
    {
      name: "Tehnička informacija broj:",
      value: "15W40",
    },
    {
      name: "Tehnička informacija broj:",
      value: "15W40",
    },
  ];

  const [showImage, setShowImage] = useState(images[0]);
  const [count, setCount] = useState(1);
  const [specification, setSpecification] = useState(true);

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
    <div className="product">
      <div className="single-product">
        <div className="single-product-left">
          <img src={showImage} alt="" className="single-product-left-show" />
          <div className="single-product-left-all">
            {images.map((image, index) => {
              return (
                <img
                  key={index}
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
      <div className="product-separator">
        <div className="product-separator-item">
          <LocalShippingIcon />
          <span>Besplatna dostava iznad 7.000 rsd</span>
        </div>
        <div className="product-separator-item">
          <AssignmentTurnedInIcon />
          <span>Isporuka narednog dana</span>
        </div>
        <div className="product-separator-item">
          <SellIcon />
          <span>Sjajne cene</span>
        </div>
      </div>
      <div className="product-details">
        <div className="product-details-select">
          <div
            className={`${
              specification
                ? "product-details-button selected"
                : "product-details-button"
            }`}
            onClick={(e) => setSpecification(true)}
          >
            SPECIFIKACIJA
          </div>
          <div
            className={`${
              specification
                ? "product-details-button"
                : "product-details-button selected"
            }`}
            onClick={(e) => setSpecification(false)}
          >
            DOSTAVA ROBE
          </div>
        </div>
        <div
          className={`${
            specification
              ? "product-details-information"
              : "product-details-information smaller"
          }`}
        >
          {specification ? (
            <div className="product-details-information-info">
              {fakeInfo.map((item, index) => {
                const { name, value } = item;
                return (
                  <div
                    className={`${
                      index % 2 === 0
                        ? "product-details-information-info-item colored"
                        : "product-details-information-info-item"
                    }`}
                  >
                    <span>{name}</span>
                    <h4>{value}</h4>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="product-details-information-delivery">
              Isporuku proizvoda poručenih na sajtu vrši kurirska služba City
              Express. Dostava se vrši do naznačene adrese Kupca. Cena isporuke
              za Potrošače je 360,00 dinara sa PDV-om za kupovinu u iznosu do
              7.000,00 dinara sa PDV-om, a za kupovinu preko 7.000,00 dinara sa
              PDV-om je besplatna. Rok isporuke za robu kupljenu u internet
              prodavnici je 1 do 5 radnih dana. Roba se isporučuje Kupcu lično
              ili osobi koju je Kupac naveo kao primaoca pošiljke. Kupac, pre
              potvrđivanja porudžbine, unosi podatke o adresi za dostavu.
              Dostava se vrši u periodu od 8h do 17h radnim danima.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;

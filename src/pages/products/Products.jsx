import { useState } from "react";
import "./products.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Products = () => {
  const [isClicked, setIsClicked] = useState({
    index: "",
    value: false,
  });

  const fakeData = ["Viskoznost", "Proizvodjac", "Zapremina"];

  const iconStyles = {
    height: "25px",
    width: "25px",
    paddingRight: "5px",
    cursor: "pointer",
  };

  return (
    <div className="products">
      <div className="products-search">
        <h3 className="products-search-title">
          URADITE PRETRAGU ODGOVARAJUCEG ULJA PREKO KARAKTERISTIKA
        </h3>
        <div className="products-search-container">
          {fakeData.map((item, index) => {
            return (
              <div className="products-search-info">
                <div
                  className={
                    isClicked.value && index === isClicked.index
                      ? "products-search-info-number clicked"
                      : "products-search-info-number"
                  }
                >
                  {index + 1}
                </div>
                <span
                  className={
                    isClicked.value && index === isClicked.index
                      ? "products-search-info-title clicked"
                      : "products-search-info-title"
                  }
                >
                  {item}
                </span>
                <KeyboardArrowDownIcon
                  onClick={(e) => {
                    setIsClicked({
                      index,
                      value: !isClicked.value,
                    });
                  }}
                  style={
                    isClicked.value && index === isClicked.index
                      ? { ...iconStyles, color: "#f37122" }
                      : iconStyles
                  }
                  className="products-search-arrow"
                />
                {isClicked.value && index === isClicked.index && (
                  <div className="products-search-info-select">
                    <input className="products-search-info-select-input" />
                    <span className="products-search-info-select-text">
                      asdasd
                    </span>
                    <span className="products-search-info-select-text">
                      12qweqw3123
                    </span>
                    <span className="products-search-info-select-text">
                      zcvzcv
                    </span>
                    <span className="products-search-info-select-text">
                      jrrfthdfg
                    </span>
                    <span className="products-search-info-select-text">
                      123sdfdsf123
                    </span>
                    <span className="products-search-info-select-text">
                      qqqqet
                    </span>
                    <span className="products-search-info-select-text">
                      123123
                    </span>
                    <span className="products-search-info-select-text">
                      123123
                    </span>
                    <span className="products-search-info-select-text">
                      123123
                    </span>
                    <span className="products-search-info-select-text">
                      123123
                    </span>
                    <span className="products-search-info-select-text">
                      123123
                    </span>
                    <span className="products-search-info-select-text">
                      123123
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <button className="products-search-btn">PRETRAGA</button>
      </div>
      <div className="products-separator"></div>
      <div className="products-filter"></div>
    </div>
  );
};

export default Products;

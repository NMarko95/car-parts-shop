import { useState } from "react";
import "./products.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

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
              <div className="products-search-info" key={index}>
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
      <div className="products-separator" />
      <div className="products-filter">
        <div className="products-filter-left">
          <div className="products-filter-content">
            <h2 className="products-filter-title">Dostupnost</h2>
            <div className="products-filter-separator" />
            <div className="products-filter-item">
              <input type="checkbox" className="products-filter-checkbox" />
              <div className="products-filter-item-text">NEDOSTUPNO</div>
            </div>
            <div className="products-filter-item">
              <input type="checkbox" className="products-filter-checkbox" />
              <div className="products-filter-item-text">DOSTUPNO</div>
            </div>
          </div>
          <div className="products-filter-content">
            <h2 className="products-filter-title">Proizvodjac</h2>
            <div className="products-filter-separator" />
            <div className="products-filter-item">
              <input type="checkbox" className="products-filter-checkbox" />
              <div className="products-filter-item-text">BELL</div>
            </div>
            <div className="products-filter-item">
              <input type="checkbox" className="products-filter-checkbox" />
              <div className="products-filter-item-text">FEBI BILSTEIN</div>
            </div>
            <div className="products-filter-item">
              <input type="checkbox" className="products-filter-checkbox" />
              <div className="products-filter-item-text">MOBIL</div>
            </div>
            <div className="products-filter-item">
              <input type="checkbox" className="products-filter-checkbox" />
              <div className="products-filter-item-text">MOTUL</div>
            </div>
            <div className="products-filter-item">
              <input type="checkbox" className="products-filter-checkbox" />
              <div className="products-filter-item-text">NISOTEC</div>
            </div>
          </div>
        </div>
        <div className="products-filter-right">
          <h2 className="products-filter-title right">
            Sortiraj prema{" "}
            <select className="products-filter-select sort">
              <option>Podrazumevano</option>
              <option>Cena rastuce</option>
              <option>Cena opadajuce</option>
              <option>Naziv rastuce</option>
              <option>Naziv opadajuce</option>
            </select>
            Prikazite{" "}
            <select className="products-filter-select page">
              <option>3</option>
              <option>6</option>
              <option>9</option>
              <option>12</option>
            </select>{" "}
            po stranici
          </h2>
          <div className="products-filter-separator" />
          <div className="products-filter-list">
            <article className="products-filter-list-item">
              <img
                src="https://automarket.blob.core.windows.net/articleimagesplus-prod/17e980a0-5a57-4dac-a8aa-fe28daea59b6"
                alt=""
                className="products-filter-list-item-image"
              />
              <div className="products-filter-list-item-desc">
                <h3 className="products-filter-list-item-desc-title">
                  MOBIL - 150866 - ULJE ZA MOTOR (HEMIJSKI PROIZVODI)
                </h3>
                <div className="products-filter-list-item-desc-information">
                  <span className="products-filter-list-item-desc-information-text odd">
                    Klasa viskoznosti SAE: 15W40
                  </span>
                  <span className="products-filter-list-item-desc-information-text even">
                    sa logom firme: MOBIL
                  </span>
                  <span className="products-filter-list-item-desc-information-text odd">
                    Tehnička informacija broj: 15W40
                  </span>
                </div>
                <div className="products-filter-list-item-desc-separator">
                  <div className="products-filter-list-item-desc-line"></div>
                  <div className="products-filter-list-item-desc-circle">+</div>
                </div>
                <button className="products-filter-list-item-desc-button">
                  Detalji
                </button>
              </div>
              <div className="products-filter-list-item-info">
                <h4 className="products-filter-list-item-info-title">
                  Konsultujte se i poručite telefonom
                </h4>
                <div className="products-filter-list-item-info-contact phone">
                  <LocalPhoneIcon />
                  <span>060-555-333</span>
                </div>
                <div className="products-filter-list-item-info-contact available">
                  <CheckCircleIcon />
                  <span>Dostupno</span>
                </div>
                <div className="products-filter-list-item-info-price">
                  <span className="text">Cena:</span>
                  <h4 className="price">
                    <h3>865,</h3>
                    <span>20</span> sa PDV-om
                  </h4>
                </div>
                <button className="products-filter-list-item-info-btn cart">
                  <ShoppingCartIcon
                    style={{ height: "20px", width: "20px" }}
                    className="products-filter-list-item-info-icon"
                  />
                  DODAJTE U KORPU
                </button>
                <button className="products-filter-list-item-info-btn wishlist">
                  <FavoriteBorderOutlinedIcon
                    style={{ height: "20px", width: "20px" }}
                    className="products-filter-list-item-info-icon"
                  />
                  DODAJTE U LISTU ZELJA
                </button>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

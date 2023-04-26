import { useEffect, useState } from "react";
import "./products.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ProductInformation from "../../components/productInformation/ProductInformation";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const Products = () => {
  const { gid } = useParams();

  const [isClicked, setIsClicked] = useState({
    index: "",
    value: false,
  });
  const [isChecked, setIsChecked] = useState(false);
  const [products, setProducts] = useState([]);
  const [information, setInformation] = useState([]);
  const [groupInfoLength, setGroupInfoLength] = useState(0);

  const fakeData = ["Viskoznost", "Proizvodjac", "Zapremina"];

  const iconStyles = {
    height: "25px",
    width: "25px",
    paddingRight: "5px",
    cursor: "pointer",
  };

  const baseURL = "https://localhost:7236";

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios.get(`${baseURL}/Product/GetProduct/${gid}`);
      if (data.length !== 0) {
        const response = await Promise.all(
          data.map((p) => {
            return axios.get(
              `${baseURL}/GroupInformationData/GetGroupInformationData/${gid}/${p.id}`
            );
          })
        );
        const newResponse = response.map((r, i) => {
          return { ...data[i], gi: r.data };
        });
        setProducts(newResponse);
      }
    };
    getProducts();
  }, [gid]);

  console.log(products);

  return (
    <div className="products">
      <div className="products-search">
        <h3 className="products-search-title">
          URADITE PRETRAGU ODGOVARAJUCEG ULJA PREKO KARAKTERISTIKA
        </h3>
        <div className="products-search-container">
          {products.length !== 0 &&
            products[0].gi.map((item, index) => {
              return (
                <div className="products-search-info" key={item.id}>
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
                    {item.name}
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
          {products.length !== 0 && (
            <div className="products-filter-list">
              {products.map((p) => {
                const { id, picture, name, gi } = p;
                return (
                  <article
                    className={`${
                      isChecked
                        ? "products-filter-list-item clicked"
                        : "products-filter-list-item"
                    }`}
                    key={id}
                  >
                    <img
                      src={picture}
                      alt=""
                      className={`${
                        isChecked
                          ? "products-filter-list-item-image clicked"
                          : "products-filter-list-item-image"
                      }`}
                    />
                    <div className="products-filter-list-item-desc">
                      <Link
                        to={`/product/${id}`}
                        className="products-filter-list-item-desc-title"
                      >
                        {name}
                      </Link>
                      {gi.length !== 0 && (
                        <div
                          className={`${
                            isChecked
                              ? "products-filter-list-item-desc-information clicked"
                              : "products-filter-list-item-desc-information"
                          }`}
                        >
                          {gi.map((i) => {
                            return (
                              <span
                                key={i.id}
                                className="products-filter-list-item-desc-information-text odd"
                              >
                                {i.name}: {i.data}
                              </span>
                            );
                          })}
                          {/* OVDE UBACI PRODUCT INFORMATION */}
                        </div>
                      )}
                      <div className="products-filter-list-item-desc-separator">
                        <div className="products-filter-list-item-desc-line"></div>
                        <div
                          className="products-filter-list-item-desc-circle"
                          onClick={(e) => setIsChecked(!isChecked)}
                        >
                          {`${isChecked ? "-" : "+"}`}
                        </div>
                      </div>
                      <button className="products-filter-list-item-desc-button">
                        Detalji
                      </button>
                    </div>
                    <ProductInformation />
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;

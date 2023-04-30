import { useEffect, useState } from "react";
import "./products.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ProductInformation from "../../components/productInformation/ProductInformation";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const Products = () => {
  const { gid, gname } = useParams();

  const [isClicked, setIsClicked] = useState({
    index: "",
    value: false,
  });
  const [isChecked, setIsChecked] = useState(false);
  const [products, setProducts] = useState([]);
  const [groupInformation, setGroupInformation] = useState([]);
  //const [productInformation, setProductInformation] = useState([]);
  const [gidCount, setGidCount] = useState([]);

  const iconStyles = {
    height: "25px",
    width: "25px",
    paddingRight: "5px",
    cursor: "pointer",
  };

  const baseURL = "https://localhost:7236";

  useEffect(() => {
    const getProducts = async () => {
      let newGid = gid;
      if (gid === undefined) {
        const { data } = await axios.get(
          `${baseURL}/Group/GetGroupName/${gname}`
        );
        newGid = data.id;
      }
      const { data } = await axios.get(
        `${baseURL}/Product/GetProduct/${newGid}/Podrazumevano`
      );
      if (data.length !== 0) {
        const response = await Promise.all(
          data.map((p) => {
            return axios.get(
              `${baseURL}/GroupInformationData/GetGroupInformationData/${newGid}/${p.id}`
            );
          })
        );
        // creating groupInformation state
        let gInfo = [];
        response[0].data.map((item) => {
          gInfo.push({
            name: item.name,
            id: item.id,
          });
          return item;
        });
        setGroupInformation(gInfo);
        const newResponse = response.map((r, i) => {
          return { ...data[i], gi: r.data };
        });
        setProducts(newResponse);
      }
    };
    getProducts();
  }, [gid, gname]);

  useEffect(() => {
    const getGidCount = async () => {
      if (products.length !== 0) {
        let newGid = gid;
        if (gid === undefined) {
          const { data } = await axios.get(
            `${baseURL}/Group/GetGroupName/${gname}`
          );
          newGid = data.id;
        }
        const responses = await Promise.all(
          products[0].gi.map((groupInfo) => {
            return axios.get(
              `${baseURL}/GroupInformationData/GetGroupInformationDataCount/${newGid}/${groupInfo.id}`
            );
          })
        );
        const newGidCount = responses.map((r) => {
          return r.data;
        });
        setGidCount(newGidCount);
      }
    };
    getGidCount();
  }, [products, gid]);

  const handleSort = async (e) => {
    const sort = e.target.value;
    const { data } = await axios.get(
      `${baseURL}/Product/GetProduct/${gid}/${sort}`
    );
    console.log(data);
    setProducts(data);
  };

  const handleChangeGi = (e) => {
    const title = e.target.parentNode.parentNode.querySelector(
      ".products-search-info-title"
    );
    title.innerHTML = e.target.innerHTML;
    setIsClicked(false);
  };

  const handleSearchGi = async () => {
    const gis = document.querySelectorAll(".products-search-info-title");
    let names = [];
    let data = [];
    groupInformation.map((g, i) => {
      names[i] = g.name;
      data[i] =
        gis[i].innerHTML === g.name ? "" : gis[i].innerHTML.split(" ")[0];
      return g;
    });
    const response = await axios.post(`${baseURL}/Product/GetDataProducts`, {
      names,
      data,
    });
    let newGid = gid;
    if (gid === undefined) {
      const { data } = await axios.get(
        `${baseURL}/Group/GetGroupName/${gname}`
      );
      newGid = data.id;
    }
    if (response.data.length !== 0) {
      const responses = await Promise.all(
        response.data.map((p) => {
          return axios.get(
            `${baseURL}/GroupInformationData/GetGroupInformationData/${newGid}/${p.id}`
          );
        })
      );
      const newResponse = responses.map((r, i) => {
        return { ...response.data[i], gi: r.data };
      });
      setProducts(newResponse);
    } else setProducts([]);
    //setProducts(response.data);
  };

  return (
    <div className="products">
      <div className="products-search">
        <h3 className="products-search-title">
          URADITE PRETRAGU PREKO KARAKTERISTIKA
        </h3>
        <div className="products-search-container">
          {groupInformation.length !== 0 &&
            groupInformation.map((item, index) => {
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
                      {gidCount.length !== 0 &&
                        gidCount[index].map((gc) => {
                          return (
                            <div
                              className="products-search-info-select-text"
                              key={`${gc.data} ${gc.count}`}
                              onClick={(e) => handleChangeGi(e, item.name)}
                            >
                              {gc.data} ({gc.count})
                            </div>
                          );
                        })}
                    </div>
                  )}
                </div>
              );
            })}
        </div>
        <button className="products-search-btn" onClick={handleSearchGi}>
          PRETRAGA
        </button>
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
            <select
              className="products-filter-select sort"
              onChange={handleSort}
            >
              <option value="Podrazumevano">Podrazumevano</option>
              <option value="Cena rastuce">Cena rastuce</option>
              <option value="Cena opadajuce">Cena opadajuce</option>
              <option value="Naziv rastuce">Naziv rastuce</option>
              <option value="Naziv opadajuce">Naziv opadajuce</option>
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
                const { id, picture, name, gi, price, quantity } = p;
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
                      <Link
                        to={`/product/${id}`}
                        className="products-filter-list-item-desc-button"
                      >
                        Detalji
                      </Link>
                    </div>
                    <ProductInformation product={p} />
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

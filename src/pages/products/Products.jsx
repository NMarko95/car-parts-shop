import "./products.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Products = () => {
  return (
    <div className="products">
      <div className="products-search">
        <h3 className="products-search-title">
          URADITE PRETRAGU ODGOVARAJUCEG ULJA PREKO KARAKTERISTIKA
        </h3>
        <div className="products-search-container">
          <div className="products-search-info">
            <div className="products-search-info-number">1</div>
            <span className="products-search-info-title">Viskoznost</span>
            <KeyboardArrowDownIcon
              style={{ height: "25px", width: "25px", paddingRight: "5px" }}
              className="products-search-arrow"
            />
          </div>
          <div className="products-search-info">
            <div className="products-search-info-number">1</div>
            <span className="products-search-info-title">Viskoznost</span>
            <KeyboardArrowDownIcon
              style={{ height: "25px", width: "25px", paddingRight: "5px" }}
              className="products-search-arrow"
            />
          </div>
          <div className="products-search-info">
            <div className="products-search-info-number">1</div>
            <span className="products-search-info-title">Viskoznost</span>
            <KeyboardArrowDownIcon
              style={{ height: "25px", width: "25px", paddingRight: "5px" }}
              className="products-search-arrow"
            />
          </div>
        </div>
        <button className="products-search-btn">PRETRAGA</button>
      </div>
      <div className="products-separator"></div>
      <div className="products-filter"></div>
    </div>
  );
};

export default Products;

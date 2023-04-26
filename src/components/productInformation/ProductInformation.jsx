import "./productInformation.css";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const ProductInformation = () => {
  return (
    <div className="product-information">
      <h4 className="product-information-title">
        Konsultujte se i poručite telefonom
      </h4>
      <div className="product-information-contact phone">
        <LocalPhoneIcon />
        <span>060-555-333</span>
      </div>
      <div className="product-information-contact available">
        <CheckCircleIcon />
        <span>Dostupno</span>
      </div>
      <div className="product-information-price">
        <span className="text">Cena:</span>
        <h3 className="price">
          <h4>865,</h4>
          <span>20</span> sa PDV-om
        </h3>
      </div>
      <button className="product-information-btn cart-btn">
        <ShoppingCartIcon
          style={{ height: "20px", width: "20px" }}
          className="product-information-icon"
        />
        DODAJTE U KORPU
      </button>
      <button className="product-information-btn wishlist">
        <FavoriteBorderOutlinedIcon
          style={{ height: "20px", width: "20px" }}
          className="product-information-icon"
        />
        DODAJTE U LISTU ZELJA
      </button>
    </div>
  );
};

export default ProductInformation;

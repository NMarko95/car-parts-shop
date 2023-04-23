import "./navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import MiniCart from "../miniCart/MiniCart";
import { useState } from "react";

const Navbar = () => {
  const [isDisplayed, setIsDisplayed] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <span>PRODAJA DELOVA</span>
      </div>
      <div className="navbar-options">
        <div className="navbar-search">
          <input
            className="navbar-search-input"
            placeholder="Pretraga artikala po nazivu ili sifri"
          />
          <div className="navbar-search-icon">
            <SearchIcon
              style={{
                color: "#fff",
                fontSize: "20px",
              }}
            />
          </div>
        </div>
        <div className="navbar-phonenumber">
          <LocalPhoneIcon />
          <span>060-555-333</span>
        </div>
        <div className="navbar-login">
          <PersonIcon />
          <span>PRIJAVITE SE</span>
        </div>
        <div className="navbar-wishlist">
          <LocalShippingIcon style={{ color: "#182f3f" }} />
        </div>
        <div
          className="navbar-cart"
          onClick={(e) => setIsDisplayed(!isDisplayed)}
        >
          <ShoppingCartIcon style={{ color: "#182f3f" }} />
          <span>KORPA</span>
          {isDisplayed && <MiniCart />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

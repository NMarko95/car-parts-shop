import { Link } from "react-router-dom";
import "./selectNavbar.css";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

const SelectNavbar = () => {
  const dateEntries = [
    {
      name: "Svi delovi",
      tag: "category",
    },
    {
      name: "Akumulatori",
      tag: "group",
    },
    {
      name: "Gume",
      tag: "group",
    },
    {
      name: "Ulja i tecnosti",
      tag: "subcategory",
    },
    {
      name: "Univerzalni delovi",
      tag: "category",
    },
    {
      name: "Alati i oprema",
      tag: "category",
    },
  ];

  const makeUrl = (item) => {
    if (item.tag === "group") {
      return `/products-name/${item.name}`;
    } else if (item.tag === "subcategory") {
      return `/choose-subcategory-name/${item.name}`;
    } else {
      return `/choose-category-name/${item.name}`;
    }
  };

  return (
    <div className="select-navbar">
      {dateEntries.map((de, i) => {
        return (
          <Link className="select-navbar-item" key={i} to={makeUrl(de)}>
            <LocalShippingIcon style={{ color: "#f37122", fontSize: "24px" }} />
            <span>{de.name}</span>
            <div id="hover" />
          </Link>
        );
      })}
    </div>
  );
};

export default SelectNavbar;

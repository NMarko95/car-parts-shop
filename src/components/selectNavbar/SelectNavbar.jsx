import "./selectNavbar.css";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

const SelectNavbar = () => {
  const dateEntries = [
    "Svi delovi",
    "Gume",
    "Akumulatori",
    "Ulje i tecnosti",
    "Univerzalni delovi",
    "Alati i oprema",
  ];

  return (
    <div className="select-navbar">
      {dateEntries.map((de, i) => {
        return (
          <div className="select-navbar-item" key={i}>
            <LocalShippingIcon style={{ color: "#f37122", fontSize: "24px" }} />
            <span>{de}</span>
            <div id="hover" />
          </div>
        );
      })}
    </div>
  );
};

export default SelectNavbar;

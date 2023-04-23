import "./cart.css";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import SellIcon from "@mui/icons-material/Sell";

const Cart = () => {
  const items = [
    {
      title: "MOBIL - 150866 - Ulje za motor (Hemijski proizvodi)",
      img: "https://automarket.blob.core.windows.net/articleimages2223/24974adb-b870-4db6-95bd-eb72829adeff",
      price: 500,
      quantity: 3,
    },
    {
      title: "MOBIL - 150866 - Ulje za motor (Hemijski proizvodi)",
      img: "https://automarket.blob.core.windows.net/articleimages2223/24974adb-b870-4db6-95bd-eb72829adeff",
      price: 500,
      quantity: 3,
    },
    {
      title: "MOBIL - 150866 - Ulje za motor (Hemijski proizvodi)",
      img: "https://automarket.blob.core.windows.net/articleimages2223/24974adb-b870-4db6-95bd-eb72829adeff",
      price: 500,
      quantity: 3,
    },
  ];

  return (
    <div className="cart">
      <h3>Korpa</h3>
      <span>{items.length} proizvod/a</span>
      <div className="cart-list">
        {items.map((item, i) => {
          const { title, img, quantity, price } = item;
          return (
            <article className="cart-list-item" key={i}>
              <div className="cart-list-item-img-container">
                <img src={img} alt="" className="cart-list-item-img" />
              </div>
              <div className="cart-list-item-title">
                <span>{title}</span>
              </div>
              <div className="cart-list-item-delivery">
                <div className="cart-list-item-delivery-item">
                  <LocalShippingIcon />
                  <span>Besplatna dostava iznad 7.000 rsd</span>
                </div>
                <div className="cart-list-item-delivery-item">
                  <AssignmentTurnedInIcon />
                  <span>Isporuka narednog dana</span>
                </div>
                <div className="cart-list-item-delivery-item">
                  <SellIcon />
                  <span>Sjajne cene</span>
                </div>
              </div>
              <div className="cart-list-item-info">
                <span>Cena:</span>
                <h4>{price} sa PDV-om</h4>
                <input value={quantity} className="cart-list-item-quantity" />
                <div className="cart-list-item-remove">
                  <input type="checkbox" />
                  <span>Uklonite</span>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;

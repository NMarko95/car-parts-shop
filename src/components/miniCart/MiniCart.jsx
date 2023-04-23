import "./miniCart.css";
import { Link } from "react-router-dom";

const MiniCart = () => {
  const items = [
    {
      title: "Motorno ulje",
      img: "https://automarket.blob.core.windows.net/articleimages2223/24974adb-b870-4db6-95bd-eb72829adeff",
      price: 500,
    },
    {
      title: "Motorno ulje",
      img: "https://automarket.blob.core.windows.net/articleimages2223/24974adb-b870-4db6-95bd-eb72829adeff",
      price: 500,
    },
    {
      title: "Motorno ulje",
      img: "https://automarket.blob.core.windows.net/articleimages2223/24974adb-b870-4db6-95bd-eb72829adeff",
      price: 500,
    },
  ];

  return (
    <div className="mini-cart">
      <div className="mini-cart-list">
        {items.map((item, i) => {
          const { img, title, price } = item;
          return (
            <div className="mini-cart-wrapper">
              <article className="mini-cart-item" key={i}>
                <img src={img} alt="" className="mini-cart-img" />
                <div className="mini-cart-info">
                  <h4 className="mini-cart-title">{title}</h4>
                  <span>
                    Cena sa PDV-om: <b>{price}</b>
                  </span>
                </div>
              </article>
              <hr />
            </div>
          );
        })}
      </div>
      <Link className="mini-cart-btn" to="/cart">
        idite na korpu
      </Link>
    </div>
  );
};

export default MiniCart;

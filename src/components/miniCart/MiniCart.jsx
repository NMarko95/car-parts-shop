import { useGlobalContext } from "../../context/Context";
import "./miniCart.css";
import { Link } from "react-router-dom";

const MiniCart = () => {
  /*const items = [
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
  ];*/

  const { cart } = useGlobalContext();

  return (
    <div className="mini-cart">
      <div className="mini-cart-list">
        {cart.length !== 0 ? (
          cart.map((cartItem, i) => {
            const { picture, name, price } = cartItem;
            const shorterName = name.substring(0, 40);
            return (
              <div className="mini-cart-wrapper">
                <article className="mini-cart-item" key={i}>
                  <img src={picture} alt="" className="mini-cart-img" />
                  <div className="mini-cart-info">
                    <h4 className="mini-cart-title">
                      {name.length > shorterName.length
                        ? `${shorterName}...`
                        : name}
                    </h4>
                    <span>
                      Cena sa PDV-om: <b>{price},00</b>
                    </span>
                  </div>
                </article>
                <hr />
              </div>
            );
          })
        ) : (
          <div className="mini-cart-item">No items in cart</div>
        )}
      </div>
      {cart.length !== 0 && (
        <Link className="mini-cart-btn" to="/cart">
          idite na korpu
        </Link>
      )}
    </div>
  );
};

export default MiniCart;

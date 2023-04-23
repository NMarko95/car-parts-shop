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

  const calculateSum = () => {
    let sum = 0;
    items.forEach((item) => {
      const { quantity, price } = item;
      sum += quantity * price;
    });
    return sum;
  };

  const delivery = 360;

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
                <div className="cart-list-item-quantity">{quantity}</div>
                <div className="cart-list-item-remove">
                  <input type="checkbox" />
                  <span>Uklonite</span>
                </div>
              </div>
            </article>
          );
        })}
      </div>
      <div className="cart-buttons">
        <button className="cart-buttons-btn update">
          azuriraj korpu za kupovinu
        </button>
        <button className="cart-buttons-btn pdf">izvezite korpu u pdf</button>
        <button className="cart-buttons-btn continue">nastavi</button>
      </div>
      <hr className="cart-separator" />
      <div className="cart-checkout">
        <div className="cart-checkout-left">
          <div className="cart-checkout-left-container">
            <span>Broj sasije</span>
            <input placeholder="Unesite broj sasije radi provere ispravnosti" />
          </div>
          <div className="cart-checkout-left-container">
            <span>Kod za popust</span>
            <input placeholder="Unesite vas kupon ovde" />
          </div>
          <button className="cart-checkout-left-btn">DODAJTE</button>
        </div>
        <div className="cart-checkout-right">
          <div className="cart-checkout-right-container">
            <span>Iznos:</span>
            <span>{calculateSum()} sa PDV-om</span>
          </div>
          <div className="cart-checkout-right-container">
            <span>Isporuka:</span>
            <span>{delivery} sa PDV-om</span>
          </div>
          <div className="cart-checkout-right-container">
            <span>PDV:</span>
            <span>433,40</span>
          </div>
          <div className="cart-checkout-right-sum">
            <h3>Ukupno:</h3>
            <h3>
              {calculateSum() + delivery} <span>sa PDV-om</span>
            </h3>
          </div>
          <hr />
          <div className="cart-checkout-right-accept">
            <input type="checkbox" />
            Prihvatam Uslove poslovanja i Pravilnik o zaštiti podataka o
            ličnosti (saznajte više)
          </div>
          <button className="cart-checkout-right-button">
            ZAVRSI PORUDZBINU
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

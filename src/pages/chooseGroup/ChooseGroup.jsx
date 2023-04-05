import "./chooseGroup.css";

const ChooseGroup = () => {
  return (
    <div className="choose-group">
      <div className="choose-group-header">
        <img
          src="https://www.prodajadelova.rs/images/thumbs/0005360_ulja-i-tecnosti_300.jpeg"
          alt=""
          className="choose-group-header-image"
        />
        <div className="choose-group-header-info">
          <h3 className="choose-group-header-info-title">Ulja i tecnosti</h3>
          <div className="choose-group-header-info-description">
            Tražite motorno ulje, ulje za menjač, ulje za kočnice ili ulje za
            automatski menjač? Potreban vam je antifriz ili tečnost za staklo?
            Na ProdajaDelova.rs imamo najširi izbor svih vrsta ulja i tečnosti
            za vaše vozilo. U par koraka ćete pronaći sve što vam je potrebno
            bilo da je u pitanju motorno ili kočiono ulje, antifriz ili tečnost
            za vetrobransko staklo. ...
          </div>
          <button className="choose-group-header-info-btn">
            PROCITAJTE VISE
          </button>
        </div>
      </div>
      <div className="choose-group-list"></div>
    </div>
  );
};

export default ChooseGroup;

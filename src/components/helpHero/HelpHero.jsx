import "./helpHero.css";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import ListAltIcon from "@mui/icons-material/ListAlt";

const HelpHero = () => {
  return (
    <div className="help-hero">
      <div className="help-hero-header">
        <h3>Potrebna Vam je pomoc, preporuka ili savet?</h3>
      </div>
      <div className="help-hero-main">
        <img
          src="https://www.prodajadelova.rs/images/uploaded/treba-vam-pomoc_1000.jpeg"
          className="help-hero-img"
          alt=""
        />
        <div className="help-hero-consult">
          <span>Konsultujte se ili porucite telefonom</span>
          <div className="help-hero-consult-phone">
            <LocalPhoneIcon />
            <span>060-555-333</span>
          </div>
          <div className="help-hero-consult-offer">
            <ListAltIcon />
            <span>Zatrazite personalizovanu ponudu</span>
          </div>
        </div>
        <div className="help-hero-description">
          <span>
            Tim stručnih konsultanata će vam vrlo rado pomoći da napravite pravi
            izbor za svoje vozilo. Naše dugogodišnje iskustvo u prodaji auto
            delova pomoći će vam da rešite sve dileme. Pozovite nas svakog
            radnog dana <b>od 8 do 18h, i subotom od 8 do 16h.</b>{" "}
          </span>
          <span>
            Svi auto delovi na jednom mestu: amortizeri, filteri, plivajući
            zamajac, motorna ulja, set kvačila, letva volana, alternator i drugi
            rezervni delovi za vaš automobil. <b>Savremena online prodavnica</b>{" "}
            auto delova, alata i opreme nudi najširi dijapazon delova i cena
            kroz efikasnu pretragu najboljih rezervnih delova za vašeg
            četvorotočkaša, po pristupačnim cenama, uz besplatnu isporuku. Na
            pravom ste mestu!
          </span>
        </div>
      </div>
    </div>
  );
};

export default HelpHero;
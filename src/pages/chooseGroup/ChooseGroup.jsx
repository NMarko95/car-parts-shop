import { useParams } from "react-router-dom";
import "./chooseGroup.css";
import { useEffect, useState } from "react";
import axios from "axios";

const ChooseGroup = () => {
  const { catid } = useParams();

  const [groups, setGroups] = useState([]);

  const baseURL = "https://localhost:7236";

  useEffect(() => {
    const getGroups = async () => {
      const { data } = await axios.get(
        `${baseURL}/Group/GetGroupsFromSubCategory/${catid}`
      );
      setGroups(data);
    };
    getGroups();
  }, [catid]);

  return (
    <div className="choose-group">
      <div className="choose-group-header">
        <img
          src="https://www.prodajadelova.rs/images/thumbs/0005360_ulja-i-tecnosti_300.jpeg"
          alt=""
          className="choose-group-header-image"
        />
        <div className="choose-group-header-info">
          <h3 className="choose-group-title">Ulja i tecnosti</h3>
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
      <div className="choose-group-list">
        <span>
          Svi proizvodi za{" "}
          <h3 className="choose-group-title">Ulja i tecnosti</h3>
        </span>
        <div className="choose-group-select">
          {groups.length !== 0 &&
            groups.map((group) => {
              return (
                <article className="choose-group-select-item" key={group.id}>
                  <img
                    src={group.picture}
                    alt=""
                    className="choose-group-select-item-image"
                  />
                  <h4 className="choose-group-select-item-title">
                    {group.name}
                  </h4>
                </article>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ChooseGroup;

import { useParams, Link } from "react-router-dom";
import "./chooseGroup.css";
import { useEffect, useState } from "react";
import axios from "axios";

const ChooseGroup = () => {
  const { catid } = useParams();

  const [groups, setGroups] = useState([]);
  const [subCategory, setSubCategory] = useState(null);

  const baseURL = "https://localhost:7236";

  useEffect(() => {
    const getSubcategory = async () => {
      const { data } = await axios.get(
        `${baseURL}/SubCategory/GetSubCategory/${catid}`
      );
      setSubCategory(data);
    };
    const getGroups = async () => {
      const { data } = await axios.get(
        `${baseURL}/Group/GetGroupsFromSubCategory/${catid}`
      );
      setGroups(data);
    };
    getSubcategory();
    getGroups();
  }, [catid]);

  if (subCategory !== null) {
    return (
      <div className="choose-group">
        <div className="choose-group-header">
          <img
            src={subCategory.picture}
            alt=""
            className="choose-group-header-image"
          />
          <div className="choose-group-header-info">
            <h3 className="choose-group-title">{subCategory.name}</h3>
            <div className="choose-group-header-info-description">
              {subCategory.details}
            </div>
            <button className="choose-group-header-info-btn">
              PROCITAJTE VISE
            </button>
          </div>
        </div>
        <div className="choose-group-list">
          <span>
            Svi proizvodi{" "}
            <h3 className="choose-group-title">{subCategory.name}</h3>
          </span>
          <div className="choose-group-select">
            {groups.length !== 0 &&
              groups.map((group) => {
                return (
                  <Link
                    to={`/products/${group.id}`}
                    className="choose-group-select-item"
                    key={group.id}
                  >
                    <img
                      src={group.picture}
                      alt=""
                      className="choose-group-select-item-image"
                    />
                    <h4 className="choose-group-select-item-title">
                      {group.name}
                    </h4>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
};

export default ChooseGroup;

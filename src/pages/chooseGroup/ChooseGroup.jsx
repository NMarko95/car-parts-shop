import { useParams, Link, useLocation } from "react-router-dom";
import "./chooseGroup.css";
import { useEffect, useState } from "react";
import axios from "axios";

const ChooseGroup = () => {
  const { catid } = useParams();
  const url = useLocation().pathname.split("/")[1].split("-");
  const urlParam = url[2];
  const urlChoose = url[1];

  const [groups, setGroups] = useState([]);
  const [subCategory, setSubCategory] = useState(null);

  const baseURL = "https://localhost:7236";

  const makeUrl = (id) => {
    if (urlChoose === "subcategory") return `/products/${id}`;
    else return `/choose-subcategory/${id}`;
  };

  useEffect(() => {
    const getSubcategory = async () => {
      let data = [];
      if (urlParam === "name") {
        if (urlChoose === "subcategory") {
          const response = await axios.get(
            `${baseURL}/SubCategory/GetSubCategoryName/${catid}`
          );
          data = response.data;
        } else {
          const response = await axios.get(
            `${baseURL}/Category/GetCategoryName/${catid}`
          );
          data = response.data;
        }
      } else {
        if (urlChoose === "subcategory") {
          const response = await axios.get(
            `${baseURL}/SubCategory/GetSubCategory/${catid}`
          );
          data = response.data;
        } else {
          const response = await axios.get(
            `${baseURL}/Category/GetCategory/${catid}`
          );
          data = response.data;
        }
      }
      setSubCategory(data);
    };
    getSubcategory();
  }, [catid, urlChoose, urlParam]);

  useEffect(() => {
    const getGroups = async () => {
      let data = [];
      if (urlChoose === "subcategory") {
        const response = await axios.get(
          `${baseURL}/Group/GetGroupsFromSubCategory/${subCategory.id}`
        );
        data = response.data;
      } else {
        const response = await axios.get(
          `${baseURL}/SubCategory/GetSubCategoriesFromCategory/${subCategory.id}`
        );
        data = response.data;
      }
      setGroups(data);
    };
    if (subCategory !== null) {
      getGroups();
    }
  }, [subCategory]);

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
                    to={makeUrl(group.id)}
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

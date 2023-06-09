import "./adminPanel.css";
import AdminUsers from "../../components/adminUsers/AdminUsers";
import AdminCategories from "../../components/adminCategories/AdminCategories";
import { useState } from "react";
import AdminSubcategories from "../../components/adminSubcategories/AdminSubcategories";
import AdminGroups from "../../components/adminGroups/AdminGroups";
import AdminEngine from "../../components/adminEngine/AdminEngine";
import AdminVehicle from "../../components/adminVehicle/AdminVehicle";
import AdminProduct from "../../components/adminProduct/AdminProduct";

const AdminPanel = () => {
  const [current, setCurrent] = useState("Users");

  const tabs = [
    "Users",
    "Categories",
    "Subcategories",
    "Engines",
    "Groups",
    "Vehicles",
    "Products",
  ];

  return (
    <div className="admin-panel">
      <div className="admin-panel-asside">
        {tabs.map((tab, index) => {
          return (
            <div
              className="admin-panel-asside-item"
              key={index}
              onClick={(e) => setCurrent(tab)}
            >
              <span>{tab}</span>
            </div>
          );
        })}
      </div>
      <div className="admin-panel-main">
        {current === "Users" ? (
          <AdminUsers />
        ) : current === "Categories" ? (
          <AdminCategories />
        ) : current === "Subcategories" ? (
          <AdminSubcategories />
        ) : current === "Groups" ? (
          <AdminGroups />
        ) : current === "Engines" ? (
          <AdminEngine name={current} />
        ) : current === "Vehicles" ? (
          <AdminVehicle />
        ) : (
          <AdminProduct />
        )}
      </div>
    </div>
  );
};

export default AdminPanel;

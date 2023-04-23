import "./adminPanel.css";
import AdminUsers from "../../components/adminUsers/AdminUsers";
import AdminCategories from "../../components/adminCategories/AdminCategories";
import { useState } from "react";
import AdminSubcategories from "../../components/adminSubcategories/AdminSubcategories";
import AdminGroups from "../../components/adminGroups/AdminGroups";
import AdminEngine from "../../components/adminEngine/AdminEngine";
import AdminVehicle from "../../components/adminVehicle/AdminVehicle";

const AdminPanel = () => {
  const [current, setCurrent] = useState("Users");

  const tabs = [];

  return (
    <div className="admin-panel">
      {}
      <div className="admin-panel-asside">
        <div
          className="admin-panel-asside-item"
          onClick={(e) => setCurrent(e.target.innerHTML)}
        >
          <span>Users</span>
        </div>
        <div
          className="admin-panel-asside-item"
          onClick={(e) => setCurrent(e.target.innerHTML)}
        >
          <span>Categories</span>
        </div>
        <div
          className="admin-panel-asside-item"
          onClick={(e) => setCurrent(e.target.innerHTML)}
        >
          <span>SubCategories</span>
        </div>
        <div
          className="admin-panel-asside-item"
          onClick={(e) => setCurrent(e.target.innerHTML)}
        >
          <span>Engines</span>
        </div>
        <div
          className="admin-panel-asside-item"
          onClick={(e) => setCurrent(e.target.innerHTML)}
        >
          <span>Groups</span>
        </div>
        <div
          className="admin-panel-asside-item"
          onClick={(e) => setCurrent(e.target.innerHTML)}
        >
          <span>Vehicles</span>
        </div>
      </div>
      <div className="admin-panel-main">
        {current === "Users" ? (
          <AdminUsers />
        ) : current === "Categories" ? (
          <AdminCategories />
        ) : current === "SubCategories" ? (
          <AdminSubcategories />
        ) : current === "Groups" ? (
          <AdminGroups />
        ) : current === "Engines" ? (
          <AdminEngine name={current} />
        ) : (
          <AdminVehicle />
        )}
      </div>
    </div>
  );
};

export default AdminPanel;

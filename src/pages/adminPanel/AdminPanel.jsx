import "./adminPanel.css";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

const AdminPanel = () => {
  const emptyUser = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const [isAdding, setIsAdding] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [newUser, setNewUser] = useState(emptyUser);

  let dataEntries = [
    {
      name: "IME:",
      value: "firstName",
    },
    {
      name: "PREZIME:",
      value: "lastName",
    },
    {
      name: "E-MAIL ADRESA:",
      value: "email",
    },
    {
      name: "LOZINKA:",
      value: "password",
    },
  ];

  const handleAdd = () => {
    console.log(newUser);
    setNewUser(emptyUser);
  };

  const openUpdate = (user) => {
    setIsUpdate(true);
    setNewUser(user);
  };

  const handleUpdate = () => {
    console.log(newUser);
    setIsUpdate(false);
    setNewUser(emptyUser);
  };

  return (
    <div className="admin-panel">
      <div className="admin-panel-asside">
        <div className="admin-panel-asside-item">
          <span>Users</span>
        </div>
        <div className="admin-panel-asside-item">
          <span>Users</span>
        </div>
        <div className="admin-panel-asside-item">
          <span>Users</span>
        </div>
        <div className="admin-panel-asside-item">
          <span>Users</span>
        </div>
        <div className="admin-panel-asside-item">
          <span>Users</span>
        </div>
      </div>
      <div className="admin-panel-main">
        <div className="admin-panel-header">
          <h3 className="admin-panel-title">Users list</h3>
          <button
            onClick={(e) => setIsAdding(!isAdding)}
            className="admin-panel-add-btn"
          >
            Forma za dodavanje
          </button>
        </div>
        {isAdding && (
          <div className="admin-panel-add">
            {/* informations about user */}
            {dataEntries.map((entry, index) => {
              const { name, value } = entry;
              return (
                <div className="admin-panel-input" key={index}>
                  <h5 className="admin-panel-input-title">{name}</h5>
                  <input
                    name={value}
                    type={
                      value === "password" || value === "confirm"
                        ? "password"
                        : "text"
                    }
                    className="admin-panel-input-box"
                    onChange={(e) =>
                      setNewUser({ ...newUser, [value]: e.target.value })
                    }
                  />
                </div>
              );
            })}
            <button className="admin-panel-add-btn" onClick={handleAdd}>
              Dodaj korisnika
            </button>
          </div>
        )}
        <div className="admin-panel-main-list">
          <div className="admin-panel-main-header">
            <div className="admin-panel-main-item">ID</div>
            <div className="admin-panel-main-item">Ime</div>
            <div className="admin-panel-main-item">Prezime</div>
            <div className="admin-panel-main-item">E-mail</div>
          </div>
          <div className="admin-panel-main-row">
            <div className="admin-panel-main-item">1</div>
            <div className="admin-panel-main-item">Marko</div>
            <div className="admin-panel-main-item">Nikolic</div>
            <div className="admin-panel-main-item">
              markonikolic735@yahoo.com
            </div>
            <div className="admin-panel-main-item-options">
              <CreateIcon
                onClick={(e) =>
                  openUpdate({
                    firstName: "Marko",
                    lastName: "Nikolic",
                    email: "markonikolic735@yahoo.com",
                    password: "123",
                  })
                }
                style={{ color: "#182f3f", cursor: "pointer" }}
              />
              <DeleteIcon style={{ color: "#182f3f", cursor: "pointer" }} />
            </div>
          </div>
          <div className="admin-panel-main-row">
            <div className="admin-panel-main-item">1</div>
            <div className="admin-panel-main-item">Marko</div>
            <div className="admin-panel-main-item">Nikolic</div>
            <div className="admin-panel-main-item">
              markonikolic735@yahoo.com
            </div>
            <div className="admin-panel-main-item-options">
              <CreateIcon style={{ color: "#182f3f", cursor: "pointer" }} />
              <DeleteIcon style={{ color: "#182f3f", cursor: "pointer" }} />
            </div>
          </div>
          <div className="admin-panel-main-row">
            <div className="admin-panel-main-item">1</div>
            <div className="admin-panel-main-item">Marko</div>
            <div className="admin-panel-main-item">Nikolic</div>
            <div className="admin-panel-main-item">
              markonikolic735@yahoo.com
            </div>
            <div className="admin-panel-main-item-options">
              <CreateIcon style={{ color: "#182f3f", cursor: "pointer" }} />
              <DeleteIcon style={{ color: "#182f3f", cursor: "pointer" }} />
            </div>
          </div>
          <div className="admin-panel-main-row">
            <div className="admin-panel-main-item">1</div>
            <div className="admin-panel-main-item">Marko</div>
            <div className="admin-panel-main-item">Nikolic</div>
            <div className="admin-panel-main-item">
              markonikolic735@yahoo.com
            </div>
            <div className="admin-panel-main-item-options">
              <CreateIcon style={{ color: "#182f3f", cursor: "pointer" }} />
              <DeleteIcon style={{ color: "#182f3f", cursor: "pointer" }} />
            </div>
          </div>
          <div className="admin-panel-main-row">
            <div className="admin-panel-main-item">1</div>
            <div className="admin-panel-main-item">Marko</div>
            <div className="admin-panel-main-item">Nikolic</div>
            <div className="admin-panel-main-item">
              markonikolic735@yahoo.com
            </div>
            <div className="admin-panel-main-item-options">
              <CreateIcon style={{ color: "#182f3f", cursor: "pointer" }} />
              <DeleteIcon style={{ color: "#182f3f", cursor: "pointer" }} />
            </div>
          </div>
          <div className="admin-panel-main-row">
            <div className="admin-panel-main-item">1</div>
            <div className="admin-panel-main-item">Marko</div>
            <div className="admin-panel-main-item">Nikolic</div>
            <div className="admin-panel-main-item">
              markonikolic735@yahoo.com
            </div>
            <div className="admin-panel-main-item-options">
              <CreateIcon style={{ color: "#182f3f", cursor: "pointer" }} />
              <DeleteIcon style={{ color: "#182f3f", cursor: "pointer" }} />
            </div>
          </div>
          <div className="admin-panel-main-row">
            <div className="admin-panel-main-item">1</div>
            <div className="admin-panel-main-item">Marko</div>
            <div className="admin-panel-main-item">Nikolic</div>
            <div className="admin-panel-main-item">
              markonikolic735@yahoo.com
            </div>
            <div className="admin-panel-main-item-options">
              <CreateIcon style={{ color: "#182f3f", cursor: "pointer" }} />
              <DeleteIcon style={{ color: "#182f3f", cursor: "pointer" }} />
            </div>
          </div>
          <div className="admin-panel-main-row">
            <div className="admin-panel-main-item">1</div>
            <div className="admin-panel-main-item">Marko</div>
            <div className="admin-panel-main-item">Nikolic</div>
            <div className="admin-panel-main-item">
              markonikolic735@yahoo.com
            </div>
            <div className="admin-panel-main-item-options">
              <CreateIcon style={{ color: "#182f3f", cursor: "pointer" }} />
              <DeleteIcon style={{ color: "#182f3f", cursor: "pointer" }} />
            </div>
          </div>
        </div>
      </div>
      {isUpdate && (
        <div className="admin-panel-update">
          <div className="admin-panel-update-wrapper">
            {/* informations about user */}
            {dataEntries.map((entry, index) => {
              const { name, value } = entry;
              return (
                <div className="admin-panel-update-input" key={index}>
                  <h5 className="admin-panel-input-title">{name}</h5>
                  <input
                    value={newUser[value]}
                    name={value}
                    type={
                      value === "password" || value === "confirm"
                        ? "password"
                        : "text"
                    }
                    className="admin-panel-update-input-box"
                    onChange={(e) =>
                      setNewUser({ ...newUser, [value]: e.target.value })
                    }
                  />
                </div>
              );
            })}
            <button onClick={handleUpdate} className="admin-panel-add-btn">
              Azuriraj
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;

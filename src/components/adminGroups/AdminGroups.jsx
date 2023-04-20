import "./adminGroups.css";
import { useEffect, useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

const AdminGroups = () => {
  const emptyCategory = {
    name: "",
    picture: "",
    details: "",
    subCategories: [],
  };

  let dataEntries = [
    {
      name: "IME:",
      value: "name",
    },
    {
      name: "SLIKA:",
      value: "picture",
    },
    {
      name: "OPIS:",
      value: "details",
    },
  ];

  const [newCategory, setNewCategory] = useState(emptyCategory);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);

  const handleAdd = async () => {
    const newSubCategories = newCategory.subCategories.map((sc) => {
      return sc.id;
    });
    const { data } = await axios.post(
      "https://localhost:7236/Group/InputGroup",
      newCategory
    );
    await axios.post(
      `https://localhost:7236/BelongCategory/InputSubCategory/${data}`,
      newSubCategories
    );
    const newCreatedSubCategory = { ...newCategory, id: data };
    setSubCategories([...subCategories, newCreatedSubCategory]);
    setNewCategory(emptyCategory);
    setIsAdding(false);
  };

  const readFileDataAsBase64 = (e) => {
    const file = e.target.files[0];

    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (event) => {
        resolve(event.target.result);
      };

      reader.onerror = (err) => {
        reject(err);
      };

      reader.readAsDataURL(file);
    });
  };

  const handleUploadFile = (e) => {
    readFileDataAsBase64(e).then((data) => {
      setNewCategory({ ...newCategory, picture: data });
    });
  };

  /*const cancelUpdate = () => {
        setIsUpdate(false);
        setNewUser(emptyUser);
      };*/

  /*const openUpdate = (user) => {
        setIsUpdate(true);
        setNewUser(user);
      };*/

  /*const handleUpdate = async () => {
        const updatedUser = { ...newUser, password: "" };
        await axios.put("https://localhost:7236/User/UpdateUser", updatedUser);
        await axios.put(
          "https://localhost:7236/User/UpdateAdminEmail",
          updatedUser
        );
        setUsers(() =>
          users.map((user) => {
            if (user.id === newUser.id) return newUser;
            else return user;
          })
        );
        setIsUpdate(false);
        setNewUser(emptyUser);
      };*/

  /*const handleDelete = async (id) => {
        await axios.delete(`https://localhost:7236/User/DeleteUser/${id}`);
        setUsers(users.filter((user) => user.id !== id));
      };*/

  const handleChangeCategory = (e) => {
    if (e.target.value === "category") return;
    const selectedId = parseInt(e.target.value);
    const selectedCategory = categories.find((cat) => selectedId === cat.id);
    const newCategories = [...newCategory.subCategories, selectedCategory];
    setNewCategory({ ...newCategory, subCategories: newCategories });
    setCategories(categories.filter((cat) => selectedId !== cat.id));
  };

  const handleRemoveCategory = (id) => {
    const selectedId = parseInt(id);
    const selectedCategory = newCategory.subCategories.find(
      (cat) => selectedId === cat.id
    );
    const newCategories = [...categories, selectedCategory];
    const newSubCategories = newCategory.subCategories.filter(
      (cat) => selectedId !== cat.id
    );
    setNewCategory({ ...newCategory, subCategories: newSubCategories });
    setCategories(newCategories);
  };

  useEffect(() => {
    const getCategories = async () => {
      const { data } = await axios.get(
        "https://localhost:7236/SubCategory/GetSubCategories"
      );
      setCategories(data);
    };
    const getGroups = async () => {
      const { data } = await axios.get(
        "https://localhost:7236/Group/GetGroups"
      );
      setSubCategories(data);
    };
    getCategories();
    getGroups();
  }, []);

  return (
    <>
      <div className="admin-users-header">
        <h3 className="admin-users-title">Groups list</h3>
        <button
          onClick={(e) => setIsAdding(!isAdding)}
          className="admin-users-add-btn"
        >
          Forma za dodavanje
        </button>
      </div>
      {isAdding && (
        <div className="admin-users-add-subcategories">
          <div className="admin-users-add-select">
            {categories.length !== 0 && (
              <div className="admin-users-input">
                <h5 className="admin-users-input-title">Category:</h5>
                <select
                  className="admin-users-input-box"
                  onChange={handleChangeCategory}
                >
                  <option value="category">Category</option>
                  {categories.map((cat) => {
                    const { id, name } = cat;
                    return (
                      <option key={id} value={id}>
                        {name}
                      </option>
                    );
                  })}
                </select>
              </div>
            )}
            <div className="admin-users-add-select-box">
              {newCategory.subCategories.length !== 0 &&
                newCategory.subCategories.map((es, index) => {
                  return (
                    <div
                      className="admin-users-add-select-box-item"
                      key={index}
                    >
                      <span>{es.name}</span>
                      <span
                        className="admin-users-add-remove-box-item"
                        onClick={(e) => handleRemoveCategory(es.id)}
                      >
                        X
                      </span>
                    </div>
                  );
                })}
            </div>
          </div>
          {/* informations about user */}
          <div className="admin-users-add-select">
            {dataEntries.map((entry, index) => {
              const { name, value } = entry;
              return (
                <div className="admin-users-input" key={index}>
                  <h5 className="admin-users-input-title">{name}</h5>
                  <input
                    name={value}
                    type={value === "picture" ? "file" : "text"}
                    className="admin-users-input-box"
                    onChange={(e) =>
                      value === "picture"
                        ? handleUploadFile(e)
                        : setNewCategory({
                            ...newCategory,
                            [value]: e.target.value,
                          })
                    }
                  />
                </div>
              );
            })}
          </div>
          <button
            style={{ width: "20%", alignSelf: "center" }}
            className="admin-users-add-btn"
            onClick={handleAdd}
          >
            Dodaj Kategoriju
          </button>
        </div>
      )}
      <div className="admin-users-main-list">
        <div className="admin-users-main-header">
          <div className="admin-users-main-item">ID</div>
          <div className="admin-users-main-item">Ime</div>
          {/*<div className="admin-users-main-item">Slika</div>*/}
          <div className="admin-users-main-item">Detalji</div>
        </div>
        {subCategories.length !== 0 &&
          subCategories.map((user) => {
            const { id, name, details, picture } = user;
            return (
              <div className="admin-users-main-row" key={id}>
                <div className="admin-users-main-item">{id}</div>
                <div className="admin-users-main-item">{name}</div>
                <div className="admin-users-main-item">{details}</div>
                {/*<div className="admin-users-main-item">{picture}</div>*/}
                <div className="admin-users-main-item-options">
                  <CreateIcon
                    /*onClick={(e) =>
                          openUpdate({
                            id,
                            name,
                            details,
                            picture,
                          })
                        }*/
                    style={{ color: "#182f3f", cursor: "pointer" }}
                  />
                  <DeleteIcon
                    /*onClick={(e) => handleDelete(id)}*/
                    style={{ color: "#182f3f", cursor: "pointer" }}
                  />
                </div>
              </div>
            );
          })}
      </div>
      {isUpdate && (
        <div className="admin-users-update">
          <div className="admin-users-update-wrapper">
            <div
              className="admin-users-update-cancel" /*onClick={cancelUpdate}*/
            >
              X
            </div>
            {dataEntries.map((entry, index) => {
              const { name, value } = entry;
              return (
                <div className="admin-users-update-input" key={index}>
                  <h5 className="admin-users-input-title">{name}</h5>
                  <input
                    value={newCategory[value]}
                    name={value}
                    type={
                      value === "password" || value === "confirm"
                        ? "password"
                        : "text"
                    }
                    className="admin-users-update-input-box"
                    onChange={(e) =>
                      setNewCategory({
                        ...newCategory,
                        [value]: e.target.value,
                      })
                    }
                  />
                </div>
              );
            })}
            <button /*onClick={handleUpdate}*/ className="admin-users-add-btn">
              Azuriraj
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminGroups;

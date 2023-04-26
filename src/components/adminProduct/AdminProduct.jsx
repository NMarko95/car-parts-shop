import { useEffect, useRef, useState } from "react";
import "./adminProduct.css";
import axios from "axios";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";

const AdminProduct = () => {
  const emptyProduct = {
    name: "",
    picture: "",
    quantity: 0,
    price: 0,
  };

  const baseURL = "https://localhost:7236";

  const dataEntries = [
    {
      name: "Ime",
      value: "name",
    },
    {
      name: "Slika",
      value: "picture",
    },
    {
      name: "Kolicina",
      value: "quantity",
    },
    {
      name: "Cena",
      value: "price",
    },
  ];

  const [products, setProducts] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [group, setGroup] = useState(null);
  const [groupInformation, setGroupInformation] = useState([]);
  const [product, setProduct] = useState(emptyProduct);
  const [productInformation, setProductInformation] = useState([]);
  const [selectedVehicles, setSelectedVehicles] = useState([]);
  const [chooseVehicles, setChooseVehicles] = useState([]);

  const piRefName = useRef();
  const piRefData = useRef();

  const handleChangeGroup = (e) => {
    setSelectedGroup(e.target.value);
  };

  const handleAdd = async () => {
    // ubaci product zavrseno
    // ubaci groupInformationData zavrseno
    // ubaci vezu izmedju produkta i grupe zavrseno
    // ubaci productInformation i productInformationData zavrseno
    // ubaci vehicle -> kasnije

    // creating groupInformationData
    const inputs = document.querySelectorAll(".product-add-information-input");
    const groupInformations = [];
    inputs.forEach((input, index) => {
      groupInformations.push({
        data: input.value,
        group_id: parseInt(selectedGroup),
        groupInformation_id: groupInformation[index].id,
      });
    });
    // adding product
    let newProduct = {
      ...product,
      quantity: parseInt(product.quantity),
      price: parseInt(product.price),
    };
    const { data } = await axios.post(
      `${baseURL}/Product/InputProduct`,
      newProduct
    );
    newProduct = { ...newProduct, id: data };
    setProducts([...products, newProduct]);
    await Promise.all(
      groupInformations.map((gi) => {
        axios.post(
          `${baseURL}/GroupInformationData/InputGroupInformationData`,
          gi
        );
      })
    ).then(() => console.log("Svi su dodati"));
    await axios.post(
      `${baseURL}/ProductBelongGroup/InputProductInGroup/${data}/${parseInt(
        selectedGroup
      )}`
    );
    console.log("Dodata je i veza");
  };

  const handleAddPi = async () => {
    let pi = {
      name: piRefName.current.value,
    };
    const { data: piId } = await axios.post(
      `${baseURL}/ProductInformation/InputProductInformation/${selectedProduct.id}`,
      pi
    );
    pi = {
      data: piRefData.current.value,
      productInformation_id: piId,
      product_id: selectedProduct.id,
    };
    const { data } = await axios.post(
      `${baseURL}/ProductInformationData/InputProductInformationData`,
      pi
    );
    const newPi = {
      id: data,
      name: piRefName.current.value,
      data: piRefData.current.value,
    };
    piRefData.current.value = "";
    piRefName.current.value = "";
    setProductInformation([...productInformation, newPi]);
  };

  const addIntoSelected = async (e) => {
    const id = parseInt(e.target.value);
    await axios.post(
      `${baseURL}/VehicleBelongProduct/InputVehicleBelongProduct/${id}/${selectedProduct.id}`
    );
    const vehicle = chooseVehicles.find((cv) => cv.id === id);
    setSelectedVehicles([...selectedVehicles, vehicle]);
    const newChoose = chooseVehicles.filter((cv) => cv.id !== id);
    setChooseVehicles(newChoose);
  };

  const backToChoose = async (vehicle) => {
    await axios.delete(
      `${baseURL}/VehicleBelongProduct/DeleteVehicleBelongProduct/${vehicle.id}/${selectedProduct.id}`
    );
    setChooseVehicles([...chooseVehicles, vehicle]);
    const newSelected = selectedVehicles.filter((sv) => sv.id !== vehicle.id);
    setSelectedVehicles(newSelected);
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
      console.log(data);
      //setProduct({ ...product, picture: data });
    });
  };

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios.get(`${baseURL}/Product/GetProducts`);
      const newpRoducts = data.map((d) => {
        const { picture, ...rest } = d;
        return rest;
      });
      setProducts(newpRoducts);
    };
    const getGroups = async () => {
      const { data } = await axios.get(`${baseURL}/Group/GetGroups`);
      const newGroups = data.map((d) => {
        const { picture, ...rest } = d;
        return rest;
      });
      setGroups(newGroups);
    };
    const getVehicles = async () => {
      const { data } = await axios.get(`${baseURL}/Vehicle/GetVehicles`);
      setVehicles(data);
    };
    getProducts();
    getGroups();
    getVehicles();
  }, []);

  useEffect(() => {
    const getGroupInformation = async () => {
      const { data } = await axios.get(
        `${baseURL}/GroupInformation/GetGroupInformations/${selectedGroup}`
      );
      setGroupInformation(data);
    };
    const getGroup = async () => {
      const { data } = await axios.get(
        `${baseURL}/Group/GetGroup/${selectedGroup}`
      );
      setGroup(data);
    };
    if (selectedGroup !== "") {
      getGroupInformation();
      getGroup();
    }
    if (!selectedGroup.hasVehicle) {
      setChooseVehicles([]);
      setSelectedVehicles([]);
    }
  }, [selectedGroup]);

  useEffect(() => {
    const getPi = async () => {
      if (selectedProduct !== null) {
        const { data } = await axios.get(
          `${baseURL}/ProductInformation/GetProductInformation/${selectedProduct.id}`
        );
        setProductInformation(data);
      }
    };
    const check = (data, v, bool) => {
      let exists = true;
      data.map((d) => {
        if (v.id !== d.id) {
          exists = false;
          return d;
        }
      });
      return bool ? exists : !exists;
    };
    const getVehicles = async () => {
      if (selectedProduct !== null) {
        const { data } = await axios.get(
          `${baseURL}/VehicleBelongProduct/GetProductVehicle/${selectedProduct.id}`
        );
        let vehiclesSelected = vehicles.filter((v) => check(data, v, false));
        let vehiclesChoose = vehicles.filter((v) => check(data, v, true));
        setChooseVehicles(vehiclesChoose);
        setSelectedVehicles(vehiclesSelected);
      }
    };
    getPi();
    if (group?.hasVehicle) getVehicles();
    else {
      setChooseVehicles([]);
      setSelectedVehicles([]);
    }
  }, [selectedProduct]);

  return (
    <>
      <div className="admin-users-main-list">
        <div className="admin-users-main-header">
          <div className="admin-users-main-item">ID</div>
          {dataEntries.map((de, i) => {
            if (de.name !== "Slika")
              return (
                <div className="admin-users-main-item" key={i}>
                  {de.name}
                </div>
              );
          })}
        </div>
        {products.length !== 0 &&
          products.map((obj) => {
            return (
              <div
                className="admin-users-main-row"
                key={obj.id}
                onClick={(e) => setSelectedProduct(obj)}
              >
                {Object.entries(obj).map((entry) => {
                  return (
                    <div className="admin-users-main-item">{entry[1]}</div>
                  );
                })}
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
      <div className="product-add">
        <div className="product-add-info">
          <select className="product-add-select" onChange={handleChangeGroup}>
            <option value="">Groups</option>
            {groups.map((group) => {
              const { id, name } = group;
              return (
                <option key={id} value={id}>
                  {name}
                </option>
              );
            })}
          </select>
          <div className="product-add-information">
            {groupInformation.map((gi) => {
              return (
                <div className="product-add-information-item" key={gi.id}>
                  <span>{gi.name}</span>
                  <input
                    className="product-add-information-input"
                    placeholder={`${gi.name}...`}
                  />
                </div>
              );
            })}
          </div>
          <div className="admin-users-add">
            {/* informations about user */}
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
                        : setProduct({ ...product, [value]: e.target.value })
                    }
                  />
                </div>
              );
            })}
          </div>
          <button onClick={handleAdd} className="admin-users-add-btn">
            Dodaj proizvod
          </button>
        </div>
        {selectedProduct !== null && (
          <div className="product-add-pi">
            <h4>{selectedProduct.name}</h4>
            {productInformation.length !== 0 && (
              <div className="product-add-pi-list">
                {productInformation.map((pi) => {
                  const { id, name, data } = pi;
                  return (
                    <>
                      <div key={id} className="product-add-pi-list-item">
                        <span>{name}</span>
                        <span>{data}</span>
                      </div>
                    </>
                  );
                })}
              </div>
            )}
            <div className="product-add-pi-add">
              <input ref={piRefName} />
              <input ref={piRefData} />
              <button onClick={handleAddPi}>Dodaj</button>
            </div>
          </div>
        )}
        {selectedProduct !== null && (
          <div className="product-add-vehicle-add">
            <select onChange={addIntoSelected}>
              <option value="">Vehicles</option>
              {chooseVehicles.map((v) => {
                return (
                  <option key={v.id} value={v.id}>
                    {v.brand} {v.model} {v.series}
                  </option>
                );
              })}
            </select>
            <div className="product-add-vehicle-list">
              {selectedVehicles.map((sv) => {
                return (
                  <div
                    className="product-add-vehicle-item"
                    key={sv.id}
                    onClick={(e) => backToChoose(sv)}
                  >
                    {sv.brand} {sv.model} {sv.series}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AdminProduct;

import AdminComponent from "../../custom/AdminComponent/AdminComponent";

const AdminEngine = ({ name }) => {
  const emptyObject = {
    name: "",
    power: "",
    volume: "",
  };

  const baseUrl = "https://localhost:7236/Engine";
  const urls = [`${baseUrl}/InputEngine`, `${baseUrl}/GetEngines`];

  let dataEntries = [
    {
      name: "Naziv",
      value: "name",
    },
    {
      name: "Snaga",
      value: "power",
    },
    {
      name: "Zapremina",
      value: "volume",
    },
  ];

  return (
    <AdminComponent
      name={name}
      emptyObject={emptyObject}
      urls={urls}
      dataEntries={dataEntries}
    />
  );
};

export default AdminEngine;

import AdminComponent from "../../custom/AdminComponent/AdminComponent";

const AdminType = ({ name }) => {
  const emptyObject = {
    name: "",
    picture: "",
  };

  const baseUrl = "https://localhost:7236/Type";
  const urls = [`${baseUrl}/InputType`, `${baseUrl}/GetTypes`];

  let dataEntries = [
    {
      name: "Naziv",
      value: "name",
    },
    {
      name: "Slika",
      value: "picture",
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

export default AdminType;

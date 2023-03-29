import { useState } from "react";
import "./login.css";

const Login = () => {
  const [loggedUser, setloggedUser] = useState({
    email: "",
    password: "",
  });

  let dataEntries = [
    {
      name: "E-MAIL ADRESA:",
      value: "email",
    },
    {
      name: "LOZINKA:",
      value: "password",
    },
  ];

  const handleLogin = () => {
    // izmeni funkciju kad se doda api za registraciju
    console.log(loggedUser);
  };

  return (
    <div className="login">
      <div className="login-wrapper">
        <h3>UNESITE PODATKE VASEG NALOGA</h3>
        <div className="login-form">
          {/* informations about user */}
          {dataEntries.map((entry, index) => {
            const { name, value } = entry;
            return (
              <div className="login-input" key={index}>
                <h5 className="login-input-title">{name}</h5>
                <input
                  name={value}
                  type={
                    value === "password" || value === "confirm"
                      ? "password"
                      : "text"
                  }
                  className="login-input-box"
                  onChange={(e) =>
                    setloggedUser({ ...loggedUser, [value]: e.target.value })
                  }
                />
              </div>
            );
          })}
        </div>
        <button className="login-btn" onClick={handleLogin}>
          Prijavite se
        </button>
      </div>
    </div>
  );
};

export default Login;

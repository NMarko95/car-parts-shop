import { useState } from "react";
import "./register.css";
import axios from "axios";

const Register = () => {
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

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
    {
      name: "POTVRDITE LOZINKU:",
      value: "confirm",
    },
  ];

  const handleRegister = async() => {
    // izmeni funkciju kad se doda api za registraciju
    const confirmPassword = document.getElementsByName("confirm")[0].value;
    console.log(confirmPassword);
    console.log(newUser);
    await axios.post("https://localhost:7236/User/Register", newUser)
    console.log("User registered");
  };

  return (
    <div className="register">
      <div className="register-wrapper">
        <h3>VASI LICNI PODACI</h3>
        <div className="register-form">
          {/* informations about user */}
          {dataEntries.map((entry, index) => {
            const { name, value } = entry;
            return (
              <div className="register-input" key={index}>
                <h5 className="register-input-title">{name}</h5>
                <input
                  name={value}
                  type={
                    value === "password" || value === "confirm"
                      ? "password"
                      : "text"
                  }
                  className="register-input-box"
                  onChange={(e) =>
                    setNewUser({ ...newUser, [value]: e.target.value })
                  }
                />
              </div>
            );
          })}
        </div>
        <div className="register-terms">
          <input type="checkbox" />
          <span>Prihvatam uslove zastite privatnosti</span>
        </div>
        <button className="register-btn" onClick={handleRegister}>
          Registrujte se
        </button>
      </div>
    </div>
  );
};

export default Register;

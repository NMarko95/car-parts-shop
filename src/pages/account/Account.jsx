import { useState } from "react";
import "./account.css";
import axios from "axios";
import AccountInformation from "../../components/accountInformation/AccountInformation";
import { useGlobalContext } from "../../context/Context";
import AccountTransactions from "../../components/accountTransactions/AccountTransactions";

const Account = () => {
  const [current, setCurrent] = useState("Informacije o korisniku");

  const { user } = useGlobalContext();

  const tabs = [
    "Informacije o korisniku",
    "Lista zelja",
    "Porudzbine",
    "Promena sifre",
  ];

  return (
    <div className="account">
      <div className="account-asside">
        <h3 className="account-main-title">Moj nalog</h3>
        <hr className="account-separator" />
        {tabs.map((tab, i) => {
          return (
            <div
              className="account-asside-item"
              key={i}
              onClick={(e) => setCurrent(tab)}
            >
              {tab}
            </div>
          );
        })}
      </div>
      <>
        {current === "Informacije o korisniku" ? (
          <AccountInformation user={user} />
        ) : (
          <AccountTransactions user={user} />
        )}
      </>
    </div>
  );
};

export default Account;

import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  // let btnName="Login";

  const [btnName, setBtnName] = useState("Login");

  return (
    <>
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL} alt="app logo" />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact</li>
            <li>Cart</li>
            <button
              className="loginBtn"
              onClick={() => {
                setBtnName(btnName == "Login" ? "LogOut" : "Login");
              }}
            >
              {btnName}
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;

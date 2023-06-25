import React from "react";
import logo from "../images/mesto-logo.svg";
import { Link,  useLocation } from "react-router-dom";

export default function Header({ email, signOut, loggedIn }) {
  const location = useLocation();

  const path = (location.pathname === "/sign-in") ? "/sign-up" : "/sign-in";
  const LinkName = (location.pathname === "/sign-in") ? "Регистрация" : "Войти";

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="логотип" />
      {
        loggedIn
          ? (
            <div className="header__wrapper">
              <p className="header__email">{email}</p>
              <Link
                className="header__link"
                to="/sign-in"
                onClick={signOut}>
                Выйти
              </Link>
            </div>
          )
          : (
            <div className="header__wrapper">
            <Link
              className="header__link"
              to={path}>
              {LinkName}
            </Link>
            </div>
          )
      }
    </header>
  )
}
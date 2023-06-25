import React from "react";
import okIcon from "../images/ok.svg";
import errorIcon from "../images/error.svg";

function InfoTooltip({ tooltipIcon, title, isOpen, onClose }) {

  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`} onClick={onClose}>
      <div className="popup__container-tooltip">
        <div className="popup__icon-tooltip">
          {tooltipIcon === "success" && (
            <img src={okIcon} alt="Статус Ок" />
          )}
          {tooltipIcon === "error" && <img src={errorIcon} alt="Статус Ошибка" />}
        </div>
        <h2 className="popup__title-tooltip">{title}</h2>
        <button type="button" className="popup__close" onClick={onClose} />
      </div>
    </div>
  )
}

export default InfoTooltip;

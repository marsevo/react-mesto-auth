import React from "react";
 import okIcon from "../images/ok.svg";
 import errorIcon from "../images/error.svg";

 function InfoTooltip({ tooltipIcon, title, isOpen, onClose, onOverlayClose }) {

   return (
     <div className={`popup popup_type_tooltip ${isOpen ? "popup_opened" : ""}`} onClick={onOverlayClose}>
       <div className="popup__container-tooltip">
       <button className="popup__close link" type="button" aria-label="Close" onClick={onClose}></button>
         <div className="popup__icon-tooltip">
           {tooltipIcon === "success" && (
             <img src={okIcon} alt="Статус Ок" />
           )}
           {tooltipIcon === "error" && <img src={errorIcon} alt="Статус Error" />}
         </div>
         <h2 className="popup__title-tooltip">{title}</h2>
        
       </div>
     </div>
   )
 }

 export default InfoTooltip;
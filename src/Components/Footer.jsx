import React from 'react'
import Logo from "../Images/Final-logo.png";
import "../Styles/Footer.css"
const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="footer-logo">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-contact">
          <div className="set-one">
            <div className="imgg"></div>
            <p>Toll free - 1800 123 1003</p>
          </div>
          <div className="set-one">
            <div className="imgg"></div>
            <p>Whatsapp - 81005 56677</p>
          </div>
          <div className="set-one">
            <div className="imgg"></div>
            <p>Email - help@macaw.com</p>
          </div>
        </div>
        <div className="footer-address">
          <p>Premises no.03-319, DH-6/11,
            Action Area-1D, Street No. 319,
            New Town, Kolkata-700156</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
import React from "react";
import colors from "../../constants/colors";
import { useState } from "react";

function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => setIsOpen(!isOpen);

  return (
    <div
      style={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        left: 0,
        zIndex: 1000,
        display: "flex",
        flexDirection: "column",
        maxHeight: isOpen ? "250px" : "23px",
        transition: "0.5s ease-in-out",
      }}
    >
      <div
        style={{
          height: "23px",
          width: "150px",
          backgroundColor: colors.accent,
          color: colors.black[0],
          borderTopLeftRadius: ".5rem",
          borderTopRightRadius: ".5rem",
          textAlign: "center",
          alignSelf: "flex-end",
          cursor: "pointer",
          transition: "0.5s ease-in-out",
        }}
        onClick={handleIsOpen}
      >
        {isOpen ? "Cerrar" : "Abrir"}
      </div>
      <img
        src="/footer.png"
        alt="footer"
        style={{ width: "100%", objectFit: "contain" }}
      />
    </div>
  );
}

export default Footer;

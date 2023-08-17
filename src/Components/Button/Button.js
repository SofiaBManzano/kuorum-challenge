import React, { useState } from "react";

const Button = ({ primary, size, label, onClick, loading }) => {
  const buttonClasses = `
  border border-secondary-color text-secondary-color font-semibold rounded-md p-2 border-2 transition duration-300 ease-in-out
    ${primary ? "hover:text-white" : "bg-transparent"} 
    ${
      primary
        ? "bg-transparent hover:bg-secondary-color hover:text-white"
        : "hover:bg-secondary-color hover:text-white"
    } 
    ${size === "M" ? "text-base" : size === "S" ? "text-sm" : "text-xs"}
    ${loading ? "cursor-not-allowed" : "cursor-pointer"}
  `;

  return (
    <button className={buttonClasses} onClick={onClick} disabled={loading}>
      {loading ? "Cargando..." : label}
    </button>
  );
};

export default Button;

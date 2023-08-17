import React, { useState } from "react";

const Button = () => {
  const [loading, setLoading] = useState(false);

  const handleDownload = () => {
    setLoading(true);

    setTimeout(() => {
      alert("La descarga del certificado se ha completado.");
      setLoading(false);
    }, 1000);
  };

  return (
    <button
      className={`bg-transparent border-secondary-color text-secondary-color font-semibold rounded-md p-2 border-2 hover:bg-secondary-color hover:text-white transition duration-300 ease-in-out ${
        loading ? "cursor-not-allowed" : "cursor-pointer"
      }`}
      onClick={handleDownload}
      disabled={loading}
    >
      {loading ? "Descargando..." : "Descargar Certificado"}
    </button>
  );
};

export default Button;

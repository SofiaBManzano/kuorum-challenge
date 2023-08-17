import React, { useState } from "react";
import Button from "../../Button/Button";
import checkIcon from "../../../img/check.svg";

const SuccesfulVoteRegister = () => {
  const [loading, setLoading] = useState(false);

  const handleDownload = () => {
    setLoading(true);

    setTimeout(() => {
      alert("La descarga del certificado se ha completado.");
      setLoading(false);
    }, 1000);
  };

  return (
    <article className="flex flex-col items-center border border-light-color rounded-lg p-6">
      <svg
        className="custom-icon mb-4"
        width="64"
        height="64"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
      >
        <image href={checkIcon} alt="Voto registrado" />
      </svg>
      <h3 className="font-bold text-lg mb-[0.25rem] text-[1rem] text-black">
        Voto registrado
      </h3>
      <p className="text-sm font-normal mb-4">
        Tu voto en la votación "Asamblea General de la Real Federación Española
        ded Vela 2023" se ha registrado.
      </p>
      <Button
        primary
        size="M"
        label="Descargar Certificado"
        onClick={handleDownload}
        loading={loading}
      />
      <small className="text-primary-light text-xs mt-2">
        El enlace de descarga de tu certificado de voto tiene una validez de 5
        minutos.
      </small>
    </article>
  );
};

export default SuccesfulVoteRegister;

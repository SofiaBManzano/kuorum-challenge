import Button from "../../Button/Button";
import checkIcon from "../../../img/check.svg";

const SuccesfulVoteRegister = () => {
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
      <h3 className="font-bold text-lg mb-[0.25rem]">Voto registrado</h3>
      <p className="mb-4">
        Tu voto en la votación "Asamblea General de la Real Federación Española
        ded Vela 2023" se ha registrado.
      </p>
      <Button />
      <small className="text-primary-light text-sm mt-2">
        El enlace de descarga de tu certificado de voto tiene una validez de 5
        minutos.
      </small>
    </article>
  );
};

export default SuccesfulVoteRegister;

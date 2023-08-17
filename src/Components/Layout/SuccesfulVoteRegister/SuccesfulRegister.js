import Button from "../../Button/Button"
import checkIcon from "../../../img/check.svg"
const SuccesfulVoteRegister = () => {
    return(
        <article>
        <svg
            className="custom-icon"
            width="64"
            height="64"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
          >
            <image href={checkIcon} alt="Voto registrado" />
          </svg>
        <h3>Voto registrado</h3>
        <p>Tu voto en la votación "Asamblea General de la Real Federación 
            Española ded Vela 2023" se ha registrado.</p>
            <Button/>
            <small>El enlace de descarga de tu ceritificado de voto tiene una validez de 5 minutos.</small>
        </article>
    )
}

export default SuccesfulVoteRegister
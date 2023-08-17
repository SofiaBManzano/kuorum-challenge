import React from "react";
import InfoBlock from "./InfoBlock/InfoBlock";
import SuccesfulVoteRegister from "./SuccesfulVoteRegister/SuccesfulRegister";
import iconCarbonFootprint from "../../img/carbon-footprint.svg";
import iconVotation from "../../img/votation.svg";
const PageContent = () => {
  return (
    <section className="pr-4 pl-4 md:pr-0 md:pl-0 mt-[96px] pb-[32px] flex flex-col gap-4 max-layout mx-auto">
      <InfoBlock
        text="Con esta votación has ayudado a reducir la Huella de carbono"
        svg={
          <svg
            className="custom-icon"
            width="72"
            height="61"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 72 61"
          >
            <image href={iconCarbonFootprint} alt="Icono Huella de Carbono" />
          </svg>
        }
        linkText="Saber más"
      />
      <SuccesfulVoteRegister />
      <InfoBlock
        linkText="Crear votación"
        title="Crea tu votación"
        text="Construye tu votación en muy pocos pasos y obtén resultados inmediatos."
        svg={
          <svg
            className="custom-icon"
            width="72"
            height="62"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 72 62"
          >
            <image href={iconVotation} alt="Crea tu votación" />
          </svg>
        }
      />
    </section>
  );
};

export default PageContent;

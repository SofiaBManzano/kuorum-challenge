import React, { useEffect, useState } from "react";
import logoKuorum from "../../img/kuorum.svg";
import informationIcon from "../../img/information.svg";
import { Tooltip } from "react-tooltip";
const Header = () => {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 flex justify-between p-4 border-b border-light-color bg-white ${
        scrolling ? "py-2" : "py-4"
      } transition-all duration-300 ease-in-out z-50`}
    >
      <div className="flex items-center">
        <svg
          width="134"
          height="32"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 134 32"
        >
          <image href={logoKuorum} alt="Información" />
        </svg>
      </div>
      <div>
        <svg
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Pulsa para recibir ayuda"
          width="32"
          height="32"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
        >
          <image href={informationIcon} alt="Logo Kuorum" />
        </svg>
        <Tooltip id="my-tooltip" />
      </div>
    </header>
  );
};

export default Header;

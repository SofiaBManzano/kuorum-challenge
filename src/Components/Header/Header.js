import React, { useEffect, useState } from "react";
import logoKuorum from "../../img/kuorum.svg";
import informationIcon from "../../img/information.svg";
import { Tooltip } from "react-tooltip";
import { Link } from "react-router-dom";

const Header = () => {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    setScrolling(window.scrollY > 0);
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
        <Link to="/kuorum-challenge/" target="_self" >
          <svg
            width="134"
            height="32"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 134 32"
            className={`transition-transform transform-gpu ${
              scrolling ? "scale-90" : "scale-100"
            }`}
          >
            <image href={logoKuorum} alt="Información" />
          </svg>
        </Link>
      </div>
      <div>
        <a
          href="https://www.kuorum.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Recibir ayuda"
            width="32"
            height="32"
            className={`transition-transform transform-gpu ${
              scrolling ? "scale-90" : "scale-100"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
          >
            <image href={informationIcon} alt="Logo Kuorum" />
          </svg>
        </a>
        <Tooltip id="my-tooltip" />
      </div>
    </header>
  );
};

export default Header;

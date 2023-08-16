import logoKuorum from "../../img/kuorum.svg";
const Header = () => {
  return (
    <header>
      <figure>
        <svg
          width="30"
          height="30"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 134 32"
        >
          <image href={logoKuorum} alt="Logo Kuorum" />
        </svg>
       
      </figure>
    </header>
  );
};

export default Header;

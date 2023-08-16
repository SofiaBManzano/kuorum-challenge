const Button = () => {
    const handleDownload = () => {
      
      setTimeout(() => {
        alert("La descarga del certificado se ha completado.");
      }, 1000);
    };
  
    return (
      <button onClick={handleDownload}>
        Descargar Certificado (simulado)
      </button>
    );
  };
  
  export default Button
import React from 'react';

const InfoBlock = ({ title, texto, svg }) => {
  return (
    <article>
      <div>{svg}</div>
      <div>
        {title && <h2>{title}</h2>}
        <p >{texto}</p>
        <a className='font-bold'>Saber más</a>
      </div>
    </article>
  );
};

export default InfoBlock;

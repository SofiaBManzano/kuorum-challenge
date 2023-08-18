import React from "react";

const InfoBlock = ({ title, text, svg, linkText }) => {
  return (
    <article className="border border-light-color rounded-lg overflow-hidden">
      <div className="flex flex-row gap-4">
        <div className="bg-secondary-light flex justify-center items-center pr-4 pl-4">
          {svg}
        </div>
        <div className="text-left pb-4 pt-4 pr-4 text-block-width">
          {title && (
            <h2 className="font-bold text-lg text-[1rem] mb-1 text-black">
              {title}
            </h2>
          )}
          <p className="text-sm font-normal mb-4">{text}</p>
          <a
            href="https://www.kuorum.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-sm text-secondary-color transition-underline transition-underline-black transition-underline:hover"
          >
            {linkText}
          </a>
        </div>
      </div>
    </article>
  );
};

export default InfoBlock;

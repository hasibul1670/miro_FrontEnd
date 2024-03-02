import React from "react";

const CardWithoutImage = ({ title, description }) => {
  return (
    <div>
      <div className="card w-80  h-64 bg-white shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="font-serif font-medium	">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CardWithoutImage;

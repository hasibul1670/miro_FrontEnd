import React from "react";

export const CardWithoutImage = ({ title, description }) => {
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
export const CardWithImage = ({
  title,
  description,
  designation,
  personName,
}) => {
  return (
    <div>
      <div className="card w-80  h-80 bg-white shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">{title}</h2>
          <p className="font-serif text-sm font-medium	">{description}</p>
        </div>

        <div className="flex">
          <div className="avatar">
            <div className="w-14 rounded-full mb-2 ml-2">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <div className="ml-2">
            <h1>{personName}</h1>
            <h1 className="text-sm">{designation}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

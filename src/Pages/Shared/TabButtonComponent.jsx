import React, { useState } from "react";




function TabButtonComponent({ buttonLabels }) {
  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  return (
    <div className="bg-white">
      <div className="flex justify-between px-4 py-2 border-gray-300">
        {buttonLabels.map((label, index) => (
          <button
            key={index}
            className={`text-gray-700 font-bold py-2 px-4 ${
              activeButton === index ? "bg-red-100 rounded-lg" : ""
            } hover:text-gray-500 focus:outline-none`}
            onClick={() => handleButtonClick(index)}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TabButtonComponent;

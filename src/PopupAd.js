import React, { useState } from "react";

const PopupAd = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem("popupCloseTime", new Date().getTime());
  };

  return (
    <div className={`${isVisible ? "block" : "hidden"}`}>
      {/* drop shadow start*/}
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-10"></div>
      {/* drop shadow end */}

      <div className="fixed z-20 flex items-center justify-center bg-slate-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <p className="font-bold text-cyan-500 text-4xl relative rounded-md px-16 py-10 ">
          This is a popup ad
          <button
            className="text-2xl font-bold text-zinc-600 absolute top-2 right-4 bg-black bg-opacity-25 px-1 py-1 rounded"
            onClick={handleClose}
          >
            X
          </button>
        </p>
      </div>
    </div>
  );
};

export default PopupAd;

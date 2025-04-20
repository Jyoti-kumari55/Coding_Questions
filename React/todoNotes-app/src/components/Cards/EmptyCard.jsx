import React from "react";

const EmptyCard = ({ emptyImg, message }) => {
    // emptyImg = "https://img.icons8.com/material-rounded/24/add-list.png";
   
  return (
    <div className="flex flex-col items-center justify-center mt-25">
      <img src={emptyImg} alt="No notes Yet!!" className="w-60" />
      <p className="w-1/2 text-base font-medium text-slate-700 text-center leading-7 mt-5 ">
        {message}
      </p>
    </div>
  );
};

export default EmptyCard;


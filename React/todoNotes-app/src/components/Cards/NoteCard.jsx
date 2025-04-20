import moment from "moment";
import React from "react";
import { MdOutlinePushPin, MdCreate, MdDelete } from "react-icons/md";

const NoteCard = ({
  title,
  date,
  content,
  tags,
  isPinned,
  onEdit,
  onDelete,
  onPinNote,
}) => {
  return (
    <div className="rounded p-4 bg-white hover:shadow-xl transition-all ease-in-out">
      <div className="flex items-center justify-between">
        <div>
          <h6 className="text-lg font-semibold">{title}</h6>
          <span className="text-xs text-slate-500">
            {moment(date).format("Do MMM YYYY")}
          </span>
        </div>
        {/* <MdOutlinePushPin
          className={`icon-btn ${
            isPinned ? "text-blue-600" : "text-slate-300"
          }`}
          onClick={onPinNote}
        /> */}

        <MdOutlinePushPin
          className={`icon-btn ${
            isPinned ? "text-blue-600" : "text-slate-400"
          } hover:text-blue-600`}
          onClick={onPinNote}
        />
      </div>

      {/* <p className="text-sm font-medium  text-slate-800 mt-2">
        {content?.slice(0, 60)}
      </p> */}

      <div className="text-sm font-medium text-slate-800 mt-2 max-h-40 overflow-y-auto">
        {content}
      </div>

      <div className="flex items-center justify-between mt-2">
        {/* {console.log(tags)} */}
        <div className="text-xs text-slate-600">
          {tags?.map((tag) => `#${tag} `)}
        </div>
        <div className="flex items-center gap-2">
          <MdCreate
            className="icon-btn text-slate-400 hover:text-green-600"
            onClick={onEdit}
          />
          <MdDelete
            className="icon-btn text-slate-400 hover:text-red-500"
            onClick={onDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default NoteCard;

import React, { useState } from "react";
import TagInput from "../components/Input/TagInput";
import { MdClose } from "react-icons/md";
import axios from "axios";
import { BACKENDS_URL } from "../utils/constants";

const AddEditNotes = ({
  notesData,
  type,
  getAllNotes,
  onClose,
  showToastMsgHandler,
}) => {
  const [title, setTitle] = useState(notesData?.title || "");
  const [content, setContent] = useState(notesData?.content || "");
  const [tags, setTags] = useState(notesData?.tags || []);
  const [isPinned, setIsPinned] = useState(notesData?.isPinned || false);

  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");
  console.log("===token==", token);

  const addNewNote = async () => {

    try {
      const response = await axios.post(
        `${BACKENDS_URL}/api/todo/addNote`,
        { title, content, tags },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data && response.data.note) {
        showToastMsgHandler("Note Added Successfully.");
        getAllNotes();
        onClose();
      }
    } catch (error) {
      console.log("Error occured while creating a note: ", error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
      }
    }
  };

  const editNote = async () => {
    const noteId = notesData._id;
    const isPinnedValue = isPinned === "true";

    try {
      const response = await axios.put(
        `${BACKENDS_URL}/api/todo/editNote/${noteId}`,
        { title, content, tags, isPinned: isPinnedValue },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data && response.data.note) {
        showToastMsgHandler("Note updated Successfully.");

        getAllNotes();
        onClose();
      }
    } catch (error) {
      console.log("Error occured while creating a note: ", error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
      }
    }
  };

  const handleClickNote = () => {
    if (!title) {
      setError("Please enter the title.");
      return;
    }
    if (!content) {
      setError("Please enter the content.");
      return;
    }
    if (type === "edit") {
      editNote();
    } else {
      addNewNote();
    }
    setError("");
  };

  return (
    <div className="relative">
      <button
        className="w-10 h-10 rounded-full flex items-center justify-center absolute -top-3 -right-3 hover:bg-slate-500"
        onClick={onClose}
      >
        <MdClose className="text-xl text-slate-400" />
      </button>
      <div className="flex flex-col gap-2">
        <label className="input-label">TITLE</label>
        <input
          type="text"
          className="text-2xl text-slate-950 outline-none"
          placeholder="Lets learn JS deeply"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <label className="input-label">CONTENT</label>
        <textarea
          type="text"
          className="text-2xl text-slate-950 outline-none bg-slate-50 p-2 rounded"
          placeholder="Content"
          rows={10}
          value={content}
          onChange={({ target }) => setContent(target.value)}
        />
      </div>
      <div className="mt-4">
        <label className="input-label">TAGS</label>
        <TagInput tags={tags} setTags={setTags} />
      </div>

      {type === "edit" && (
        <div className="mt-4">
          <label className="input-label">isPinned</label>
          <select
            className="w-52 ml-6 p-2 rounded-2xl border border-gray-300 bg-white text-slate-950 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={isPinned}
            onChange={(e) => setIsPinned(e.target.value)}
          >
            <option selected>Select</option>
            <option value="true">true</option>
            <option value="false">false</option>
          </select>
        </div>
      )}

      {error && <p className="text-red-500 text-xs pt-4">{error}</p>}
      <button
        className="bg-blue-500 w-full font-medium mt-4 p-4 rounded-xl hover:bg-blue-800"
        onClick={handleClickNote}
      >
        {type === "edit" ? "UPDATE" : "ADD"}
      </button>
    </div>
  );
};

export default AddEditNotes;

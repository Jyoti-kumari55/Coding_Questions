import React, { useEffect, useState } from "react";
import Navbar from "../components/UiBars/Navbar";
import NoteCard from "../components/Cards/NoteCard";
import { MdAdd } from "react-icons/md";
import AddEditNotes from "./AddEditNotes";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKENDS_URL } from "../utils/constants";
import Toast from "../components/ToastifyMessage/Toast";
import EmptyCard from "../components/Cards/EmptyCard";
import AddNoteImg from "../assets/images/add-list.png";
import NoDataImg from "../assets/images/no-data.png";

const Home = () => {
  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  });

  const [showToastMessage, setShowToastMessage] = useState({
    isShown: false,
    message: "",
    type: "add",
  });

  const [userInfo, setUserinfo] = useState(null);
  const [allNotes, setAllNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredNotes, setFilteredNotes] = useState([]);

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const editNoteHandler = (noteDetails) => {
    setOpenAddEditModal({ isShown: true, data: noteDetails, type: "edit" });
  };

  const showToastMsgHandler = (message, type) => {
    setShowToastMessage({
      isShown: true,
      message,
      type,
    });
  };

  const closeToastHandler = () => {
    setShowToastMessage({
      isShown: false,
      message: "",
    });
  };

  const getUserInfo = async () => {
    if (!token) {
      navigate("/login");
      return;
    }

    try {
      const response = await axios.get(`${BACKENDS_URL}/api/user/getUser`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.data && response.data.details) {
        setUserinfo(response.data.details);
      }
    } catch (error) {
      console.error("User fetch error:", error);

      if (error.response && error.response.status === 401) {
        localStorage.clear();
        navigate("/login");
      }
    }
  };

  const getAllNotes = async () => {
    try {
      const response = await axios.get(`${BACKENDS_URL}/api/todo/getNotes`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.data && response.data.notes) {
        setAllNotes(response.data.notes);
      }

      console.log(response.data.notes);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteANote = async (noteData) => {
    const noteId = noteData._id;
    try {
      const response = await axios.delete(
        `${BACKENDS_URL}/api/todo/deleteNote/${noteId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data && !response.data.error) {
        showToastMsgHandler("Note deleted successfully.", "delete");
        getAllNotes();
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        console.log("Error occured while creating a note: ", error);
      }
    }
  };

  // const handleSearch = () => {};
  const onClearSearch = () => {
    setSearchQuery("");
  };

  useEffect(() => {
    getAllNotes();
    getUserInfo();
    return () => {};
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredNotes(allNotes);
    } else {
      const lowercaseSearch = searchQuery.toLowerCase();
      const filtered = allNotes.filter(
        (note) =>
          note.title.toLowerCase().includes(lowercaseSearch) ||
          note.content.toLowerCase().includes(lowercaseSearch)
      );
      setFilteredNotes(filtered);
    }
  }, [searchQuery, allNotes]);

  return (
    <>
      <Navbar
        userInfo={userInfo}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        // handleSearch={handleSearch}
        onClearSearch={onClearSearch}
      />
      <div className="container mx-auto">
        {/* {allNotes.length > 0 ? ( */}
        {filteredNotes?.length > 0 ? (
          <div className="grid grid-cols-3 gap-4 mt-8">
            {/* {allNotes?.map((item) => ( */}
            {filteredNotes?.map((item) => (
              <NoteCard
                key={item._id}
                title={item.title}
                date={item.createOn}
                content={item.content}
                tags={item.tags}
                isPinned={item.isPinned}
                onEdit={() => {
                  editNoteHandler(item);
                }}
                onDelete={() => {
                  deleteANote(item);
                }}
                onPinNote={() => {}}
              />
            ))}
          </div>
        ) : (
          <EmptyCard
            emptyImg={searchQuery ? NoDataImg : AddNoteImg}
            message={
              searchQuery
                ? `Oops! No notes found matching to your search...`
                : `Start creating your first note! Click below 'Add' button to note down your thoughts, ideas, remainder, and your daily plans. Let's get started.`
            }
          />
        )}
      </div>

      <button
        className="w-16 h-16 flex items-center justify-center rounded-2xl bg-blue-600 hover:bg-blue-600 absolute right-10 bottom-10"
        onClick={() => {
          setOpenAddEditModal({ isShown: true, type: "add", data: null });
        }}
      >
        <MdAdd className="text-[32px] text-white" />
      </button>

      <Modal
        isOpen={openAddEditModal.isShown}
        onRequestClose={() => {}}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.2)",
          },
        }}
        contentLabel=""
        className="w-[40%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5 overflow-scroll"
      >
        <AddEditNotes
          type={openAddEditModal.type}
          notesData={openAddEditModal.data}
          onClose={() => {
            setOpenAddEditModal({ isShown: false, type: "add", data: null });
          }}
          getAllNotes={getAllNotes}
          showToastMsgHandler={showToastMsgHandler}
        />
      </Modal>

      {showToastMessage.isShown && showToastMessage.message && (
        <Toast
          isShown={showToastMessage.isShown}
          message={showToastMessage.message}
          type={showToastMessage.type}
          onClose={closeToastHandler}
        />
      )}
    </>
  );
};

export default Home;

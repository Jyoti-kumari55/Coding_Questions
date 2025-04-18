import React, { useEffect, useState } from "react";
import Navbar from "../components/UiBars/Navbar";
import NoteCard from "../components/Cards/NoteCard";
import { MdAdd } from "react-icons/md";
import AddEditNotes from "./AddEditNotes";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKENDS_URL } from "../utils/constants";

const Home = () => {
  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  });

  const [userInfo, setUserinfo] = useState(null);
  const navigate = useNavigate();

  const getUserInfo = async () => {
    const token = localStorage.getItem("token");

    if(!token){
      navigate("/login")
      return;
    }

    try {
      const response = await axios.get(`${BACKENDS_URL}/api/user/getUser` , {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
      },
    });
      
      if(response.data && response.data.details) {
        setUserinfo(response.data.details);
      }
    } catch (error) {
      console.error("User fetch error:", error);

      if(error.response && error.response.status === 401) {
        localStorage.clear();
        navigate("/login");
      }
    }
  }

  useEffect(() => {
    getUserInfo();
    return () => {};
  }, []);

  return (
    <>
      <Navbar userInfo={userInfo} />
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4 mt-8">
          <NoteCard
            title="JS workshop for all ages of people"
            date="3rd may 2025"
            content="qweqesfdsdwdwe"
            tags="#coding, #learning"
            isPinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={( ) => {}}
          />
        </div>
      </div>

      <button
        className="w-16 h-16 flex items-center justify-center rounded-2xl bg-blue-600 hover:bg-blue-600 absolute right-10 bottom-10"
        onClick={() => {
          setOpenAddEditModal({ isShown: true, type: "add", data: null})
        }
        }
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
        setOpenAddEditModal({ isShown: false, type: "add", data: null});
      }} />
      </Modal>
    </>
  );
};

export default Home;

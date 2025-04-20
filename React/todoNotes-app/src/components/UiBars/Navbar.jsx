import React from "react";
import ProfileInfo from "../Cards/ProfileInfo";
import { useNavigate } from "react-router-dom";
import SearchBar from "../UiBars/SearchBar";

const Navbar = ({ userInfo, searchQuery, setSearchQuery, handleSearch, onClearSearch }) => {
  // const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  // const handleSearch = () => {};
  // const onClearSearch = () => {
  //   setSearchQuery("");
  // };
  return (
    <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow-xl">
      <div className="flex gap-3">
        <div
          className="w-12 h-12 rounded-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/5310455/pexels-photo-5310455.jpeg?auto=compress&cs=tinysrgb&w=400`,
          }}
        ></div>
        <h2 className="text-xl font-bold text-black py-3">Notes</h2>
      </div>

      <SearchBar
        value={searchQuery}
        onChange={({ target }) => {
          setSearchQuery(target.value);
        }}
        // handleSearch={handleSearch}
        onClearSearch={onClearSearch}
      />
      <ProfileInfo userInfo={userInfo} onLogout={onLogout} />
    </div>
  );
};

export default Navbar;

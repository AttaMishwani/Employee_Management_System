import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../ReduxStore/AuthSlice";

const Header = ({ userData, handleNewUserlogic, isAddUserFormVisible }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    // console.log("logut butotn working");
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="flex p-5 items-end justify-between">
      <h1 className="text-2xl font-medium text-white">
        Hello <br />
        <span className="text-3xl text-white font-semibold">
          {userData.name} 🖐️
        </span>
      </h1>

      <div className="gap-2 flex">
        {userData.userRole === "admin" && (
          <button
            onClick={handleNewUserlogic}
            className="bg-red-500 text-white rounded-sm font-medium text-lg px-5 py-2"
          >
            {isAddUserFormVisible ? "Go Back" : "Add New User"}
          </button>
        )}

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white rounded-sm font-medium text-lg px-5 py-2"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Header;

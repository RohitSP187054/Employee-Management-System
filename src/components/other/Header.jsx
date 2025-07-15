import React from "react";

const Header = ({ changeUser, username }) => {
  const logOutUser = () => {
    changeUser();
  };

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-semibold text-white">
        Hello <br />
        <span className="text-3xl capitalize">{username}👋</span>
      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-500 text-white px-5 py-2 rounded text-lg font-medium"
      >
        Logout
      </button>
    </div>
  );
};
export default Header;
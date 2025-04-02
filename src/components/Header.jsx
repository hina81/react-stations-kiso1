import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-600 text-white  p-10 flex justify-between items-center">
      <h1 className="text-xl font-bold pl-10">掲示板</h1>
      <Link to="/threads/new">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mr-6 rounded">
          スレッドを立てる
        </button>
      </Link>
    </header>
  );
};

export default Header;

import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function JobHeader() {
  const handleLogOut = (e) => {
    e.preventDefault();

    localStorage.removeItem("isLogin");
  };
  return (
    <>
      <header className="flex justify-center items-center bg-no-repeat bg-cover max-h-[20vh]">
        <Link to={`/`}>
          <img
            className="max-h-[20vh]"
            src="https://assets-global.website-files.com/622b063e1c5d763e016af5ee/64806bb59d2c2cbcf0cf376c_Lister.png"
            alt="logo"
          />
        </Link>
        <form onSubmit={handleLogOut}>
          <button
            style={{ backgroundColor: "#ff0000" }}
            className=" hover:bg-[#eac77d] text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Logout
          </button>
        </form>
      </header>

      <Outlet />
    </>
  );
}

export default JobHeader
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

function JobLandingPages() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      username: username,
      password: password,
    };

    axios
      .post("https://fakestoreapi.com/auth/login", userData)
      .then((response) => {
        console.log(response.status, response.data.token);
        if (response.status === 200) {
          localStorage.setItem("isLogin", true);
          location.replace("/job-list");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });

  };

  return (
    <div>
      <div className="min-h-screen bg-cyan-light relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0f1e32] z-0"></div>
        <main className="flex flex-col items-center px-6 relative z-10 min-h-screen justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-8 shadow-xl border p-4">
            Explore Programming <br /> Opportunities Worldwide
          </h1>
          <p className="max-w-prose text-lg md:text-xl lg:text-2xl text-white mb-8 text-center leading-relaxed">
            Unlock a world of programming opportunities with our developer jobs
            landing page. Whether you're a seasoned developer or just starting
            out, discover exciting roles in tech hubs across the globe
          </p>

          <div className="flex justify-center">
            <div className="flex w-full justify-center items-center space-y-8">
              <div className="w-full px-8">
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-md shadow-2xl p-5"
                >
                  <h1 className="text-gray-800 font-bold text-2xl mb-1">
                    Hello Again!
                  </h1>
                  <p className="text-sm font-normal text-gray-600 mb-8">
                    Welcome Back
                  </p>
                  <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
                    <input
                      id="username"
                      className=" pl-2 w-full outline-none border-none"
                      type="username"
                      name="username"
                      placeholder="username"
                      onChange={(e) => setUsername(e.target.value)} value={username}
                    />
                  </div>
                  <div className="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl ">
                    <input
                      className="pl-2 w-full outline-none border-none"
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)} value={password}
                    />
                  </div>
                  <button
                    type="submit"
                    className="block w-full bg-cyan-dark hover:bg-[#eac77d] text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
        <img
          src="https://miro.medium.com/v2/resize:fit:1200/1*ZJBkfG3WN83TLlr7ESYrLA.jpeg" // Replace with your image path
          alt="Developer working on code"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
      </div>
    </div>
  );
}

export default JobLandingPages;

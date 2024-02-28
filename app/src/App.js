import React from "react";
import { useState } from "react";
import Developer from "./container/developers";
import LandingPage from "./container/landingPage";
import Header from "./components/structure/Header";

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const App=()=> {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  let [modelOpen, setModelOpen] = useState(false);

  const handleModel = () => {
    setModelOpen(true);
  };

  console.log(user);

  return (
    <div className="w-full h-full">
      <Header loginWithRedirect={loginWithRedirect} isAuthenticated={isAuthenticated} logout={logout} />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/developer"
            element={<Developer handleModel={handleModel} />}
          />
        </Routes>
      </Router>

      {/* Modal */}
      {modelOpen && (
        <div className="absolute h-full w-full left-0 bg-white bg-opacity-[0.6] inline-flex justify-center items-center ">
          {/* Modal Card */}
          <div className="h-auto w-auto  relative bg-white rounded-md justify-center p-[40px] space-y-[20px] flex-col border-[5px] ">
            <div className=" justify-center flex-col">
              <div className="text-center font-16px mb-[25px]">
                <span className="text-[#333333]  ">
                  Sign in to Bitgert - $BRISE
                </span>
              </div>
              <div className="w-full ">
                <h1 className="text-[12px] mb-[5px]">Email</h1>
                <div className="ring-1 rounded-md mb-[10px] ">
                  <input
                    className="w-full p-[12px] "
                    type="email"
                    placeholder=""
                  ></input>
                </div>
                <h1 className="text-[12px] mb-[5px]">PassWord</h1>
                <div className="ring-1 rounded-md mb-[10px]">
                  <input
                    className="w-full p-[12px] "
                    type="Password"
                    placeholder=""
                  ></input>
                </div>
                <div className="ring-1 ring-[#17494D] rounded-md bg-[#1f73b7] text-center w-[300px] p-[16px] ">
                  <button className="text-md text-white ">Sign in</button>
                </div>
                <div className="text-center mt-[10px] mb-[20px]">
                  <a className="justify center text-13px text-[#144a75] mt-[10px] mb-[20px]">
                    Forgot my password
                  </a>
                </div>
              </div>
            </div>
            <button
              className=" absolute -top-2 right-3 "
              onClick={() => {
                setModelOpen(false);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Modal Card */}
        </div>
      )}

      {/* Modal */}
    </div>
  );
}

export default App;

import { useNavigate } from "react-router-dom";

const text = [
  {
    line: "Network Status Monitoring Guideline",
  },
  {
    line: "create wallet",
  },
  { line: "Proxy Contract" },
  { line: "Wallet Providers For Dapps" },
  { line: "Local Brise Chain Network" },
  { line: "Deploy NFT" },
];

function Developer(props) {
  const navigate = useNavigate();

  const handleModel = props.handleModel;

  return (
    <div className="developer mx-auto inline-flex h-full w-full justify-center">
      <div class="inline-flex flex-col h-full w-[70%]">
        <div className="flex inline-flex w-full h-auto flex-row justify-between">
          <div className="flex-row inline-flex w-full px-6 py-6 space-x-4 items-center justify-between">
            <span className="text-lg text-[#1F73B7] hover:underline cursor-pointer">
              <span onClick={() => navigate("/")}>
                Brise Chain - Documentation
              </span>{" "}
              {`>`} For Developers
            </span>
            <div className="">
              <div className="rounded-full bg-white inline-flex  ring-1 items-center w-full px-6 py-4 space-x-4 ">
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
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  className="text-md bg-transparent rounded-full w-[320px] border-none outline-none"
                  type="search "
                  placeholder="Search"
                ></input>
              </div>
            </div>
          </div>
        </div>
        <div className="inline-flex w-full">
          <div className="inline-flex w-full justify-end flex-row">
            <div className="flex-col items-center h-auto w-[80%] px-8 py-6">
              <div className="inline-flex w-full items-center justify-between ">
                <h5 className="text-[#2F3941;] text-[32px] font-bold  ">
                  For Developers
                </h5>
                <button
                  onClick={handleModel}
                  className="bg-transparent ring-1 px-10 py-2 text-center rounded-md ring-[#17494D] text-[#17494D] hover:bg-[#17494D] hover:text-white"
                >
                  Follow
                </button>
              </div>

              <p className="text-[14px] text-[#2F3941] text-italic mt-4">
                Complete information including easy tutorials you need to build,
                deploy & manage apps
              </p>
              <div className="mt-[30px] ">
                {text.map((k, i) => {
                  return (
                    <div key={i} className="inline-flex flex py-4">
                      <a className="text-[#2F3941]  flex-col text-md hover:underline cursor-pointer">
                        {k.line}
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Developer;

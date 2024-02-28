import { useNavigate } from "react-router-dom";
import Image from "../components/base/Image";
import Text from "../components/base/Text";
import Card from "../components/base/Card";

const cards = [
  {
    title: "Wallet",
    content: "Supported wallets information for Brise Chain",
  },
  {
    title: "For Developers",
    content:
      "Complete information including easy tutorials you need to build, deploy & manage apps",
  },
  {
    title: "Wallet",
    content: "Learn about Blockchain & Brise Chain",
  },
];

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <div className="h-auto w-full inline-flex">
        <div className="relative h-[320px] w-full">
          <Image
            className={"absolute h-full w-full top-0 left-0 z-0"}
            src={
              "https://theme.zdassets.com/theme_assets/12468255/eabf50894a56b2eb7b2c5b5dac193b307d3aeccc.jpg"
            }
            alt=""
          />
          <div className="absolute z-10 h-full w-full inline-flex flex-row justify-center items-center">
            <div className="rounded-full bg-white inline-flex items-center w-auto px-6">
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
                className="text-md z-10 bg-transparent rounded-full w-full px-4 py-3 border-none outline-none"
                type="search "
                placeholder="Search"
              ></input>
            </div>
          </div>
        </div>
      </div>
      <div className="inline-flex flex-col items-center h-full w-full px-16 py-12 space-y-12">
        <div className="w-full h-auto inline-flex items-center justify-between space-x-10">
          {cards.map((d, i) => {
            return <Card d={d} key={i} navigate={navigate}/>;
          })}
        </div>
        <Card d={{ title: "FAQ" }}   />
      </div>
    </div>
  );
}
export default LandingPage;

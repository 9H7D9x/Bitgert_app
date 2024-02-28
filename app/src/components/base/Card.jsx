import React from "react";
import { useNavigate } from "react-router-dom";
import Text from "./Text";

const Card = (props) => {
  const navigate = props.navigate;
  const d = props.d;
  const onClick=props.onClick;

  return (
    <div
      onClick={() => navigate("/developer")}
      className="space-y-2 min-h-[120px] h-full text-[#17494D] hover:text-white items-center ring-1 ring-[#17494D] inline-flex flex-col justify-center w-full px-4 py-6 rounded-md hover:bg-[#17494D]"
    >
      <Text text={d.title} fontSize="text-md" />

      {d.content && 
      <Text text={d.content} textAlign="text-center" />}
    </div>
    
  );
};

export default Card;

import React from 'react'
import Text from "./Text";
import Image from "./Image";

const Logo = (props) => {
  const src =props.src;
  const className= props.className|| "h-10 w-auto";

    return (
        <div>
            <div className="logo inline-flex space-x-3 items-center">
            <Image 
              className={className}//"h-10 w-auto"
              src={src} 
              alt="Brise-chain - Documentation" />

            <Text text="Brise Chain - Documentation" color="text-[#17494D]" fontSize="text-xl"/>
            
          </div>
        </div>
    )
}

export default Logo

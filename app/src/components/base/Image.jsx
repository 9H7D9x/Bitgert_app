import React from 'react'

const Image = (props) => {
    const src=props.src;
    const className = props.className;
    return (
        <img
              className={className}
              src={src}
              alt=""
            ></img>
    )
}

export default Image

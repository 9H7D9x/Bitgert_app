import React from 'react'

const Text = (props) => {
    const textAlign =props.textAlign;

    const text = props.text;
    const color = props.color || 'text-[#17494D]';
    const onClick = props.onClick;
    const fontSize = props.fontSize || 'text-md';

    return (
        <div className={`cursor-pointer ${textAlign}`} onClick={onClick}>
            <span className={`${fontSize} ${color} ${textAlign}`}>
              {text}
            </span>
        </div>
    )
}

export default Text

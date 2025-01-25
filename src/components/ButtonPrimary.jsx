import React from 'react';

const ButtonPrimary = (props) => {
    return (
        <button className="rounded-xl bg-[#FFC31B] text-black px-4 py-2 font-bold py-2 px-4">
            {props.label}
        </button>
    );
};

export default ButtonPrimary;
import React from 'react';

const ButtonPrimary = (props) => {
    return (
        <button className="rounded-xl bg-[#FFC31B] text-black font-medium py-2 px-4">
            {props.children}
        </button>
    );
};

export default ButtonPrimary;
import React from 'react';

const ButtonSecondary = (props) => {
    return (
        <button className="rounded-xl bg-white text-black font-medium py-2 px-4">
            {props.children}
        </button>
    );
};

export default ButtonSecondary;
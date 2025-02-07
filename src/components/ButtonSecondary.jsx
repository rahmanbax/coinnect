import React from 'react';

const ButtonSecondary = ({ children, onClick }) => {
    return (
        <button onClick={onClick} className="rounded-xl bg-white hover:bg-gray-100 text-black text-sm font-medium py-2 px-4 transition ease-out">
            {children}
        </button>
    );
};

export default ButtonSecondary;
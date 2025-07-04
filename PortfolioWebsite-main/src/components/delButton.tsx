import React from "react";

type Props = {
    onClick: () => void
}

const DelButton: React.FC<Props> = ({ onClick}) => {
    return(
        <button onClick ={onClick}
        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
        🗑 
        </button>
    );
};

export default DelButton;
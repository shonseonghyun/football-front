import React from "react";

const ExclamationMarkIcon = () => {
    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g clip-path="url(#clip0_5871_5217)">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#FFCF0A"/>
                    <path d="M13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8V14C11 14.5523 11.4477 15 12 15C12.5523 15 13 14.5523 13 14V8Z" fill="white"/>
                    <path d="M12 18C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18Z" fill="white"/>
                </g>
                <defs>
                    <rect width="24" height="24" fill="white"/>
                </defs>
            </svg>
        </div>
    );
};

export default React.memo(ExclamationMarkIcon);
import { ISvgProps } from "../../interface/IconInterface";

const MyPageIcon = ({width,height,color}:ISvgProps) => {
    return (
        <svg width={width} height={height} fill={color ? color : "none"} viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
            <path d="M12 11.5C14.2 11.5 16.4 9.9 16.4 7.3C16.4 4.7 14.2 2.5 12 2.5C9.79998 2.5 7.59998 4.6 7.59998 7.2C7.59998 9.8 9.79998 11.5 12 11.5Z" stroke="#222836" strokeMiterlimit="10"/>
            <path d="M12 13.5C17 13.5 21 14.5 21 18.5C21 20.5 12 20.5 12 20.5C12 20.5 3 20.5 3 18.5C3 14.5 7 13.5 12 13.5Z" stroke="#222836" strokeMiterlimit="10"/>
        </svg>

    );
};

export default MyPageIcon;
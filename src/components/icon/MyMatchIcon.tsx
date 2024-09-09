import { ISvgProps } from "../../interface/IconInterface";

const MyMatchIcon = ({width,height,color}:ISvgProps) => {
    return (
        <svg  width={width} height={height} fill={color ? color : "none"} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5 21.5H6.5C4.3 21.5 2.5 19.7 2.5 17.5V8.5C2.5 6.3 4.3 4.5 6.5 4.5H17.5C19.7 4.5 21.5 6.3 21.5 8.5V17.5C21.5 19.7 19.7 21.5 17.5 21.5Z" stroke="#222836" strokeMiterlimit="10"/>
            <path d="M2.5 8.5H21.5" stroke="#222836" strokeMiterlimit="10"/>
            <path d="M8 12H6V14H8V12Z" fill="#222836"/>
            <path d="M13 12H11V14H13V12Z" fill="#222836"/>
            <path d="M18 12H16V14H18V12Z" fill="#222836"/>
            <path d="M8 16H6V18H8V16Z" fill="#222836"/>
            <path d="M13 16H11V18H13V16Z" fill="#222836"/>
            <path d="M7.5 3V6" stroke="#222836" strokeMiterlimit="10"/>
            <path d="M16.5 3V6" stroke="#222836" strokeMiterlimit="10"/>
        </svg>
    );
};

export default MyMatchIcon;
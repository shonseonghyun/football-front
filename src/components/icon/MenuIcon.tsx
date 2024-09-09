import { ISvgProps } from "../../interface/IconInterface";

const MenuIcon = ({width,height,color}:ISvgProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill={color ? color : "#282B33"} xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="6.5" width="20" height="1" />
            <rect x="2" y="11.5" width="20" height="1" />
            <rect x="2" y="16.5" width="20" height="1" />
        </svg>
    );
};

export default MenuIcon;

interface IXIconProps{
    resetQuery: ()=>void;
}

const XIcon = ({resetQuery}:IXIconProps) => {
    return (
        <div onClick={resetQuery}>
            <svg data-v-7ec2ccd0="" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path data-v-7ec2ccd0="" d="M10 1.667a8.333 8.333 0 100 16.667 8.333 8.333 0 000-16.667zm3.924 11.075l-1.183 1.183-2.742-2.75-2.741 2.75-1.184-1.183L8.824 10 6.074 7.26l1.184-1.184 2.741 2.75 2.742-2.75 1.183 1.184L11.174 10l2.75 2.742z" fill="#9EAAB3"></path>
            </svg>
        </div>
    );
};

export default XIcon;
import styled from 'styled-components';

const Container = styled.div`
  /* border-radius  : 50px ;
  padding: 10px;
  background-color: #f3ecff; */
  cursor: pointer;
`;

interface IUploadIconProps{
    onClick : ()=>void ;
}

const UploadIcon = ({onClick}:IUploadIconProps) => {
    return (
        <Container onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width={"30px"} height={"25px"} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
            </svg>
        </Container>
    );
};

export default UploadIcon;
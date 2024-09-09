import styled from "styled-components";
import Logo from "../icon/LogoIcon";

const Container = styled.div`
`;

const LogoContainer = styled.div`
    position: fixed;
    width   : 100%;
    height  : 100% ;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Overlay = styled.div`
  width   : 100%;
  height  : 100% ;
  position: fixed;
  background-color: black;
  opacity: 0.02;
`;

const AppLoading = () => {
    return (
        <Container>
            <Overlay />
            <LogoContainer>
              <Logo width="400" height="54" color="#7F7F7F" />                
            </LogoContainer>
        </Container>
    );
};

export default AppLoading;
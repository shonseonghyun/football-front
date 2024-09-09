import styled from "styled-components";
import LogoIcon from "../icon/LogoIcon";
import MenuIcon from "../icon/MenuIcon";
import MyMatchIcon from "../icon/MyMatchIcon";
import MyPageIcon from "../icon/MyPageIcon";
import SearchInput from "./SearchInput";

const Container = styled.div`
  margin: 0 auto;
  max-width: 1024px;
  padding: 0 20px;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 11px;
  height: 40px;
`;

const GlobalNavContainer = styled.div`
    cursor: pointer;
`;

const LeftContainer = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
    gap: 8px;
`;

const RightContainer = styled.div`
    display: flex;
    gap: 8px;
`;


const Header = () => {
    return (
        <Container>
            <NavContainer>
                <LeftContainer>
                    <GlobalNavContainer>
                        <MenuIcon width="24" height="30"/>
                    </GlobalNavContainer>
                    <a href="/">
                        <LogoIcon width="50" height="30" color="black" /> 
                    </a>
                </LeftContainer>

                <RightContainer>
                    <SearchInput />
                    <MyMatchIcon width="24" height="30" /> 
                    <MyPageIcon width="24" height="30" /> 
                </RightContainer>
            </NavContainer>
        </Container>
    );
};

export default Header;
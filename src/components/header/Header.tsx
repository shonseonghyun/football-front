import styled from "styled-components";
import LogoIcon from "../icon/LogoIcon";
import MenuIcon from "../icon/MenuIcon";
import MyMatchIcon from "../icon/MyMatchIcon";
import MyPageIcon from "../icon/MyPageIcon";
import SearchInput from "./SearchInput";
import { useCallback } from "react";
import { isLoginSelector } from "../../recoil/AuthUserInfo";
import { useRecoilValue } from "recoil";
import { useLocation, useNavigate } from "react-router-dom";

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

const MyPageContainer = styled.div`
    cursor: pointer;
`;

const Header = () => {
    const isLogin = useRecoilValue(isLoginSelector);
    console.log("로그인 여부:",isLogin); 

    const location = useLocation();
    const navigate = useNavigate();
    
    const clickMyPage= useCallback(()=>{
        console.log("useCallBack내부:",isLogin);
        if(isLogin){
            navigate("/mypage");
        }else{
            navigate("/login",{state:location});
        }
    },[isLogin]);

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
                    <MyPageContainer onClick={clickMyPage}>
                        <MyPageIcon width="24" height="30" /> 
                    </MyPageContainer> 
                </RightContainer>
            </NavContainer>
        </Container>
    );
};

export default Header;
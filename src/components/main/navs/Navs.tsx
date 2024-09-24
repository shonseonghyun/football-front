import { PathMatch, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.div`
    display: flex;
    padding: 20px 0px;
    gap: 20px;
    width: 1024px;
    margin: 0 auto;
`;

const NavItem = styled.div`
    font-weight: 700;
    font-size: 18px;
    color: #282b33;
    cursor: pointer;
`;

interface INavsProps{
    match: PathMatch<string> | null;
}

const Navs = ({match}:INavsProps) => {
    const navigate = useNavigate();

    return (
        <NavContainer>
            <NavItem onClick={()=>navigate("/")}>
                소셜 매치
            </NavItem>
            <NavItem onClick={()=>navigate("/team")}>
                팀
            </NavItem>
            <NavItem onClick={()=>navigate("/rental")}>
                구장 예약
            </NavItem>
            <NavItem onClick={()=>navigate("/stadium/reg")}>
                구장 등록
            </NavItem>
        </NavContainer>
    );
};

export default Navs;
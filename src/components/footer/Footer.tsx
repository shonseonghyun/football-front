import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    background-color: #2a2a2a;
`;

const PlatFootballLink = styled(Link)`
    font-size: 16px;
    color: white;
    font-style: italic;
    border-bottom: 2px solid #ffc645;
`;

const FooterContainer = styled.div`
    overflow: auto;
    max-width: 1024px;
    margin: 0 auto;
    padding: 50px 20px 100px 20px;
`;

const Footer = () => {
    return (
        <Container>
            <FooterContainer>
                <h2 style={{marginBottom:"15px"}}>
                    <PlatFootballLink to="/">
                        plabfootball.com
                    </PlatFootballLink>
                </h2>
                <p style={{color:"#999",fontSize:"12px",marginBottom:"20px"}}>
                    풋살하고 싶을 땐, 플랩풋볼
                </p>
                <p style={{color:"#999",fontSize:"12px",marginBottom:"20px"}}>
                    Copyright Football All rights reserved.
                </p>
            </FooterContainer>
        </Container>
    );
};

export default Footer;
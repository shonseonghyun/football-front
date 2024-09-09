import styled from "styled-components";

import { useMatch } from "react-router-dom";
import Carousel from "./carousel/Carousel";
import MainMatches from "./matches/MainMatches";
import Navs from "./navs/Navs";
import QuickMenu from "./quickMenu/QuickMenu";

const Container = styled.div`
`;

const Main = () => {
    const mainMatch= useMatch("/");

    return (
        <Container>
            <Navs match={mainMatch}/>
            <QuickMenu />
            <Carousel />
            <MainMatches />
        </Container>
    );
};

export default Main;        
import { Router } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Routers from "../router/Routers";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <Container>
      <Header />
      <Routers />
      <Footer />
    </Container>
  );
}

export default App;

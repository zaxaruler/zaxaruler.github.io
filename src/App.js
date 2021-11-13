import MainPage from "./components/MainPage";
import Menu from "./components/Menu";
import styled from "styled-components";

const Container = styled('div')`
text-align: center;
background-color: #161616;
letter-spacing: 0.6em;
min-height: 100%;
`; 

function App() {
  return (
      <Container>
       <MainPage />
      </Container>
  );
}

export default App;

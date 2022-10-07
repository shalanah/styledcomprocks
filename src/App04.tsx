import { GlobalStyles } from "./comps/GlobalStyles";
import styled from "styled-components";

const Section = styled.section`
  padding: 10vmin;
  border-radius: 20px;
  border: 3px dotted rgba(255, 255, 255, 0.2);
  text-align: center;
  line-height: 1;
  transition: 0.2s;
  cursor: pointer;
  :hover {
    border-color: #fff;
  }
`;

const H1 = styled.h1`
  font-size: 10vw;
  margin-bottom: 0.15em;
  transition: 0.2s;
  /* ${Section}:hover & {
    color: pink;
  } */
`;

const P = styled.p`
  font-size: 2rem;
`;

function App() {
  return (
    <Section>
      <GlobalStyles />
      <H1>Hi!</H1>
      <P>Paragraph text here</P>
    </Section>
  );
}

export default App;

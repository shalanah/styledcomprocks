import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html, body {
    font-family: sans-serif;
    background: #000;
    color: #ccc;
    width: 100%;
    height: 100%;
    display: flex;
  }
  *,*:before, *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  #root {
    margin: auto;
  }
  h1 {
    font-size: 20vw;
  }
  .pos-center {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

function App() {
  return (
    <div>
      {/* <GlobalStyles /> */}
      <h1>Hi!</h1>
    </div>
  );
}

export default App;

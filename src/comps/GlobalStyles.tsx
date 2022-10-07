import { createGlobalStyle } from "styled-components";

export const colors = {
  red: "red",
  black: "black",
  gray200: "#ccc",
  accent: "blue",
  text: "#fff",
  background: "#000",
};

export const GlobalStyles = createGlobalStyle`
  :root {
    ${Object.entries(colors).map(([k, v]) => `--color-${k}: ${v};`)}
  }
  html, body {
    font-family: sans-serif;
    background: ${colors.background};
    color: ${colors.text};
    width: ${50 * 2}%;
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
`;

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --font-family: "Space Mono", monospace;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  * {
    margin: 0;
    padding: 0;
    font: inherit;
  }

  #root {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  body {
    color: ${({ theme }) => theme.foreground.primary};
    background: ${({ theme }) => theme.background.primary};
    font-family: var(--font-family);
    font-size: 1.5rem;
    line-height: 2.5rem;
    font-weight: 400;
    transition: all 200ms linear;
  }

  h1 {
    font-size: 2.6rem;
    line-height: 3.9rem;
    font-weight: 700;
  }

  h2 {
    font-size: 2.2rem;
    line-height: 3.3rem;
    font-weight: 700;
  }

  h3 {
    font-size: 1.6rem;
    line-height: 2.4rem;
  }

  h4 {
    font-size: 1.3rem;
    line-height: 2rem;
  }
`;

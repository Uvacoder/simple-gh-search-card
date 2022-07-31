import { createGlobalStyle } from "styled-components"

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
    color: ${({ theme }) => theme.txtBase};
    background: ${({ theme }) => theme.bgPrimary};
    font-family: var(--font-family);
    font-weight: 400;
    transition: all 200ms linear;
  }

  svg {
    fill: currentColor;
  }
`

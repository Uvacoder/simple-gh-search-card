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
    display: flex;
    justify-content: center;
    margin-top: 14.4rem;
    margin-bottom: 14.4rem;

    @media screen and (max-width: 768px) {
      margin-top: 14rem;
      margin-bottom: 14rem;
    }

    @media screen and (max-width: 512px) {
      margin-top: 3.1rem;
      margin-bottom: 3.1rem;
    }
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

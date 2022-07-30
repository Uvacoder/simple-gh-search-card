import styled from "styled-components";
import { Icon } from "./icon";

export const Header = ({ onClick, theme }) => {
  return (
    <StyledHeader>
      <h1>Devfinder</h1>
      <Button onClick={onClick}>
        <h4>{theme === "dark" ? "dark" : "light"}</h4>
        <Icon iconName={theme === "dark" ? "moon" : "sun"} />
      </Button>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  border: none;
  color: ${({ theme }) => theme.foreground.primary};
  background-color: transparent;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 200ms linear;

  &:hover {
    color: ${({ theme }) => `${theme.foreground.primary}B3`};

    svg {
      fill: ${({ theme }) => `${theme.foreground.primary}B3`};
    }
  }

  h4 {
    letter-spacing: 0.25rem;
  }

  svg {
    width: 2rem;
    height: 2rem;
    fill: ${({ theme }) => theme.foreground.primary};
    transition: all 200ms linear;
  }
`;

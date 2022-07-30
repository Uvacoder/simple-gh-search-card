import styled, { ThemeProvider } from "styled-components";
import { useThemes } from "./hooks/useThemes";
import { darkTheme, lightTheme } from "./styles/theme";
import { GlobalStyle } from "./styles/global-style";
import { Header } from "./components/header";
import { SearchBar } from "./components/search-bar";
import { UserCard } from "./components/user-card";

export const App = () => {
  const [theme, switchTheme, componentMounted] = useThemes();
  const themeMode = theme === "dark" ? darkTheme : lightTheme;

  if (!componentMounted) {
    return <div />;
  }

  return (
    <StyledApp>
      <ThemeProvider theme={themeMode}>
        <GlobalStyle />
        <Header onClick={() => switchTheme()} theme={theme} />
        <SearchBar />
        <UserCard />
      </ThemeProvider>
    </StyledApp>
  );
};

const StyledApp = styled.section`
  max-width: 730px;
  width: calc(100% - 24px);
`;

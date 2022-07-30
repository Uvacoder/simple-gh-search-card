import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { useThemes } from "./hooks/useThemes";
import { UserContext } from "./context/userContext";
import { darkTheme, lightTheme } from "./styles/theme";
import { GlobalStyle } from "./styles/global-style";
import { Header } from "./components/header";
import { SearchBar } from "./components/search-bar";
import { UserCard } from "./components/user-card";

export const App = () => {
  const [theme, switchTheme, componentMounted] = useThemes();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  const [user, setUser] = useState({});

  if (!componentMounted) {
    return <div />;
  }

  return (
    <StyledApp>
      <ThemeProvider theme={themeMode}>
        <UserContext.Provider value={{ user, setUser }}>
          <GlobalStyle />
          <Header onClick={() => switchTheme()} theme={theme} />
          <SearchBar />
          <UserCard />
        </UserContext.Provider>
      </ThemeProvider>
    </StyledApp>
  );
};

const StyledApp = styled.section`
  max-width: 730px;
  width: calc(100% - 24px);
`;

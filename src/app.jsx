import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { useThemes } from "~/hooks";
import { UserContext } from "~/context";
import { GlobalStyle, darkTheme, lightTheme } from "~/styles";
import { Header, SearchBar, UserCard } from "~/components";

export const App = () => {
  const [theme, switchTheme] = useThemes();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  const [user, setUser] = useState({});

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

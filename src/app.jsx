import styled from "styled-components";
import Header from "./components/header";
import SearchBar from "./components/search-bar";
import UserCard from "./components/user-card";

export default function App() {
  return (
    <StyledApp>
      <Header />
      <SearchBar />
      <UserCard />
    </StyledApp>
  );
}

const StyledApp = styled.section``;

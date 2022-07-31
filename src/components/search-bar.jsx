import { useState, useContext } from "react"
import styled from "styled-components"
import { Icon } from "~/components"
import { UserContext } from "~/context"
import { fetchUser } from "~/utils"

export const SearchBar = () => {
  const { user, setUser } = useContext(UserContext)
  const [searchTerm, setSearchTerm] = useState("")
  const [userFound, setUserFound] = useState(true)

  const handleOnChange = event => {
    setSearchTerm(event.target.value)
  }

  const handleOnClick = () => {
    fetchUser(searchTerm).then(result => {
      if (result !== null) {
        setUser(result)
        setUserFound(true)
      } else setUserFound(false)
    })
  }

  const handleOnKeyDown = event => {
    if (event.key === "Enter") {
      fetchUser(searchTerm).then(result => {
        if (result !== null) {
          setUser(result)
          setUserFound(true)
        } else setUserFound(false)
      })
    }
  }

  return (
    <StyledSearchBar>
      <Label htmlFor="inputSearch">
        <Icon iconName="search" />
      </Label>
      <Input
        id="inputSearch"
        type="search"
        placeholder="Search Github username..."
        onChange={handleOnChange}
        onKeyDown={handleOnKeyDown}
      />
      {!userFound && <NoResults>No results</NoResults>}
      <Button onClick={handleOnClick}>Search</Button>
    </StyledSearchBar>
  )
}

const StyledSearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.bgSecondary};
  border-radius: 1.5rem;
  box-shadow: ${({ theme }) => theme.dropShadow};

  &:focus-within {
    outline: 0.2rem solid ${({ theme }) => theme.txtHighlight};
    outline-offset: 0.4rem;
  }
`

const Label = styled.label`
  margin-left: 3.2rem;
  cursor: pointer;

  svg {
    width: 2.4rem;
    height: 2.4rem;
    fill: ${({ theme }) => theme.txtHighlight};
  }
`

const Input = styled.input`
  width: 100%;
  margin-inline: 2.4rem;
  color: ${({ theme }) => theme.txtBase};
  background-color: transparent;
  font-size: 1.8rem;
  line-height: 2.5rem;
  border: none;

  &:focus {
    outline: none;
    caret-color: ${({ theme }) => theme.txtHighlight};

    &::placeholder {
      opacity: 0.1;
    }
  }

  &::placeholder {
    color: ${({ theme }) => theme.txtBase};
  }

  &::-webkit-search-cancel-button {
    display: none;
  }
`

const Button = styled.button`
  height: 5rem;
  color: ${({ theme }) => theme.buttonFg};
  background-color: ${({ theme }) => theme.buttonBg};
  margin: 0.95rem 1rem 0.95rem auto;
  padding-inline: 2.4rem;
  border-radius: 1rem;
  font-size: 1.6rem;
  line-height: 2.4rem;
  font-weight: 700;
  border: none;
  cursor: pointer;
  transition: all 200ms linear;

  &:hover {
    background-color: ${({ theme }) => theme.buttonBgHover};
  }
`

const NoResults = styled.span`
  margin-right: 2.4rem;
  white-space: nowrap;
  color: ${({ theme }) => theme.errorFg};
  font-size: 1.5rem;
  line-height: 2.2rem;
`

# Frontend Mentor - GitHub user search app solution

![Design preview for the GitHub user search app coding challenge](./design/preview.jpg)

This is a solution to the [GitHub user search app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/github-user-search-app-Q09YOgaH6).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Expected behaviour](#expected-behaviour)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
- [Author](#author)

## Overview

### The challenge

Your challenge is to build out this GitHub user search app using the [GitHub users API](https://docs.github.com/en/rest/reference/users#get-a-user) and get it looking as close to the design as possible.

Your users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Search for GitHub users by their username
- See relevant user information based on their search
- Switch between light and dark themes
- **Bonus**: Have the correct color scheme chosen for them based on their computer preferences. _Hint_: Research `prefers-color-scheme` in CSS.

### Expected behaviour

- On first load, show the profile information for Octocat.
- Display an error message (as shown in the design) if no user is found when a new search is made.
- If a GitHub user hasn't added their name, show their username where the name would be without the `@` symbol and again below with the `@` symbol.
- If a GitHub user's bio is empty, show the text "This profile has no bio" with transparency added (as shown in the design). The lorem ipsum text in the designs shows how the bio should look when it is present.
- If any of the location, website, twitter, or company properties are empty, show the text "Not Available" with transparency added (as shown in the design).
- Website, twitter, and company information should all be links to those resaources. For the company link, it should remove the `@` symbol and link to the company page on GitHub. For Octocat, with `@github` being returned for the company, this would lead to a URL of `https://github.com/github`.

### Links

- [Solution URL](https://www.frontendmentor.io/solutions/github-user-search-app-jyc7dlEEiA)
- [Live Site URL](https://ap-fem-github-user-search-app.netlify.app/)

## My process

### Built with

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Styled Components](https://styled-components.com/)
- Dark mode support
- [Netlify](https://www.netlify.com/)

## Author

- Frontend Mentor - [@alexperronnet](https://www.frontendmentor.io/profile/alexperronnet)
- Website - [alexperronnet.dev](https://alexperronnet.dev)

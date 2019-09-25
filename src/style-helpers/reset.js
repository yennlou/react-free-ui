import { createGlobalStyle } from 'styled-components'

export const ResetStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    font-size: inherit;
  }

  ol, ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`

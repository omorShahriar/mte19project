import React from "react"

import PropTypes from "prop-types"

import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"
const GlobalStyles = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap");
*,
*::before,
*::after {
  box-sizing: border-box;
}
html {
  font-size: 16px;
}
body {
  --bg: #f2f2f2;
  --text: #333;
  --primary: #1a8fe3;
  --accent: #ff9000;
  background-color: var(--bg);
  font-family: 'Poppins', sans-serif;
  margin: 0;
}
body.dark {
  --bg: #333;
  --text: #f2f2f2;
  --primary: #1a8fe3;
  --accent: #ff9000;
  background-color: var(--bg);
  margin: 0;
}
`
const SiteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--bg);
`
const MainWrapper = styled.div`
  transition: 0.3s;
  flex-grow: 1;
  background-color: var(--bg);
  color: var(--text);
`

const FooterWrapper = styled.footer`
  text-align: center;
  padding: 50px 0;
  background-color: var(--bg);
  color: var(--text);
  transition: 0.3s;
  box-shadow: inset 0 2px 2px rgba(0, 0, 0, 0.3);
`
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyles />
      <SiteWrapper>
        <MainWrapper>
          <Header siteTitle={data.site.siteMetadata.title} />
          <main>{children}</main>
        </MainWrapper>

        <FooterWrapper>
          © {new Date().getFullYear()}, Built with
          {` ❤ `}
        </FooterWrapper>
      </SiteWrapper>
    </>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Layout

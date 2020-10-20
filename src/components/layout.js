/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { useState } from "react"

import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"
import { useDarkMode } from "./useDarkMode"
import { lightTheme, darkTheme } from "./Themes"
import Header from "./header"
import styled from "styled-components"
const SiteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
const MainWrapper = styled.div`
  transition: 0.3s;
  flex-grow: 1;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`

const FooterWrapper = styled.footer`
  text-align: center;
  padding: 50px 0;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
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

  const [theme, themeToggler, mountedComponent] = useDarkMode()

  const themeMode = theme === "light" ? lightTheme : darkTheme
  if (!mountedComponent) return <div />
  return (
    <ThemeProvider theme={themeMode}>
      <SiteWrapper>
        <MainWrapper>
          <Header
            changeTheme={themeToggler}
            siteTitle={data.site.siteMetadata.title}
          />
          <main>{children}</main>
        </MainWrapper>

        <FooterWrapper>
          © {new Date().getFullYear()}, Built with
          {` ❤ `}
        </FooterWrapper>
      </SiteWrapper>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

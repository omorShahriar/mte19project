import React from "react"

import PropTypes from "prop-types"
import styled from "styled-components"
import StyledLink from "./styledLink"
import Toggle from "./Toogle"

const HeaderContainer = styled.header`
  background-color: var(--bg);
  transition: 0.3s;
  position: relative;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
`

const HeadingOne = styled.h1`
  text-align: center;
  color: var(--text);
  transition: 0.3s;
`
const NavWrapper = styled.nav`
  display:grid;
  grid-template-columns:repeat(3,auto) 50px;
  gap:50px;
  align-items:center;
  justify-items:center;

  @media (max-width:800px) {
    grid-template-columns:repeat(1,auto);
    font-size:.8rem
  gap:25px;
  }
`
const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <HeadingOne>{siteTitle}</HeadingOne>
      <NavWrapper>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/digital-routine">Digital Routine</StyledLink>
        <StyledLink to="/page-2"> experiment page</StyledLink>
        <Toggle />
      </NavWrapper>
    </div>
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

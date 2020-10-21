import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const LinkWrapper = styled.div`
  display: inline-block;
  position: relative;
`
const UnderLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 150px;
  height: 50px;
  background-color: var(--primary);
  border-radius: 15px 5px;
  box-shadow: inset -5px -5px 15px 5px rgba(0, 0, 0, 0.25);
`

const NavLInk = styled.a`
  text-align: center;
  color: var(--bg);
  display: inline-block;
  text-decoration: none;
  background-color: var(--text);
  border-radius: 15px 5px;
  font-size: 1rem;
  width: 150px;
  height: 50px;
  padding: 15px 0 10px 0;
  margin-right: 20px;
  transition: all 0.2s ease-in;
  transform-origin: 0 100%;
  position: relative;
  z-index: 1;
  &:hover {
    transform: skewY(-5deg);
    transform-origin: 0 100%;
    color: #1a8fe3;
  }

  &.active {
    color: #1a8fe3;
    transform: skewY(-3deg);
    transform-origin: bottom left;
  }
`
export default ({ to, children }) => (
  <>
    <LinkWrapper>
      <UnderLayer></UnderLayer>

      <NavLInk as={Link} to={to} activeClassName="active">
        {children}
      </NavLInk>
    </LinkWrapper>
  </>
)

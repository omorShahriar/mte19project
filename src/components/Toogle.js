import { ThemeToggler } from "gatsby-plugin-dark-mode"
import React, { useState } from "react"
import styled from "styled-components"

const ColorSwitchWrapper = styled.div`
  width: 70px;
  height: 30px;
  background: var(--text);
  transition: 0.3s;
  transition-delay: 0.2s;
  border-radius: 25px;
  position: relative;
`
const Icons = styled.div`
  display: grid;

  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-items: center;
  span {
    font-size: 20px;
    user-select: none;
  }
`
const ColorSwitch = styled.div`
  position: absolute;
  top: -5px;
  left: -5px;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  z-index: 2;
  background: var(--bg);
  transition: 0.3s ease-out;
  box-shadow: inset 0px 1px 3px 1px var(--buttonShadow);
  cursor: pointer;
`
const HiddenSwitch = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`

const Toggle = () => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => {
        return (
          <>
            <label>
              <HiddenSwitch
                type="checkbox"
                onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
                checked={theme === "dark"}
              />{" "}
              <ColorSwitchWrapper>
                <Icons>
                  <span role="img">☀️</span>
                  <span role="img">🌙</span>
                </Icons>
                <ColorSwitch
                  style={{
                    transform: theme === "dark" && `translateX(100%)`,
                  }}
                />
              </ColorSwitchWrapper>
            </label>
          </>
        )
      }}
    </ThemeToggler>
  )
}

export default Toggle

import React, { useState } from "react"
import styled from "styled-components"
import style from "./test.module.css"

const ColorSwitchWrapper = styled.div`
  width: 70px;
  height: 30px;
  background: #333333;
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
  background: #f2f2f2;
  transition: 0.3s ease-out;
  box-shadow: inset 0px 1px 3px 1px var(--buttonShadow);
  cursor: pointer;
`
const HiddenSwitch = styled.input`
  width: 1px;
  height: 1px;
  clip: rect(0, 0, 0, 0);
`
const Test = () => {
  const [dark, setDark] = useState(false)
  return (
    <div style={{ width: `70px`, margin: `0 auto` }}>
      <ColorSwitchWrapper>
        <Icons>
          <span role="img">☀️</span>
          <span role="img">🌙</span>
        </Icons>
        <ColorSwitch
          onClick={() => {
            setDark(!dark)
          }}
          style={{
            transform: dark && `translateX(100%)`,
          }}
        />
        <HiddenSwitch type="checkbox" checked={dark} />
      </ColorSwitchWrapper>
    </div>
  )
}

export default Test

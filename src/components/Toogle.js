import React from "react"
import { useContext } from "react"
import { ThemeContext } from "styled-components"
import { func, string } from "prop-types"
import styled from "styled-components"
const Button = styled.button`
  background: ${({ theme }) => theme.body};
  border: 2px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text};
  border-radius: 30px;
  cursor: pointer;
  font-size: 1rem;
  padding: 25px 40px;
  outline: none;
`
const Toggle = ({ theme, changeTheme }) => {
  const themeContext = useContext(ThemeContext)

  return (
    <Button
      onClick={() => {
        changeTheme()
      }}
    >
      {themeContext.body === "#333" ? "Light mode" : "Dark mode"}
    </Button>
  )
}
Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}
export default Toggle

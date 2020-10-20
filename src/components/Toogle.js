import React from 'react'
import { func, string } from 'prop-types';
import styled from "styled-components"
const Button = styled.button`
  background: ${({ theme }) => theme.body};
  border: 2px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text};
  border-radius: 30px;
  cursor: pointer;
  font-size:0.8rem;
  padding: 25px 40px;
  outline:none;
  `
const Toggle = ({theme,  changeTheme }) => {
    return (
        <Button onClick={() => {changeTheme()}} >
          Switch Theme
        </Button>
    );
};
Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}
export default Toggle;

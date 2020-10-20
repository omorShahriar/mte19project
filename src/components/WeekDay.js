/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"

import { useState } from "react"
import { CSSTransition } from "react-transition-group"
import fadeTransition from "./fadeTransition.module.css"
import style from "./weekday.module.css"
import styled from "styled-components"
import Course from "../components/Course"

const DayWrapper = styled.div`
  text-align: center;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  position: relative;
  height: 50px;
  width: 80%;
  border-radius: 15px 5px;
  transition: all 0.3s ease-in-out;
  margin: 2rem auto;
  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: -5px;
    left: -5px;
    width: 40%;
    height: 60%;
    background-color: ${({ theme }) => theme.primary};
    border-radius: 15px 5px;
  }
  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    bottom: -5px;
    right: -5px;
    width: 40%;
    height: 60%;
    background-color: ${({ theme }) => theme.primary};
    border-radius: 15px 5px;
  }
`
const DayHeader = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  border-radius: 15px 5px;
  height: 50px;
  transition: all 0.3s ease-in-out;
  padding: 10px 0;
  user-select: none;
  cursor: pointer;
  margin: 0;
  border: none;
  outline: none;
  font-size: 1.5rem;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`
const CourseContainer = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
  justify-content: center;
  z-index: 2;
  top: 55px;
  width: 100%;
  margin:50px auto;
  padding:0 30px;
  @media (max-width:900px) {
    grid-template-columns:repeat(1,auto);
    font-size:1rem;
  gap:25px;
  margin:25px auto ;
  padding:0 15px;
      height: 80%;
`
const WeekDay = ({ info }) => {
  const [open, setOpen] = useState(false)
  return (
    <DayWrapper className={` ${open && style.collapseOpen}`}>
      <DayHeader
        className={`${open && style.headerShadow}`}
        onClick={() => setOpen(!open)}
      >
        {info.day}
      </DayHeader>
      <CSSTransition
        in={open}
        timeout={{
          enter: 100,
          exit: 100,
        }}
        classNames={fadeTransition}
        unmountOnExit
      >
        <CourseContainer>
          {info.courses.map(c => (
            <Course key={c.id} courseData={c} />
          ))}
        </CourseContainer>
      </CSSTransition>
    </DayWrapper>
  )
}

export default WeekDay

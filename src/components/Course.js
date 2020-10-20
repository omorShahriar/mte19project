import React from "react"

import styled from "styled-components"
const CourseBox = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.body};

  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.3);
  display: inline-block;
  transition: 0.3s;
  border-radius: 15px 5px;
  color: #333;
  &::before {
    position: absolute;
    z-index: -1;
    content: "";
    top: -5px;
    left: -5px;
    width: 80%;
    height: 80%;
    background-color: ${({ theme }) => theme.accent};
    border-radius: 15px 5px;
  }
  &::after {
    position: absolute;
    z-index: -1;
    content: "";
    bottom: -5px;
    right: -5px;
    width: 80%;
    height: 80%;
    background-color: ${({ theme }) => theme.accent};
    border-radius: 15px 5px;
  }
`
const CourseContent = styled.ul`
  list-style: none;
  text-align: left;
  padding: 0 30px;
  min-height: 85%;
  display:grid;
  grid-template-row: repeat{6,auto};
  align-items:center;
  li {
    color: ${({ theme }) => theme.text};
  }
  a {
    color: ${({ theme }) => theme.accent};
    text-decoration: none;
    font-size: 1.5rem;
    text-transform: uppercase;
    @media (max-width:900px) {
      & {
        font-size: 1.2rem;
      }
    }
  }
`
const Course = ({ theme, courseData }) => {
  return (
    <CourseBox>
      <CourseContent>
        <li>Course Title : {courseData.courseTitle}</li>
        <li>Teacher : {courseData.teacher}</li>
        <li>Time : {courseData.time}</li>
        <li>
          Zoom link :{" "}
          <a
            href={courseData.zoomLink ? courseData.zoomLink : "#"}
            target="blank"
          >
            {" "}
            {courseData.zoomLink ? "Open" : "------"}{" "}
          </a>
        </li>
        <li>Zoom ID : {courseData.zoomId}</li>
        <li>Zoom Pass : {courseData.zoomPass}</li>
      </CourseContent>
    </CourseBox>
  )
}

export default Course

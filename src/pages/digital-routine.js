/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import WeekDay from "../components/WeekDay"

const RoutineInfoWrapper = styled.div`
  text-align: center;

  color: ${({ theme }) => theme.text};
  padding-bottom: 25px;
  h1 {
    margin-top: 0;
    padding-top: 50px;
  }
`
const WeekDaysWrapper = styled.div`
  margin-bottom: 100px;
  position: relative;
  z-index: 0;
`
const DigitalRoutine = ({ theme, data }) => {
  const routine = data.allContentfulRoutine.nodes[0]

  return (
    <Layout>
      <SEO title="Digital Routine" />
      <RoutineInfoWrapper>
        <h1> Digital Routine</h1>
        <h2>Academic Session : {routine.academicSession} </h2>
        <h3>Department : {routine.department} </h3>
        <p>Term : {routine.term} </p>
      </RoutineInfoWrapper>
      <WeekDaysWrapper>
        {routine.weekDays.map(info => (
          <WeekDay info={info} />
        ))}
      </WeekDaysWrapper>
    </Layout>
  )
}

export default DigitalRoutine

export const query = graphql`
  {
    allContentfulRoutine {
      nodes {
        id
        term
        weekDays {
          id
          courses {
            teacher
            time
            zoomId
            zoomLink
            zoomPass
            courseTitle
          }
          day
        }
        department
        academicSession
      }
    }
  }
`

/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import WeekDay from "../components/WeekDay"
const DigitalRoutine = ({data}) => {
  const routine = data.allContentfulRoutine.nodes[0];
  
  return (
    <Layout>
      <SEO title="Digital Routine" />
      <div sx={{ textAlign: "center" }}>
          <h1 > Digital Routine</h1>
        <h2>Academic Session : {routine.academicSession} </h2>
        <h3>Department : {routine.department} </h3>
        <p>Term : {routine.term} </p>
      </div>
      <div sx={{marginBottom:100}}>
        {routine.weekDays.map(info => <WeekDay info={info}/>) }
      </div>
      
      <Link to="/">Go back to the homepage</Link>
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

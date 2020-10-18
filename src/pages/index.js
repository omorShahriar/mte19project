/** @jsx jsx */
import { jsx } from "theme-ui"

import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 sx={{ textAlign: "center" }}>Mechatronics Engineering</h1>
  </Layout>
)

export default IndexPage

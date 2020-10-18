/** @jsx jsx */
import { jsx } from "theme-ui"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <div sx={{ flexGrow: "1" }}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main
          sx={{
            mx: `auto`,
            maxWidth: 960,
            padding: `0 1.0875rem 1.45rem`,
          }}
        >
          {children}
        </main>
      </div>

      <footer
        sx={{
          position: "relative",
          textAlign: "center",
          py: "3",
          "::after": {
            content: '""',
            position: "absolute",
            top: "0rem",
            left: "0rem",
            right: "0rem",
            height: "2px",
            bg: "muted",
          },
        }}
      >
        © {new Date().getFullYear()}, Built with
        {` ❤ `}
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

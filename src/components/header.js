/** @jsx jsx */
import { jsx } from "theme-ui"
import PropTypes from "prop-types"
import StyledLink from "./styledLink"

const Header = ({ siteTitle }) => (
  <header
    sx={{
      bg: "background",
      position: "relative",
      boxShadow : "0px 5px 5px rgba(0, 0, 0, 0.25)"
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 sx={{ textAlign: "center" }}>{siteTitle}</h1>
      <nav>
        
          <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/digital-routine">Digital Routine</StyledLink>
        <StyledLink to="/page-2"> experiment page</StyledLink>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

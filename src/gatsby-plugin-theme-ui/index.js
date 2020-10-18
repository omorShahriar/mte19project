import { toTheme } from "@theme-ui/typography"
import fairyGatesTheme from "typography-theme-fairy-gates"
import { merge } from "theme-ui"

export default merge(toTheme(fairyGatesTheme), {
  colors: {
    text: "#333",
    muted: "#DAE7E3",
    background: "#f2f2f2",
    primary: "#1A8FE3",
    secondary: "#47C2FF",
    accent: "#FF9000",
  },
})

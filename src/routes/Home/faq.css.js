import { style } from "@vanilla-extract/css"
import OpenColor from "open-color"
import { recipe } from "@vanilla-extract/recipes"

const styles = {
  button: style({
    width: "100%",
    backgroundColor: OpenColor.gray[8],
    display: "flex",
    justifyContent: "space-between",
    padding: 20,
  }),
  q: style({}),
  icon: style({}),
  div: recipe({
    base: {
      backgroundColor: OpenColor.gray[8],
      marginTop: 1,
      overflow: "hidden",
      transition: "all .3s",
      padding: "0 20px",
      height: 0,
    },
    variants: {
      state: {
        true: {
          height: "auto",
          padding: 20,
        },
      },
    },
  }),
  p: style({}),
  link: style({
    textDecoration: "underline",
  }),
}

export default styles

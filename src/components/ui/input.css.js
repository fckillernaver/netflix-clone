import { style } from "@vanilla-extract/css"
import { recipe } from "@vanilla-extract/recipes"
import OpenColor from "open-color"

const inputStyles = {
  container: style({
    display: "flex",
    flexDirection: "column",
    position: "relative",
  }),
  label: recipe({
    base: {
      position: "absolute",
      fontSize: "1.1rem",
      opacity: 0.8,
      top: "50%",
      transform: "translateY(-50%)",
      left: 10,
      transition: "all .3s",
    },
    variants: {
      isFocused: {
        true: {
          top: 3,
          fontSize: ".8rem",
          transform: "none",
        },
      },
    },
  }),
  input: style({
    backgroundColor: "rgba(255,255,255,.1)",
    outline: "none",
    border: `1px solid ${OpenColor.green[6]}`,
    color: OpenColor.gray[0],
    borderRadius: 4,
    paddingTop: 23,
  }),
}

export default inputStyles

import { style } from "@vanilla-extract/css"
import OpenColor from "open-color"

const flex = style({
  display: "flex",
  flexDirection: "column",
})

const container = style([
  flex,
  {
    borderRadius: 10,
    padding: "30px 20px",
    rowGap: 20,
    alignItems: "flex-end",
    backgroundColor: OpenColor.gray[8],
    ":hover": {
      backgroundColor: OpenColor.gray[7],
    },
  },
])
const styles = {
  container,
  title: style({
    fontSize: "1.1rem",
    fontWeight: 600,
    selectors: {
      [`${container}:hover &`]: {
        color: "tomato",
      },
    },
  }),
  desc: style({
    fontSize: ".9rem",
    color: OpenColor.gray[4],
    // lineHeight: 1,
  }),
  icon: style({
    fontSize: 40,
  }),
  wrap: style([
    flex,
    {
      rowGap: 10,
      width: "100%",
    },
  ]),
}

export default styles

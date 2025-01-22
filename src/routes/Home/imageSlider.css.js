import { style } from "@vanilla-extract/css"
import { openSans } from "../../assets/fakebase"

// 1. TITLE 위치 중앙 아래

// 2. img 테두리 둥그렇게
const button = style({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 2,
  cursor: "pointer",
  border: "none",
  padding: "20px 3px",
})

const styles = {
  item: {
    container: style({
      position: "relative",
      transition: "all .3s",
      ":hover": {
        transform: "scale(1.08)",
      },
      "::after": {
        content: "",
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,.2)",
        top: 0,
        left: 0,
      },
    }),
    title: style({
      position: "absolute",
      zIndex: 1,
      bottom: 20,
      width: "100%",
      textAlign: "center",
      fontFamily: openSans,
    }),
    img: style({
      objectFit: "cover",
      width: "100%",
      borderRadius: 10,
      position: "relative",
    }),
  },
  prev: style([
    button,
    {
      right: "100%",
    },
  ]),
  next: style([
    button,
    {
      left: "100%",
    },
  ]),
}

export default styles

import { style } from "@vanilla-extract/css"
import OpenColor from "open-color"

const styles = {
  // header
  // container
  header: style({
    // borderBottom: `1px solid ${OpenColor.gray[7]}`,
    // borderColor: OpenColor.gray[7],
    height: "auto",
    paddingRight: 10,
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "rgba(0,0,0,.03)",
    color: OpenColor.gray[0],
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 10000,
    backdropFilter: "blur(2px)",
  }),
  title: style({
    fontSize: 20,
    color: OpenColor.red[8],
    padding: "20px 10px",
    height: "auto",
  }),
  ul: style({ display: "flex", columnGap: 10, alignItems: "center" }),
  lan: style({}),
  login: style({}),
}

export default styles

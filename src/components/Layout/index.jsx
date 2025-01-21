import { Outlet } from "react-router-dom"
import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import OpenColor from "open-color"

// children 을 중괄호 안에서 가져오는 방법은 props drilling을 사용한 방법 react스러운 방법

// rrd => <Outlet />
const Layout = () => {
  return (
    <>
      <Header />

      <main
        style={{
          backgroundColor: OpenColor.gray[9],
          color: OpenColor.gray[0],
          minHeight: "100vh",
          // paddingTop: 60,
        }}
      >
        <Outlet />
      </main>

      <Footer />
    </>
  )
}

export default Layout

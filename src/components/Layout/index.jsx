import { Outlet } from "react-router-dom"
import React from "react"
import Header from "./Header"
import Footer from "./Footer"

// children 을 중괄호 안에서 가져오는 방법은 props drilling을 사용한 방법 react스러운 방법

// rrd => <Outlet />
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout

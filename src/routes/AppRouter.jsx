import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"
import Layout from "../components/Layout"

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter

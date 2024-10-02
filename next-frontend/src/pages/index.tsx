import MainLayout from "@/layout/MainLayout"
import About from "./about"
import Projects from "./project"
import Contact from "./contact"
import { BrowserRouter as Router, Route,Routes } from "react-router-dom"
// import ScrollToTopButton from "@/components/ScrollToTop"
import Hero from "./hero"


const MyApp = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/hero" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* <ScrollToTopButton/> */}
      </MainLayout>
    </Router>
  )
}
export default MyApp
import MainLayout from "@/layout/MainLayout"
import Home from "."
import About from "./about"
import Projects from "./project"
import Contact from "./contact"
import { BrowserRouter as Router, Route,Routes } from "react-router-dom"


const App = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </MainLayout>
    </Router>
  )
}

export default App

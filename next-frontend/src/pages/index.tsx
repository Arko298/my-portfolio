import MainLayout from "@/layout/MainLayout";
import About from "./about";
import Projects from "./project";
import Contact from "./contact";

// import ScrollToTopButton from "@/components/ScrollToTop"
import Hero from "../components/hero";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
      {/* <ScrollToTopButton/> */}
    </>
  );
};
export default Home;

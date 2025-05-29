import Projects from "./project/page";
import ScrollToTopButton from "../components/ScrollToTop";
import Hero from "../components/hero";

const Home = () => {
  return (
    <>
      <Hero />
      {/* <About /> */}
      <Projects />
      {/* <Contact /> */}

      <ScrollToTopButton />
    </>
  );
};
export default Home;

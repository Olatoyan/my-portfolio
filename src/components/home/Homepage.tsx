import Header from "../../ui/Header";
import Contact from "./Contact";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import ProjectSection from "./ProjectSection";
import TechStack from "./TechStack";

function Homepage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TechStack />
        <ProjectSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default Homepage;

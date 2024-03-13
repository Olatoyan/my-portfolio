import Header from "./Header";
import Contact from "./Contact";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import ProjectSection from "./ProjectSection";
import TechStack from "./TechStack";
import { useDarkMode } from "../contexts/DarkModeContext";

function Homepage() {
  const { isDarkMode } = useDarkMode();
  return (
    <div className={`${isDarkMode ? "bg-[#191919]" : "bg-white"}`}>
      <div className={`relative max-w-[144rem] mx-auto`}>
        <Header />
        <main>
          <HeroSection />
          <TechStack />
          <ProjectSection />
          <Contact />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;

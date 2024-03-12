import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

function Header() {
  return (
    <header className="flex items-center justify-between px-32 py-12 fixed top-0 left-0 w-full z-10 shadow-box-sh bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg">
      <img src="./logo.svg" alt="logo" />

      <nav className="flex items-center gap-24">
        <ul className="flex items-center gap-16">
          <li className="text-[1.2rem] tracking-[0.2rem] uppercase text-[#33323d] cursor-pointer hover:text-[#5fb4a2]">
            <ScrollLink to="home" smooth={true} duration={500}>
              Home
            </ScrollLink>
          </li>
          <li
            className={`text-[1.2rem] tracking-[0.2rem] uppercase cursor-pointer text-[#33323d] hover:text-[#5fb4a2]
            `}
          >
            <ScrollLink to="stack" smooth={true} duration={500}>
              Tech Stack
            </ScrollLink>
          </li>
          <li
            className={`text-[1.2rem] tracking-[0.2rem] uppercase cursor-pointer text-[#33323d] hover:text-[#5fb4a2]
            `}
          >
            <ScrollLink to="project" smooth={true} duration={500}>
              Projects
            </ScrollLink>
          </li>
          <li
            className={`text-[1.2rem] tracking-[0.2rem] uppercase cursor-pointer text-[#33323d] hover:text-[#5fb4a2]`}
          >
            <ScrollLink to="contact" smooth={true} duration={500}>
              Contact
            </ScrollLink>
          </li>
        </ul>

        <div className="flex items-center gap-8">
          <Link to="https://github.com/olatoyan" target="_blank">
            <FaGithub size={"2.4rem"} />
          </Link>
          <Link to="https://twitter.com/_annonnymouss_" target="_blank">
            <FaXTwitter size={"2.4rem"} />
          </Link>
          <Link to="https://linkedin.com/in/olatoyan" target="_blank">
            <FaLinkedin size={"2.4rem"} />
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;

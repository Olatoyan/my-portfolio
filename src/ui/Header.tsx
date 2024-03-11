import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <header className="flex items-center justify-between px-32 pt-12">
      <img src="./logo.svg" alt="logo" />

      <nav className="flex items-center gap-24">
        <ul className="flex items-center gap-16">
          <li
            className={`text-[1.2rem] tracking-[0.2rem] uppercase  ${
              pathname === "/"
                ? "text-[#5fb4a2]"
                : "text-[#33323d] hover:text-[#5fb4a2]"
            }`}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={`text-[1.2rem] tracking-[0.2rem] uppercase ${
              pathname === "/portfolio"
                ? "text-[#5fb4a2]"
                : "text-[#33323d] hover:text-[#5fb4a2]"
            }`}
          >
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li
            className={`text-[1.2rem] tracking-[0.2rem] uppercase ${
              pathname === "/contact"
                ? "text-[#5fb4a2]"
                : "text-[#33323d] hover:text-[#5fb4a2]"
            }`}
          >
            <Link to="/contact">Contact me</Link>
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

import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex items-center justify-between">
      <img src="./logo.svg" alt="logo" />

      <nav>
        <ul className="flex items-center gap-16">
          <li
            className={`text-[1.2rem] tracking-[0.2rem] uppercase text-[#5fb4a2]`}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={`text-[1.2rem] tracking-[0.2rem] uppercase text-[#5fb4a2]`}
          >
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li
            className={`text-[1.2rem] tracking-[0.2rem] uppercase text-[#5fb4a2]`}
          >
            <Link to="/contact">Contact me</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

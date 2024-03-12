import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#33323d] px-32 flex items-center justify-between py-8">
      <div className="flex items-center gap-12">
        <img src="./favicon.svg" alt="footer logo" />
        <ul className="flex items-center gap-8">
          <li>
            <Link
              to="/"
              className="text-[1.2rem] tracking-[0.2rem] uppercase text-white"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="text-[1.2rem] tracking-[0.2rem] uppercase text-white"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="text-[1.2rem] tracking-[0.2rem] uppercase text-white"
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-8">
        <p className="text-[1.3rem] text-white">Connect with me:</p>
        <Link
          to="https://github.com/olatoyan"
          className="underline text-[1.2rem] tracking-[0.2rem] text-white"
        >
          Github
        </Link>
        <Link
          to="https://twitter.com/_annonnymouss_"
          className="underline text-[1.2rem] tracking-[0.2rem] text-white"
        >
          Twitter
        </Link>
        <Link
          to="https://linkedin.com/in/olatoyan"
          className="underline text-[1.2rem] tracking-[0.2rem] text-white"
        >
          LinkedIn
        </Link>
      </div>
    </footer>
  );
}

export default Footer;

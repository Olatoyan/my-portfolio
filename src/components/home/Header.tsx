import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { IoMoon, IoSunnyOutline, IoClose } from "react-icons/io5";
import { useDarkMode } from "../contexts/DarkModeContext";
import { RiMenu4Fill } from "react-icons/ri";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function Header() {
  const { isDarkMode, setIsDarkMode } = useDarkMode();
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = window.innerWidth <= 1024;

  const iconVariants = {
    open: { rotate: 90 },
    closed: { rotate: 0 },
  };
  return (
    <header
      className={`flex items-center justify-between px-32 py-12 fixed top-0 left-0 w-full desktop:px-20 z-10 shadow-box-sh backdrop-filter backdrop-blur-lg bg-opacity-60 tablet:px-10 mobile:py-5 ${
        isDarkMode ? "bg-[#f5ebeb]" : "bg-white"
      }`}
    >
      <img
        src={`${isDarkMode ? "./favicon.svg" : "./logo.svg"}`}
        alt="logo"
        className="tablet:w-[4.5rem]"
      />

      <AnimatePresence>
        {(isOpen || !isMobile) && (
          <motion.nav
            initial={{ opacity: isMobile ? 0 : 1, x: isMobile ? "-100%" : 0 }}
            animate={{ opacity: isMobile ? 1 : 1, x: isMobile ? 0 : 0 }}
            exit={{ opacity: isMobile ? 0 : 1, x: isMobile ? "-100%" : 0 }}
            className={`flex items-center gap-24 laptop:shadow-box-sh laptop:top-[10rem] laptop:left-0 laptop:py-12 laptop:px-16 laptop:w-full laptop:fixed laptop:flex-col mobile:top-[6rem] laptop:min-h-[100dvh] transition-none duration-0 ${
              isDarkMode ? "laptop:bg-[#363636]" : "laptop:bg-white"
            }`}
          >
            <div className="flex items-center gap-4 laptop:hidden">
              <IoSunnyOutline
                size={"4rem"}
                className={` cursor-pointer p-3  ${
                  isDarkMode
                    ? ""
                    : "bg-[#9a9a9a] bg-opacity-40 rounded-full text-white"
                } `}
                onClick={() => setIsDarkMode(false)}
              />
              <IoMoon
                size={"4rem"}
                className={` cursor-pointer p-3  ${
                  isDarkMode
                    ? "bg-white bg-opacity-40 rounded-full text-white"
                    : ""
                } `}
                onClick={() => setIsDarkMode(true)}
              />
            </div>
            <ul className="flex items-center gap-16 laptop:flex-col">
              <li
                className={`text-[1.2rem] tracking-[0.2rem] uppercase cursor-pointer hover:underline ${
                  isDarkMode ? "text-white" : "text-[#33323d]"
                }`}
              >
                <ScrollLink
                  to="home"
                  smooth={true}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </ScrollLink>
              </li>
              <li
                className={`text-[1.2rem] tracking-[0.2rem] uppercase cursor-pointer hover:underline ${
                  isDarkMode ? "text-white" : "text-[#33323d]"
                }`}
              >
                <ScrollLink
                  to="stack"
                  smooth={true}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                >
                  Tech Stack
                </ScrollLink>
              </li>
              <li
                className={`text-[1.2rem] tracking-[0.2rem] uppercase cursor-pointer hover:underline ${
                  isDarkMode ? "text-white" : "text-[#33323d]"
                }`}
              >
                <ScrollLink
                  to="project"
                  smooth={true}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                >
                  Projects
                </ScrollLink>
              </li>
              <li
                className={`text-[1.2rem] tracking-[0.2rem] uppercase cursor-pointer hover:underline ${
                  isDarkMode ? "text-white" : "text-[#33323d]"
                }`}
              >
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </ScrollLink>
              </li>
            </ul>

            <div className="flex items-center gap-8 ">
              <Link
                to="https://github.com/olatoyan"
                target="_blank"
                aria-label="github"
              >
                <FaGithub
                  size={"2.4rem"}
                  className={`${isDarkMode ? "text-white" : "text-black"}`}
                />
              </Link>
              <Link
                to="https://twitter.com/_annonnymouss_"
                target="_blank"
                aria-label="twitter"
              >
                <FaXTwitter
                  size={"2.4rem"}
                  className={`${isDarkMode ? "text-white" : "text-black"}`}
                />
              </Link>
              <Link
                to="https://linkedin.com/in/olatoyan"
                target="_blank"
                aria-label="linkedin"
              >
                <FaLinkedin
                  size={"2.4rem"}
                  className={`${isDarkMode ? "text-white" : "text-black"}`}
                />
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      <div className="hidden laptop:flex items-center gap-4 ">
        <IoSunnyOutline
          size={"4rem"}
          className={` cursor-pointer p-3  ${
            isDarkMode
              ? ""
              : "bg-[#9a9a9a] bg-opacity-40 rounded-full text-white"
          } `}
          onClick={() => setIsDarkMode(false)}
        />
        <IoMoon
          size={"4rem"}
          className={` cursor-pointer p-3  ${
            isDarkMode ? "bg-white bg-opacity-40 rounded-full text-white" : ""
          } `}
          onClick={() => setIsDarkMode(true)}
        />
      </div>
      <div
        className="hidden laptop:flex"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <motion.div
          className={` ${
            isOpen ? "hidden" : "block"
          } transition-none duration-0`}
          variants={iconVariants}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
        >
          <RiMenu4Fill size={"2.4rem"} />
        </motion.div>
        <motion.div
          className={` ${
            isOpen ? "block" : "hidden"
          } transition-none duration-0`}
          variants={iconVariants}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
        >
          <IoClose size={"2.4rem"} />
        </motion.div>
      </div>
    </header>
  );
}

export default Header;

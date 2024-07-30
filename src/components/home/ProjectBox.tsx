import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useDarkMode } from "../contexts/DarkModeContext";
import { FaGithub, FaLink } from "react-icons/fa6";

function ProjectBox({
  img,
  title,
  description,
  url,
  github,
  techStack,
}: {
  img: string;
  title: string;
  description: string;
  url: string;
  github: string;
  techStack: string;
}) {
  const { isDarkMode } = useDarkMode();

  return (
    <div
      className={`rounded-[2rem] shadow-box-sh overflow-hidden flex flex-col ${
        isDarkMode ? "bg-[#363636]" : "bg-white"
      }`}
    >
      <motion.img
        src={img}
        alt={`Image of ${title}`}
        className="h-[25rem] mobile:h-[17.6rem]"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", duration: 0.3 }}
      />
      <h3
        className={`text-[2.8rem] leading-[2.6rem] font-ibarra font-bold pt-[2.7rem] px-10 laptop:text-[2rem] ${
          isDarkMode ? "text-white" : "text-[#1a1a1a]"
        }`}
      >
        {title}
      </h3>
      <p
        className={`pt-[1.7rem] laptop:text-[1.6rem] pb-8 text-[1.8rem] leading-[2.6rem] font-light mobile:text-[1.5rem] mobile:leading-[2rem] px-10 ${
          isDarkMode ? "text-[#a7a7a7]" : "text-[#666]"
        }`}
      >
        {description}
      </p>
      <p
        className={`text-[1.6rem] font-light px-10 pb-10 ${
          isDarkMode ? "text-white" : "text-[#33323d]"
        }`}
      >
        <span className="font-bold"> Tech Stack</span>: {techStack}
      </p>

      <div className="flex justify-between mx-10 mt-auto mb-12">
        {/* <motion.span
          className="border border-solid w-full border-[#33323d] text-[#33323d py-6 px-12 text-[1.2rem] uppercase tracking-[0.2rem] text-center hover:bg-[#33323d] hover:text-white"
          initial={{ scaleX: 1 }}
          whileHover={{ scaleX: 1.1 }}
          transition={{ type: "spring", duration: 0.3 }}
        >
          View Project
        </motion.span> */}
        <Link
          to={url}
          target="_blank"
          className={`flex items-center gap-4 text-[1.6rem] leading-[2.6rem] hover:underline ${
            isDarkMode ? "text-white" : "text-[#33323d]"
          }`}
        >
          <FaLink />
          Live preview
        </Link>
        <Link
          to={github}
          target="_blank"
          className={`flex items-center gap-4 text-[1.6rem] leading-[2.6rem] hover:underline ${
            isDarkMode ? "text-white" : "text-[#33323d]"
          }`}
        >
          <FaGithub />
          View Code
        </Link>
      </div>
    </div>
  );
}

export default ProjectBox;

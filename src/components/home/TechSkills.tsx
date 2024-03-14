import { ReactNode } from "react";
import { motion } from "framer-motion";
import { useDarkMode } from "../contexts/DarkModeContext";
function TechSkills({ children, text }: { children: ReactNode; text: string }) {
  const { isDarkMode } = useDarkMode();
  return (
    <motion.div
      className="flex items-center flex-col gap-5 mobile:gap-2"
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.2 }}
    >
      {children}
      <p
        className={`${
          isDarkMode ? "text-[#a7a7a7]" : "text-[#666]"
        } text-[2rem] leading-[2.6rem] mobile:text-[1.5rem] mobile:leading-[2rem] `}
      >
        {text}
      </p>
    </motion.div>
  );
}

export default TechSkills;

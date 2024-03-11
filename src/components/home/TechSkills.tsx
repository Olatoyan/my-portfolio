import { ReactNode } from "react";
import { motion } from "framer-motion";
function TechSkills({ children, text }: { children: ReactNode; text: string }) {
  return (
    <motion.div
      className="flex items-center flex-col gap-5"
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.2 }}
    >
      {children}
      <p className={`text-[#666] text-[2rem] leading-[2.6rem]`}>{text}</p>
    </motion.div>
  );
}

export default TechSkills;

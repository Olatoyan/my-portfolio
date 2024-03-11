import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function ProjectBox({
  img,
  title,
  description,
}: {
  img: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-[2rem] bg-white shadow-box-sh overflow-hidden flex flex-col">
      <motion.img
        src={img}
        alt={`Image of ${title}`}
        className="h-[25rem]"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", duration: 0.3 }}
      />
      <h3 className="text-[#1a1a1a] text-[2.8rem] leading-[2.6rem] font-ibarra font-bold pt-[2.7rem] px-10">
        {title}
      </h3>
      <p className="pt-[1.7rem] pb-8 text-[#666] text-[1.8rem] leading-[2.6rem] font-light px-10">
        {description}
      </p>

      <Link to={`/portfolio/${title}`} className="flex mx-10 mt-auto mb-12">
        <motion.span
          className="border border-solid w-full border-[#33323d] text-[#33323d py-6 px-12 text-[1.2rem] uppercase tracking-[0.2rem] text-center hover:bg-[#33323d] hover:text-white"
          initial={{ scaleX: 1 }}
          whileHover={{ scaleX: 1.1 }}
          transition={{ type: "spring", duration: 0.3 }}
        >
          View Project
        </motion.span>
      </Link>
    </div>
  );
}

export default ProjectBox;

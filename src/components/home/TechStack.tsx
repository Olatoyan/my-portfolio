import {
  FaCss3,
  FaGitAlt,
  FaHtml5,
  FaNode,
  FaReact,
  FaSass,
} from "react-icons/fa6";
import {
  SiExpress,
  SiFramer,
  SiJavascript,
  SiMongodb,
  SiReactquery,
  SiRedux,
  SiStyledcomponents,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import TechSkills from "./TechSkills";

function TechStack() {
  return (
    <section className="pt-80 px-32">
      <h2 className="text-[#42446e] text-[4.8rem] font-bold leading-[2.6rem] pb-20 font-ibarra text-center">
        My Tech Stack
      </h2>
      <h3 className="text-[#666] text-[3.2rem] leading-[2.6rem] text-center">
        Technologies I've been working with recently
      </h3>

      <div className="flex items-center justify-center flex-wrap gap-28 pt-[14rem]">
        <TechSkills text="HTML5">
          <FaHtml5 color="#E44F26" size={"10rem"} />
        </TechSkills>
        <TechSkills text="CSS3">
          <FaCss3 color="#1572B6" size={"10rem"} />
        </TechSkills>
        <TechSkills text="JavaScript">
          <SiJavascript color="#F5DE19" size={"10rem"} />
        </TechSkills>
        <TechSkills text="TypeScript">
          <SiTypescript color="#3178c6" size={"10rem"} />
        </TechSkills>
        <TechSkills text="React">
          <FaReact color="#00D8FF" size={"10rem"} />
        </TechSkills>
        <TechSkills text="Redux">
          <SiRedux color="#764ABC" size={"10rem"} />
        </TechSkills>
        <TechSkills text="TailwindCss">
          <SiTailwindcss color="#764ABC" size={"10rem"} />
        </TechSkills>
        <TechSkills text="SASS">
          <FaSass color="#CD6799" size={"10rem"} />
        </TechSkills>
        <TechSkills text="React Query">
          <SiReactquery color="#EF7834" size={"10rem"} />
        </TechSkills>
        <TechSkills text="NodeJs">
          <FaNode color="#215732" size={"10rem"} />
        </TechSkills>
        <TechSkills text="ExpressJs">
          <SiExpress color="#333" size={"10rem"} />
        </TechSkills>
        <TechSkills text="MongoDB">
          <SiMongodb color="#589636" size={"10rem"} />
        </TechSkills>
        <TechSkills text="Supabase">
          <SiSupabase color="#32805B" size={"10rem"} />
        </TechSkills>
        <TechSkills text="Framer Motion">
          <SiFramer color="#327780" size={"10rem"} />
        </TechSkills>
        <TechSkills text="Git">
          <FaGitAlt color="#DE4C36" size={"10rem"} />
        </TechSkills>
        <TechSkills text="Styled Components">
          <SiStyledcomponents color="#BA6AA0" size={"10rem"} />
        </TechSkills>
      </div>
    </section>
  );
}

export default TechStack;

import { FaGitAlt, FaNode, FaReact, FaSass } from "react-icons/fa6";
import {
  SiExpress,
  SiFramer,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiReactquery,
  SiRedux,
  SiStyledcomponents,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import TechSkills from "./TechSkills";
import { useDarkMode } from "../contexts/DarkModeContext";

function TechStack() {
  const { isDarkMode } = useDarkMode();
  return (
    <section
      id="stack"
      className="pt-80 laptop:pt-40 px-32 desktop:px-20 tablet:px-10 tablet:pt-[7.5rem]"
    >
      <h2
        className={`text-[4.8rem] laptop:text-[3rem] laptop:leading-[3rem] laptop:pb-4 font-bold leading-[4.8rem] pb-10 font-ibarra text-center ${
          isDarkMode ? "text-white" : "text-[#42446e]"
        }`}
      >
        My Tech Stack
      </h2>
      <h3
        className={`text-[3.2rem] laptop:text-[1.7rem] leading-[2.6rem] text-center ${
          isDarkMode ? "text-[#a7a7a7]" : "text-[#666]"
        }`}
      >
        Technologies I work with
      </h3>

      <div className="flex items-center justify-center flex-wrap gap-28 pt-32 desktop:gap-20 laptop:gap-10 tablet:pt-16">
        <TechSkills text="Next.js">
          <SiNextdotjs
            color="#000"
            className="h-[10rem] desktop:h-[8rem] desktop:w-[8rem] w-[10rem] laptop:w-[4rem] laptop:h-[4rem]"
          />
        </TechSkills>
        <TechSkills text="React">
          <FaReact
            color="#00D8FF"
            className="h-[10rem] desktop:h-[8rem] desktop:w-[8rem] w-[10rem] laptop:w-[4rem] laptop:h-[4rem]"
          />
        </TechSkills>
        <TechSkills text="TypeScript">
          <SiTypescript
            color="#3178c6"
            className="h-[10rem] desktop:h-[8rem] desktop:w-[8rem] w-[10rem] laptop:w-[4rem] laptop:h-[4rem]"
          />
        </TechSkills>
        <TechSkills text="JavaScript">
          <SiJavascript
            color="#F5DE19"
            className="h-[10rem] desktop:h-[8rem] desktop:w-[8rem] w-[10rem] laptop:w-[4rem] laptop:h-[4rem]"
          />
        </TechSkills>

        <TechSkills text="Redux">
          <SiRedux
            color="#764ABC"
            className="h-[10rem] desktop:h-[8rem] desktop:w-[8rem] w-[10rem] laptop:w-[4rem] laptop:h-[4rem]"
          />
        </TechSkills>
        <TechSkills text="TailwindCss">
          <SiTailwindcss
            color="#764ABC"
            className="h-[10rem] desktop:h-[8rem] desktop:w-[8rem] w-[10rem] laptop:w-[4rem] laptop:h-[4rem]"
          />
        </TechSkills>
        <TechSkills text="SASS">
          <FaSass
            color="#CD6799"
            className="h-[10rem] desktop:h-[8rem] desktop:w-[8rem] w-[10rem] laptop:w-[4rem] laptop:h-[4rem]"
          />
        </TechSkills>
        <TechSkills text="React Query">
          <SiReactquery
            color="#EF7834"
            className="h-[10rem] desktop:h-[8rem] desktop:w-[8rem] w-[10rem] laptop:w-[4rem] laptop:h-[4rem]"
          />
        </TechSkills>
        <TechSkills text="NodeJs">
          <FaNode
            color="#215732"
            className="h-[10rem] desktop:h-[8rem] desktop:w-[8rem] w-[10rem] laptop:w-[4rem] laptop:h-[4rem]"
          />
        </TechSkills>
        <TechSkills text="ExpressJs">
          <SiExpress
            color="#333"
            className="h-[10rem] desktop:h-[8rem] desktop:w-[8rem] w-[10rem] laptop:w-[4rem] laptop:h-[4rem]"
          />
        </TechSkills>
        <TechSkills text="MongoDB">
          <SiMongodb
            color="#589636"
            className="h-[10rem] desktop:h-[8rem] desktop:w-[8rem] w-[10rem] laptop:w-[4rem] laptop:h-[4rem]"
          />
        </TechSkills>
        <TechSkills text="Supabase">
          <SiSupabase
            color="#32805B"
            className="h-[10rem] desktop:h-[8rem] desktop:w-[8rem] w-[10rem] laptop:w-[4rem] laptop:h-[4rem]"
          />
        </TechSkills>
        <TechSkills text="Framer Motion">
          <SiFramer
            color="#327780"
            className="h-[10rem] desktop:h-[8rem] desktop:w-[8rem] w-[10rem] laptop:w-[4rem] laptop:h-[4rem]"
          />
        </TechSkills>
        <TechSkills text="Git">
          <FaGitAlt
            color="#DE4C36"
            className="h-[10rem] desktop:h-[8rem] desktop:w-[8rem] w-[10rem] laptop:w-[4rem] laptop:h-[4rem]"
          />
        </TechSkills>
        <TechSkills text="Styled Components">
          <SiStyledcomponents
            color="#BA6AA0"
            className="h-[10rem] desktop:h-[8rem] desktop:w-[8rem] w-[10rem] laptop:w-[4rem] laptop:h-[4rem]"
          />
        </TechSkills>
      </div>
    </section>
  );
}

export default TechStack;

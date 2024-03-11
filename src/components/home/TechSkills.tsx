import { ReactNode } from "react";

function TechSkills({ children, text }: { children: ReactNode; text: string }) {
  return (
    <div className="flex items-center flex-col gap-5">
      {children}
      <p className={`text-[#666] text-[2rem] leading-[2.6rem]`}>{text}</p>
    </div>
  );
}

export default TechSkills;

import { HRLine } from "./shared/GrayHRLine";

export function SkillItem({ skill }) {
  return (
    <>
      <div className="flex flex-row items-center">
        <div className="w-1/4 font-bold">{skill.title}</div>
        <div>{skill.description}</div>
      </div>
      <GrayHRLine />
    </>
  );
}


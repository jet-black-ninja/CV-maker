import { SectionTitle } from "./shared/SectionTitle";
import { SkillItem } from "./SkillItem";

export function SkillSection({ skills }) {
  if (!skills || skills.length === 0) {
    return null;
  }
  return (
    <div className="flex flex-col mb-6">
      <SectionTitle title="Skills" />
      <div className="flex flex-col">
        {skills.map((skill) => (
          <SkillItem key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
}


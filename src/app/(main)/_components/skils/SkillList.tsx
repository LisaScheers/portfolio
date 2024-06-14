import Skill from "@/app/(main)/_components/skils/Skill";
import { getSkills } from "@/server/skills";

export default async function SkillList() {
  const skills = await getSkills();
  return (
    <>
      {skills.map((skill) => (
        <Skill
          key={skill.id}
          name={skill.name}
          level={skill.level}
          description={skill.description ?? undefined}
          link={skill.link ?? undefined}
        />
      ))}
    </>
  );
}

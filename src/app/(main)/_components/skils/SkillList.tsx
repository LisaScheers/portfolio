import { db } from "@/server/db";
import Skill from "@/app/(main)/_components/skils/Skill";

export const dynamic = "force-dynamic";

export default async function SkillList() {
  const skills = await db.query.Skills.findMany();
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

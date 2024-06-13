"use client";
import { Progress } from "@/components/ui/progress";

type SkillProps = {
  name: string;
  level: number;
  description?: string;
  link?: string;
};

export default function Skill(props: SkillProps) {
  return (
    <div className="grid gap-1">
      <h3 className="text-xl font-bold text-[#e91e63]">{props.name}</h3>
      <Progress value={props.level} />
      <p className="text-[#f48fb1] dark:text-[#f48fb1]">{props.description}</p>
      <p className="text-[#f48fb1] dark:text-[#f48fb1]">{props.link}</p>
    </div>
  );
}

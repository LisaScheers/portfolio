"use client";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

type SkillProps = {
  name: string;
  level: number;
  description?: string;
  link?: string;
};

export default function Skill(props: SkillProps) {
  return (
    <Card>
      <CardHeader>
        <h3 className="text-xl font-bold">{props.name}</h3>
      </CardHeader>
      <CardContent>
        <Progress value={props.level} />
        <p className="">{props.description}</p>
        <p className="">{props.link}</p>
      </CardContent>
    </Card>
  );
}

import { db } from "@/server/db";
import Case from "@/app/(main)/_components/Showcase/Case";

export const dynamic = "force-dynamic";

export default async function ShowcaseList() {
  const showcases = await db.query.Cases.findMany();
  return (
    <>
      {showcases.map((showcase) => (
        <Case
          key={showcase.id}
          title={showcase.title}
          description={showcase.description}
        />
      ))}
    </>
  );
}

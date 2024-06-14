import Case from "@/app/(main)/_components/Showcase/Case";
import { getCases } from "@/server/cases";

export default async function ShowcaseList() {
  const showcases = await getCases();
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

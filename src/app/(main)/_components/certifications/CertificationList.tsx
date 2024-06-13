import { db } from "@/server/db";
import Certification from "@/app/(main)/_components/certifications/Certifucation";

export default async function CertificationList() {
  const certifications = await db.query.Certifications.findMany();

  return (
    <>
      {certifications.map((certification) => (
        <Certification
          key={certification.id}
          title={certification.title}
          issuer={certification.issuer}
          date={certification.date}
          link={certification.link ?? undefined}
          description={certification.description ?? undefined}
        />
      ))}
    </>
  );
}

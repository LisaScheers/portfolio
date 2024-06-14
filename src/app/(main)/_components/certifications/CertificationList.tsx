import Certification from "@/app/(main)/_components/certifications/Certifucation";
import { getCertifications } from "@/server/certifications";

export default async function CertificationList() {
  const certifications = await getCertifications();

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

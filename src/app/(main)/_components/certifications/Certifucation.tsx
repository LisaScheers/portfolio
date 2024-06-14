import Link from "next/link";

type CertificationProps = {
  title: string;
  issuer: string;
  date: string;
  link?: string;
  description?: string;
};
export default function Certification(props: CertificationProps) {
  return (
    <div className="grid gap-1">
      <h3 className="text-xl font-bold text-[#e91e63]">{props.title}</h3>
      {props.link ? (
        <Link href={props.link}>
          <p className="text-[#f48fb1] dark:text-[#f48fb1]">
            Issuer: {props.issuer}
          </p>
        </Link>
      ) : (
        <p className="text-[#f48fb1] dark:text-[#f48fb1]">
          Issuer: {props.issuer}
        </p>
      )}
      <p className="text-[#f48fb1] dark:text-[#f48fb1]">Date: {props.date}</p>
      <p className="text-[#f48fb1] dark:text-[#f48fb1]">{props.description}</p>
    </div>
  );
}

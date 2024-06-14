import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

type CertificationProps = {
  title: string;
  issuer: string;
  date: string;
  link?: string;
  description?: string;
};
export default function Certification(props: CertificationProps) {
  return (
    <Card>
      <CardHeader>
        <h3 className="text-lg font-bold ">{props.title}</h3>
      </CardHeader>
      <CardContent>
        <p className="">{props.description}</p>
      </CardContent>
      <CardFooter className="justify-between">
        <div className="block text-xs">Issuer: {props.issuer}</div>
        <div className="block text-xs">Date: {props.date}</div>
      </CardFooter>
    </Card>
  );
}

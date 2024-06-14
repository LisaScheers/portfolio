import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

type TestimonialProps = {
  name: string;
  link?: string;
  title?: string;
  content: string;
};

export default function Testimonial(props: TestimonialProps) {
  const initials = props.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center">
          <Avatar className="h-10 w-10 border">
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div className="ml-4">
            <h3 className="font-semibold ">{props.name}</h3>
            <p className="text-sm ">{props.title}</p>
          </div>
        </div>{" "}
      </CardHeader>
      <CardContent>
        <blockquote className="text-lg leading-relaxed">
          {props.content}
        </blockquote>
      </CardContent>
    </Card>
  );
}

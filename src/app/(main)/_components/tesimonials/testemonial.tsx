import { Avatar, AvatarFallback } from "@/components/ui/avatar";

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
    <div className="flex flex-col justify-center space-y-4 rounded-lg bg-white p-6 shadow-md dark:bg-gray-950">
      <div className="flex items-center">
        <Avatar className="h-10 w-10 border">
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div className="ml-4">
          <h3 className="font-semibold text-[#e91e63]">{props.name}</h3>
          <p className="text-sm text-[#f48fb1] dark:text-[#f48fb1]">
            {props.title}
          </p>
        </div>
      </div>
      <blockquote className="text-lg leading-relaxed text-[#f48fb1] dark:text-[#f48fb1]">
        {props.content}
      </blockquote>
    </div>
  );
}

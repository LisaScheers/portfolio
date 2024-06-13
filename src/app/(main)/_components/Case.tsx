type CaseProps = {
  title: string;
  description: string;
};
export default function Case(props: CaseProps) {
  return (
    <div className="grid gap-1">
      <h3 className="text-xl font-bold text-[#e91e63]">{props.title}</h3>
      <p className="text-[#f48fb1] dark:text-[#f48fb1]">{props.description}</p>
    </div>
  );
}

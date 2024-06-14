type CaseProps = {
  title: string;
  description: string;
};
export default function Case(props: CaseProps) {
  return (
    <div className="grid gap-1">
      <h3 className="text-xl font-bold ">{props.title}</h3>
      <p className="">{props.description}</p>
    </div>
  );
}

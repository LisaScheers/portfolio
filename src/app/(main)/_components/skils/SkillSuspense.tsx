/*
<div className="grid gap-1">
      <h3 className="text-xl font-bold text-[#e91e63]">{props.name}</h3>
      <Progress value={props.level} />
      <p className="text-[#f48fb1] dark:text-[#f48fb1]">{props.description}</p>
      <p className="text-[#f48fb1] dark:text-[#f48fb1]">{props.link}</p>
    </div>
 */
export default function SkillSuspense() {
  return (
    <>
      <div className="grid gap-1">
        <h3 className="text-xl font-bold text-[#e91e63]">Loading...</h3>
        <div className="h-4 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800"></div>
        <div className="h-4 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800"></div>
        <div className="h-4 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800"></div>
      </div>

      <div className="grid gap-1">
        <h3 className="text-xl font-bold text-[#e91e63]">Loading...</h3>
        <div className="h-4 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800"></div>
        <div className="h-4 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800"></div>
        <div className="h-4 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800"></div>
      </div>

      <div className="grid gap-1">
        <h3 className="text-xl font-bold text-[#e91e63]">Loading...</h3>
        <div className="h-4 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800"></div>
        <div className="h-4 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800"></div>
        <div className="h-4 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800"></div>
      </div>
    </>
  );
}

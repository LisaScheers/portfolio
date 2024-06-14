/*
 <div className="grid gap-1">
      <h3 className="text-xl font-bold text-[#e91e63]">{props.title}</h3>
      <p className="text-[#f48fb1] dark:text-[#f48fb1]">{props.description}</p>
    </div>
 */

export default function ShowcaseSuspense() {
  return (
    <>
      <div className="grid gap-1">
        <h3 className="text-xl font-bold ">Loading...</h3>
        <div className="h-4 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800"></div>
        <div className="h-4 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800"></div>
        <div className="h-4 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800"></div>
      </div>
      <div className="grid gap-1">
        <h3 className="text-xl font-bold ">Loading...</h3>
        <div className="h-4 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800"></div>
        <div className="h-4 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800"></div>
        <div className="h-4 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800"></div>
      </div>
      <div className="grid gap-1">
        <h3 className="text-xl font-bold ">Loading...</h3>
        <div className="h-4 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800"></div>
        <div className="h-4 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800"></div>
        <div className="h-4 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800"></div>
      </div>
    </>
  );
}

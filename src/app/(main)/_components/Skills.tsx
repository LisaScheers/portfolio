export default function Skills() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg px-3 py-1 text-sm text-[#e91e63]">
              Skills
            </div>
            <h2 className="text-3xl font-bold tracking-tighter text-[#e91e63] sm:text-5xl">
              Expertise and Capabilities
            </h2>
            <p className="max-w-[900px] text-[#f48fb1] dark:text-[#f48fb1] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Lisa&apos;s technical skills and proficiencies that enable her to
              deliver exceptional software solutions.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <div className="grid gap-1">
            <h3 className="text-xl font-bold text-[#e91e63]">
              Programming Languages
            </h3>
            <p className="text-[#f48fb1] dark:text-[#f48fb1]">
              C#, .NET, JavaScript, TypeScript
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-xl font-bold text-[#e91e63]">
              Frameworks and Libraries
            </h3>
            <p className="text-[#f48fb1] dark:text-[#f48fb1]">
              ASP.NET Core, React, Angular, Vue.js
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-xl font-bold text-[#e91e63]">
              Architectural Patterns
            </h3>
            <p className="text-[#f48fb1] dark:text-[#f48fb1]">
              Domain-Driven Design, Clean Architecture, Microservices
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-xl font-bold text-[#e91e63]">Databases</h3>
            <p className="text-[#f48fb1] dark:text-[#f48fb1]">
              SQL Server, PostgreSQL, MongoDB
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-xl font-bold text-[#e91e63]">
              Cloud Technologies
            </h3>
            <p className="text-[#f48fb1] dark:text-[#f48fb1]">
              Azure, AWS, Google Cloud
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-xl font-bold text-[#e91e63]">
              Agile Methodologies
            </h3>
            <p className="text-[#f48fb1] dark:text-[#f48fb1]">
              Scrum, Kanban, Lean
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

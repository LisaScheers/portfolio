import ContactForm from "@/app/(main)/hireme/(with-recaptcha)/form";

export default function HireMePage() {
  return (
    <div className="mx-auto w-full max-w-3xl py-12 md:py-20">
      <div className="space-y-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Hire Me
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400">
          I am an experienced C# and .NET developer with a proven track record
          of building scalable and maintainable software solutions using
          Domain-Driven Design (DDD) and Clean Architecture. I have a deep
          understanding of software engineering principles and best practices,
          and I am passionate about delivering high-quality, efficient, and
          reliable applications. Hire me to take your project to the next level
          with my expertise and dedication.
        </p>
      </div>
      <div className="mt-12 space-y-4 md:mt-16">
        <ContactForm />
      </div>
    </div>
  );
}

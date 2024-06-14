import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Stats() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter  sm:text-5xl">
              Statistics
            </h2>
            <p className="max-w-[900px]  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Some interesting statistics about my work.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <Card>
            <CardHeader>Lines of code written</CardHeader>
            <CardContent>5.8M+</CardContent>
          </Card>
          <Card>
            <CardHeader>Projects completed</CardHeader>
            <CardContent>20+</CardContent>
          </Card>
          <Card>
            <CardHeader>Happy clients</CardHeader>
            <CardContent>6+</CardContent>
          </Card>
          <Card>
            <CardHeader>Years of experience</CardHeader>
            <CardContent>5+</CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

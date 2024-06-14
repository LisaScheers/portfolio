import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function Clients() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Clients and Projects
            </h2>
            <p className="max-w-[900px]  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A selection of clients and projects I have worked on.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:gap-12">
          <Card>
            <CardHeader className="text-xl">Triple A IT Solutions</CardHeader>
            <CardContent>
              <p className="pb-2">
                Triple A IT Solutions is a software development company that
                specializes in building custom software solutions service
                centers that handle client communication.
              </p>
              <p>
                I worked with Triple A IT Solutions to develop a custom CRM
                system that allowed them to manage service requests scheduling.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge>
                  <span>Angular</span>
                </Badge>
                <Badge>
                  <span>ASP.NET Core</span>
                </Badge>
                <Badge>
                  <span>Mongo DB</span>
                </Badge>
                <Badge>Event Sourcing</Badge>
              </div>
            </CardContent>
            <CardFooter>
              <Link href={"https://triple-a-it.be/"}>
                <p className="text-blue-500">Visit website</p>
              </Link>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="text-xl">
              <span>
                CBE Cross Border <span className="font-bold">FOD Justice</span>
              </span>
            </CardHeader>
            <CardContent>
              <p className="pb-2">
                CBE Cross Border is a subsidiary of FOD Justice of the Belgian
                Federal Government. They handle back-office operations for
                Traffic Fines, Judicial Orders, and other legal documents.
              </p>
              <p>
                I worked with CBE Cross Border to develop multiple microservices
                that handle the processing of legal documents, fines, and
                integration with external services. most of which are covered
                under NDA.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge>
                  <span>ASP.NET</span>
                </Badge>
                <Badge>
                  <span>Microsoft Power</span>
                </Badge>
                <Badge>
                  <span>Azure Function</span>
                </Badge>
                <Badge>
                  <span>Microservices</span>
                </Badge>
                <Badge>
                  <span>Service Bus</span>
                </Badge>
                <Badge>
                  <span>Infrastructure as Code</span>
                </Badge>
              </div>
            </CardContent>
            <CardFooter className="space-x-2">
              <Link href={"https://www.justonweb.be/"}>
                <p className="text-blue-500">Just On Web</p>
              </Link>
              <Link
                href={
                  "https://road-safety.transport.ec.europa.eu/eu-road-safety-policy/priorities/safe-vehicles/blind-spot-mirrors/cross-border-exchange_en"
                }
              >
                <p className="text-blue-500">Cross Border Exchange</p>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}

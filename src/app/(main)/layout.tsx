import { type PropsWithChildren } from "react";
import Link from "next/link";
import { FlowerIcon } from "lucide-react";

export default function Layout(props: PropsWithChildren) {
  return (
    <>
      <div className="flex min-h-[100dvh] flex-col ">
        <header className="y flex h-14 items-center px-4 font-sans  lg:px-6">
          <Link
            href="/"
            className="flex items-center justify-center"
            prefetch={false}
          >
            <FlowerIcon className="h-6 w-6" />
            <span className="sr-only">Lisa Scheers</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link
              href="/blog"
              className="text-sm font-medium underline-offset-4 hover:underline"
              prefetch={true}
            >
              Blog
            </Link>
            <Link
              href="/hireme"
              className="text-sm font-medium underline-offset-4 hover:underline"
              prefetch={true}
            >
              Contact
            </Link>
            <Link
              className="text-sm font-medium underline-offset-4 hover:underline"
              href="https://github.com/LisaScheers"
            >
              github
            </Link>
            <Link
              className="text-sm font-medium underline-offset-4 hover:underline"
              href={"https://www.linkedin.com/in/lisascheers"}
            >
              linkedin
            </Link>
            <Link
              className="text-sm font-medium underline-offset-4 hover:underline"
              href="https://github.com/LisaScheers/portfolio"
            >
              source code on github
            </Link>
          </nav>
        </header>
        {props.children}

        <footer className="flex" />
      </div>
    </>
  );
}

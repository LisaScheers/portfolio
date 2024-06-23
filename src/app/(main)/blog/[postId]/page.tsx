import { type PropsWithoutRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getBlogPost, getBlogPosts } from "@/server/blogService";

import "./post.css";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { type Metadata } from "next";

type Props = PropsWithoutRef<{ params: { postId: string } }>;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const id = params.postId;

  // fetch post from database
  const post = await getBlogPost(id);

  return {
    title: post.title,
    openGraph: {
      images: [{ url: post.image }],
      description: post.tldr,
      title: post.title,
      locale: "en_US",
      authors: [post.author],
      username: post.author,
      writers: [post.author],
    },
    twitter: {
      site: post.author,
      title: post.title,
      description: post.tldr,
      images: [{ url: post.image }],
      card: "summary",
      creator: post.author,
      creatorId: post.author,
    },
  };
}

export async function generateStaticParams() {
  const posts = await getBlogPosts();

  return posts.map((post) => ({
    postId: post.id,
  }));
}

export default async function PostPage(props: Props) {
  const post = await getBlogPost(props.params.postId);

  return (
    <article className="prose prose-gray dark:prose-invert mx-auto max-w-3xl pt-12">
      <div className="not-prose space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          {post.title}
        </h1>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Avatar className="h-8 w-8 rounded-full">
              <AvatarImage src="/profile.png" />
              <AvatarFallback>{post.author}</AvatarFallback>
            </Avatar>
            <p className="text-sm font-medium">{post.author}</p>
          </div>
          <p className="text-sm text-muted-foreground">
            Published on {post.date.toLocaleDateString()}
          </p>
        </div>
      </div>
      <div className="not-prose space-y-6 pt-4">
        <div className="rounded-lg bg-muted p-4">
          <h2 className="text-xl font-bold">TL;DR</h2>
          <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
            {post.tldr}
          </Markdown>
        </div>

        <Image
          src={post.image}
          width={post.imageWidth}
          height={post.imageHeight}
          alt={post.imageAlt}
        />

        <Markdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            code({ className, children, ...props }) {
              const match = /language-(\w+)/.exec((className as never) || "");

              return match ? (
                <SyntaxHighlighter
                  /* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/ban-ts-comment */
                  // @ts-expect-error
                  style={dracula}
                  PreTag="div"
                  language={match[1]}
                  className="w-full text-wrap"
                  {...props}
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <code className={className as never} {...props}>
                  {children}
                </code>
              );
            },
            h1({ children, ...props }) {
              return (
                <h1
                  className="text-4xl font-extrabold tracking-tight lg:text-4xl"
                  {...props}
                >
                  {children}
                </h1>
              );
            },
            h2({ children, ...props }) {
              return (
                <>
                  <Separator />
                  <h2
                    className="text-xl font-bold tracking-tighter sm:text-3xl"
                    {...props}
                  >
                    {children}
                  </h2>
                </>
              );
            },
            h3({ children, ...props }) {
              return (
                <h3
                  className="text-lg font-bold tracking-tighter sm:text-xl"
                  {...props}
                >
                  {children}
                </h3>
              );
            },

            ul({ children, ...props }) {
              return (
                <ul
                  className="
                 list-disc space-y-1 "
                  {...props}
                >
                  {children}
                </ul>
              );
            },

            li({ children, ...props }) {
              return <li {...props}>{children}</li>;
            },
          }}
        >
          {post.content}
        </Markdown>
      </div>
      <div className="h-[100px]"></div>
    </article>
  );
}

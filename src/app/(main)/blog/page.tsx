import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { getBlogPosts } from "@/server/blogService";

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="mx-auto w-full max-w-4xl py-12 md:py-20">
      <div className="space-y-6 text-center">
        <p className="text-2xl text-gray-500 dark:text-gray-400">Blog</p>
        {posts.length === 0 && (
          <h1 className={"text-xl"}>No posts found, come back soon</h1>
        )}
      </div>
      <section className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
        {posts.map((post) => (
          <Link href={`/blog/${post.id}`} key={post.id}>
            <Card>
              <CardHeader>
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  width={post.imageWidth}
                  height={post.imageHeight}
                />
                <CardTitle>{post.title}</CardTitle>
              </CardHeader>

              <CardContent>
                <p>{post.tldr}</p>
              </CardContent>
              <CardFooter>
                <p>published on {post.date.toLocaleDateString()}</p>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </section>
    </div>
  );
}

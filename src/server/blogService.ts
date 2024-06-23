import { db } from "./db";
import { BlogPosts } from "@/server/db/schema";
import { eq } from "drizzle-orm/sql";
import { cache } from "react";

export type BlogPost = {
  id: string;
  title: string;
  author: string;
  tldr: string;
  description: string;
  content: string;
  date: Date;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
};

export const getBlogPosts = cache(async (): Promise<BlogPost[]> => {
  return (await db.select().from(BlogPosts)).map((blogPost) => {
    return {
      id: blogPost.id.toString(),
      title: blogPost.title,
      author: blogPost.author,
      tldr: blogPost.tldr,
      description: "todo",
      content: blogPost.content,
      date: blogPost.date,
      image: blogPost.image,
      imageAlt: "aaa",
      imageWidth: blogPost.imageWidth,
      imageHeight: blogPost.imageHeight,
    };
  });
});

export const getBlogPost = cache(async (id: string): Promise<BlogPost> => {
  console.log(id);
  const posts = await db.select().from(BlogPosts).where(eq(BlogPosts.id, +id));
  if (posts.length === 0) {
    throw new Error("Post not found");
  }
  const post = posts[0];

  if (!post) {
    throw new Error("Post not found");
  }

  return {
    id: post.id.toString(),
    title: post.title,
    author: post.author,
    tldr: post.tldr,
    description: "todo",
    content: post.content,
    date: post.date,
    image: post.image,
    imageAlt: "aaa",
    imageWidth: post.imageWidth,
    imageHeight: post.imageHeight,
  };
});

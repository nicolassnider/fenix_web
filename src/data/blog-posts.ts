import type { BlogPost } from "../types";
import blogPostsData from "./blog-posts.json";

const blogPosts: BlogPost[] = blogPostsData as BlogPost[];

export async function getBlogPosts(): Promise<BlogPost[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(blogPosts);
        }, 500);
    });
}

export async function getBlogPostById(id: string): Promise<BlogPost | undefined> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(blogPosts.find(post => post.id === id));
        }, 500);
    });
}

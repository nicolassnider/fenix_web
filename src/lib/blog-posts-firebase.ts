import { db } from './firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import type { BlogPost } from '../types';

export async function getBlogPostsFromFirebase(): Promise<BlogPost[]> {
  try {
    const blogPostsRef = collection(db, 'blogPosts');
    const q = query(blogPostsRef, orderBy('date', 'desc'));
    const querySnapshot = await getDocs(q);
    
    const posts: BlogPost[] = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      posts.push({
        id: doc.id,
        title: data.title,
        excerpt: data.excerpt,
        content: data.content,
        date: data.date,
        category: data.category,
        image: data.image
      });
    });
    
    return posts;
  } catch (error) {
    console.error('Error fetching blog posts from Firebase:', error);
    return [];
  }
}

export async function getBlogPostByIdFromFirebase(id: string): Promise<BlogPost | null> {
  try {
    const blogPostsRef = collection(db, 'blogPosts');
    const q = query(blogPostsRef);
    const querySnapshot = await getDocs(q);
    
    for (const doc of querySnapshot.docs) {
      if (doc.id === id) {
        const data = doc.data();
        return {
          id: doc.id,
          title: data.title,
          excerpt: data.excerpt,
          content: data.content,
          date: data.date,
          category: data.category,
          image: data.image
        };
      }
    }
    
    return null;
  } catch (error) {
    console.error('Error fetching blog post by ID from Firebase:', error);
    return null;
  }
}

import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
import blogPostsData from "../src/data/blog-posts.json";
import dotenv from "dotenv";
import { uploadImageToStorage } from "../src/lib/storage";
import * as path from "path";

// Load environment variables from .env file
dotenv.config();

interface BlogPostWithImage {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  image?: string;
}

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function populateFirestore() {
  try {
    console.log('Starting to populate Firestore with blog posts...');
    
    const posts = blogPostsData as BlogPostWithImage[];
    
    for (const post of posts) {
      let imageUrl = post.image;
      
      // If post has a local image path, upload it to Firebase Storage
      if (post.image && !post.image.startsWith('http')) {
        try {
          const imagePath = path.join(process.cwd(), 'public', post.image);
          const storagePath = `blog-images/${post.id}-${path.basename(post.image)}`;
          imageUrl = await uploadImageToStorage(imagePath, storagePath);
        } catch (error) {
          console.warn(`⚠️ Failed to upload image for post "${post.title}":`, error);
          // Keep original image path if upload fails
          imageUrl = post.image;
        }
      }
      
      const docRef = await addDoc(collection(db, 'blogPosts'), {
        title: post.title,
        excerpt: post.excerpt,
        content: post.content,
        date: post.date,
        category: post.category,
        ...(imageUrl && { image: imageUrl }),
        createdAt: serverTimestamp()
      });
      
      console.log(`✅ Added blog post: ${post.title} (ID: ${docRef.id})`);
    }
    
    console.log('✅ All blog posts have been added to Firestore!');
  } catch (error) {
    console.error('❌ Error populating Firestore:', error);
  }
}

populateFirestore();

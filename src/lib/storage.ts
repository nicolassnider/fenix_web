import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import type { FirebaseStorage } from 'firebase/storage';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Upload a local image file to Firebase Storage
 * @param storageInstance - Firebase Storage instance
 * @param localPath - Local path to the image file
 * @param storagePath - Path in Firebase Storage (e.g., 'blog-images/post-1.jpg')
 * @returns Download URL of the uploaded image
 */
export async function uploadImageToStorage(
  storageInstance: FirebaseStorage,
  localPath: string,
  storagePath: string
): Promise<string> {
  try {
    // Check if file exists locally
    if (!fs.existsSync(localPath)) {
      throw new Error(`File not found: ${localPath}`);
    }

    // Read file as buffer
    const fileBuffer = fs.readFileSync(localPath);

    // Create storage reference
    const storageRef = ref(storageInstance, storagePath);

    // Upload file
    const snapshot = await uploadBytes(storageRef, fileBuffer);

    // Get download URL
    const downloadURL = await getDownloadURL(snapshot.ref);

    console.log(`✅ Uploaded ${localPath} to Firebase Storage: ${storagePath}`);
    return downloadURL;
  } catch (error) {
    console.error(`❌ Error uploading image ${localPath}:`, error);
    throw error;
  }
}

/**
 * Upload multiple images from a directory to Firebase Storage
 * @param storageInstance - Firebase Storage instance
 * @param directory - Local directory containing images
 * @param storagePrefix - Prefix for storage paths (e.g., 'blog-images/')
 * @returns Map of filenames to download URLs
 */
export async function uploadImagesFromDirectory(
  storageInstance: FirebaseStorage,
  directory: string,
  storagePrefix: string
): Promise<Map<string, string>> {
  const urlMap = new Map<string, string>();

  try {
    if (!fs.existsSync(directory)) {
      console.log(`⚠️ Directory not found: ${directory}`);
      return urlMap;
    }

    const files = fs.readdirSync(directory);
    const imageFiles = files.filter(file => 
      /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
    );

    console.log(`Found ${imageFiles.length} image files in ${directory}`);

    for (const file of imageFiles) {
      const localPath = path.join(directory, file);
      const storagePath = `${storagePrefix}${file}`;
      
      try {
        const downloadURL = await uploadImageToStorage(storageInstance, localPath, storagePath);
        urlMap.set(file, downloadURL);
      } catch (error) {
        console.error(`Failed to upload ${file}:`, error);
      }
    }

    return urlMap;
  } catch (error) {
    console.error(`Error processing directory ${directory}:`, error);
    return urlMap;
  }
}

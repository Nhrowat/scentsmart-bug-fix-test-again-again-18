import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'fragrance-images';
const MAX_IMAGE_SIZE = 500 * 1024; // 500KB limit per image

interface ImageData {
  [fragranceName: string]: string;
}

// Compress image to base64 with size limit
const compressImage = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = () => {
      // Calculate new dimensions to keep aspect ratio
      const maxWidth = 400;
      const maxHeight = 600;
      let { width, height } = img;
      
      if (width > height) {
        if (width > maxWidth) {
          height = (height * maxWidth) / width;
          width = maxWidth;
        }
      } else {
        if (height > maxHeight) {
          width = (width * maxHeight) / height;
          height = maxHeight;
        }
      }
      
      canvas.width = width;
      canvas.height = height;
      
      ctx?.drawImage(img, 0, 0, width, height);
      
      // Start with good quality and reduce if needed
      let quality = 0.8;
      let result = canvas.toDataURL('image/jpeg', quality);
      
      // Reduce quality until under size limit
      while (result.length > MAX_IMAGE_SIZE && quality > 0.1) {
        quality -= 0.1;
        result = canvas.toDataURL('image/jpeg', quality);
      }
      
      resolve(result);
    };
    
    img.onerror = () => reject(new Error('Failed to load image'));
    img.src = URL.createObjectURL(file);
  });
};

export const usePersistedImages = () => {
  const [images, setImages] = useState<ImageData>({});
  const [isLoading, setIsLoading] = useState(true);

  // Load images from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        setImages(parsed);
      }
    } catch (error) {
      console.warn('Failed to load persisted images:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Save images to localStorage whenever images change
  const saveToStorage = useCallback((newImages: ImageData) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newImages));
    } catch (error) {
      console.error('Failed to save images to localStorage:', error);
      throw new Error('Storage limit exceeded. Please remove some images.');
    }
  }, []);

  // Set image for a specific fragrance
  const setImage = useCallback(async (fragranceName: string, file: File): Promise<void> => {
    try {
      const compressedImage = await compressImage(file);
      const newImages = { ...images, [fragranceName]: compressedImage };
      setImages(newImages);
      saveToStorage(newImages);
    } catch (error) {
      console.error('Failed to set image:', error);
      throw error;
    }
  }, [images, saveToStorage]);

  // Get image for a specific fragrance
  const getImage = useCallback((fragranceName: string): string | null => {
    return images[fragranceName] || null;
  }, [images]);

  // Remove image for a specific fragrance
  const removeImage = useCallback((fragranceName: string) => {
    const newImages = { ...images };
    delete newImages[fragranceName];
    setImages(newImages);
    saveToStorage(newImages);
  }, [images, saveToStorage]);

  // Clear all images
  const clearAllImages = useCallback(() => {
    setImages({});
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error('Failed to clear images:', error);
    }
  }, []);

  // Get storage info
  const getStorageInfo = useCallback(() => {
    const imageCount = Object.keys(images).length;
    const storageSize = JSON.stringify(images).length;
    const storageSizeKB = Math.round(storageSize / 1024);
    
    return {
      imageCount,
      storageSize: storageSizeKB,
      maxStorageKB: Math.round((5 * 1024 * 1024) / 1024) // 5MB localStorage limit
    };
  }, [images]);

  return {
    getImage,
    setImage,
    removeImage,
    clearAllImages,
    getStorageInfo,
    isLoading
  };
};

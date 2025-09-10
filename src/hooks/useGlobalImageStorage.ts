import { useState, useEffect, useCallback } from 'react';

const CLOUD_STORAGE_KEY = 'fragrance-images-cloud';
const MAX_IMAGE_SIZE = 800 * 1024; // 800KB limit per image
const SYNC_INTERVAL = 30000; // Sync every 30 seconds

interface ImageData {
  [fragranceName: string]: {
    data: string;
    timestamp: number;
    synced: boolean;
  };
}

interface CloudResponse {
  success: boolean;
  data?: ImageData;
  error?: string;
}

// Simulate cloud storage API
const simulateCloudAPI = {
  async upload(data: ImageData): Promise<CloudResponse> {
    return new Promise((resolve) => {
      setTimeout(() => {
        try {
          // Simulate cloud storage with session storage for demo
          sessionStorage.setItem(CLOUD_STORAGE_KEY, JSON.stringify(data));
          resolve({ success: true, data });
        } catch (error) {
          resolve({ success: false, error: 'Cloud upload failed' });
        }
      }, Math.random() * 1000 + 500); // Random delay 500-1500ms
    });
  },

  async download(): Promise<CloudResponse> {
    return new Promise((resolve) => {
      setTimeout(() => {
        try {
          const stored = sessionStorage.getItem(CLOUD_STORAGE_KEY);
          const data = stored ? JSON.parse(stored) : {};
          resolve({ success: true, data });
        } catch (error) {
          resolve({ success: false, error: 'Cloud download failed' });
        }
      }, Math.random() * 800 + 200); // Random delay 200-1000ms
    });
  }
};

// Compress image to base64 with enhanced quality
const compressImage = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = () => {
      // Calculate optimal dimensions
      const maxWidth = 500;
      const maxHeight = 750;
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
      
      let quality = 0.9;
      let result = canvas.toDataURL('image/jpeg', quality);
      
      // Optimize quality vs size
      while (result.length > MAX_IMAGE_SIZE && quality > 0.2) {
        quality -= 0.1;
        result = canvas.toDataURL('image/jpeg', quality);
      }
      
      resolve(result);
    };
    
    img.onerror = () => reject(new Error('Failed to load image'));
    img.src = URL.createObjectURL(file);
  });
};

export const useGlobalImageStorage = () => {
  const [images, setImages] = useState<ImageData>({});
  const [isLoading, setIsLoading] = useState(true);
  const [isSyncing, setIsSyncing] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  // Monitor online status
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Load images from both local and cloud storage
  useEffect(() => {
    const loadImages = async () => {
      try {
        // Load from localStorage first (immediate)
        const localStored = localStorage.getItem('fragrance-images');
        let localImages: ImageData = {};
        
        if (localStored) {
          const parsed = JSON.parse(localStored);
          localImages = Object.entries(parsed).reduce((acc, [key, value]) => {
            acc[key] = {
              data: value as string,
              timestamp: Date.now(),
              synced: false
            };
            return acc;
          }, {} as ImageData);
        }

        setImages(localImages);

        // Then try to sync with cloud
        if (isOnline) {
          const cloudResponse = await simulateCloudAPI.download();
          if (cloudResponse.success && cloudResponse.data) {
            // Merge cloud and local data, preferring newer timestamps
            const mergedImages = { ...localImages };
            
            Object.entries(cloudResponse.data).forEach(([key, cloudImage]) => {
              const localImage = mergedImages[key];
              if (!localImage || cloudImage.timestamp > localImage.timestamp) {
                mergedImages[key] = { ...cloudImage, synced: true };
              }
            });
            
            setImages(mergedImages);
          }
        }
      } catch (error) {
        console.warn('Failed to load images:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadImages();
  }, [isOnline]);

  // Auto-sync unsaved changes
  useEffect(() => {
    if (!isOnline) return;

    const syncInterval = setInterval(async () => {
      const unsyncedImages = Object.entries(images).filter(([, img]) => !img.synced);
      
      if (unsyncedImages.length > 0) {
        setIsSyncing(true);
        try {
          const response = await simulateCloudAPI.upload(images);
          if (response.success) {
            setImages(prev => {
              const updated = { ...prev };
              Object.keys(updated).forEach(key => {
                updated[key] = { ...updated[key], synced: true };
              });
              return updated;
            });
          }
        } catch (error) {
          console.error('Auto-sync failed:', error);
        } finally {
          setIsSyncing(false);
        }
      }
    }, SYNC_INTERVAL);

    return () => clearInterval(syncInterval);
  }, [images, isOnline]);

  // Save to localStorage whenever images change
  const saveToLocalStorage = useCallback((newImages: ImageData) => {
    try {
      const legacyFormat = Object.entries(newImages).reduce((acc, [key, img]) => {
        acc[key] = img.data;
        return acc;
      }, {} as Record<string, string>);
      
      localStorage.setItem('fragrance-images', JSON.stringify(legacyFormat));
    } catch (error) {
      console.error('Failed to save to localStorage:', error);
    }
  }, []);

  // Set image for a specific fragrance
  const setImage = useCallback(async (fragranceName: string, file: File): Promise<void> => {
    try {
      const compressedImage = await compressImage(file);
      const newImageData = {
        data: compressedImage,
        timestamp: Date.now(),
        synced: false
      };
      
      const newImages = { ...images, [fragranceName]: newImageData };
      setImages(newImages);
      saveToLocalStorage(newImages);

      // Try immediate cloud sync if online
      if (isOnline) {
        setIsSyncing(true);
        try {
          const response = await simulateCloudAPI.upload(newImages);
          if (response.success) {
            setImages(prev => ({
              ...prev,
              [fragranceName]: { ...newImageData, synced: true }
            }));
          }
        } catch (error) {
          console.warn('Immediate sync failed, will retry later:', error);
        } finally {
          setIsSyncing(false);
        }
      }
    } catch (error) {
      console.error('Failed to set image:', error);
      throw error;
    }
  }, [images, saveToLocalStorage, isOnline]);

  // Get image for a specific fragrance
  const getImage = useCallback((fragranceName: string): string | null => {
    return images[fragranceName]?.data || null;
  }, [images]);

  // Get all images for carousel
  const getAllImages = useCallback((): Array<{ src: string; alt: string; name: string }> => {
    return Object.entries(images)
      .filter(([, img]) => img.data)
      .map(([name, img]) => ({
        src: img.data,
        alt: `${name} bottle`,
        name
      }));
  }, [images]);

  // Remove image for a specific fragrance
  const removeImage = useCallback((fragranceName: string) => {
    const newImages = { ...images };
    delete newImages[fragranceName];
    setImages(newImages);
    saveToLocalStorage(newImages);

    // Sync removal to cloud if online
    if (isOnline) {
      simulateCloudAPI.upload(newImages).catch(console.warn);
    }
  }, [images, saveToLocalStorage, isOnline]);

  // Clear all images
  const clearAllImages = useCallback(() => {
    setImages({});
    try {
      localStorage.removeItem('fragrance-images');
      if (isOnline) {
        simulateCloudAPI.upload({}).catch(console.warn);
      }
    } catch (error) {
      console.error('Failed to clear images:', error);
    }
  }, [isOnline]);

  // Get storage info
  const getStorageInfo = useCallback(() => {
    const imageCount = Object.keys(images).length;
    const syncedCount = Object.values(images).filter(img => img.synced).length;
    const unsyncedCount = imageCount - syncedCount;
    
    const totalSize = Object.values(images).reduce((acc, img) => acc + img.data.length, 0);
    const storageSizeKB = Math.round(totalSize / 1024);
    
    return {
      imageCount,
      syncedCount,
      unsyncedCount,
      storageSize: storageSizeKB,
      maxStorageKB: Math.round((10 * 1024 * 1024) / 1024), // 10MB cloud limit
      isOnline,
      isSyncing
    };
  }, [images, isOnline, isSyncing]);

  // Force sync
  const forceSync = useCallback(async () => {
    if (!isOnline) {
      throw new Error('Cannot sync while offline');
    }

    setIsSyncing(true);
    try {
      const response = await simulateCloudAPI.upload(images);
      if (response.success) {
        setImages(prev => {
          const updated = { ...prev };
          Object.keys(updated).forEach(key => {
            updated[key] = { ...updated[key], synced: true };
          });
          return updated;
        });
        return true;
      } else {
        throw new Error(response.error || 'Sync failed');
      }
    } finally {
      setIsSyncing(false);
    }
  }, [images, isOnline]);

  return {
    getImage,
    getAllImages,
    setImage,
    removeImage,
    clearAllImages,
    getStorageInfo,
    forceSync,
    isLoading,
    isSyncing,
    isOnline
  };
};
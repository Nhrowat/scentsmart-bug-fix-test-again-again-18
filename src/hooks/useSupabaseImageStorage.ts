import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface FragranceImage {
  id: string;
  fragrance_name: string;
  image_url: string;
}

export const useSupabaseImageStorage = () => {
  const [images, setImages] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(true);

  // Load all images on mount
  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = async () => {
    try {
      const { data, error } = await supabase
        .from('fragrance_images')
        .select('*');

      if (error) throw error;

      const imageMap: Record<string, string> = {};
      data?.forEach((image: FragranceImage) => {
        imageMap[image.fragrance_name] = image.image_url;
      });

      setImages(imageMap);
    } catch (error) {
      console.error('Error loading images:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const setImage = useCallback(async (fragranceName: string, file: File): Promise<void> => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${fragranceName.replace(/[^a-zA-Z0-9]/g, '_')}.${fileExt}`;
    const filePath = `${fileName}`;

    try {
      // First, try to remove existing file to ensure clean replacement
      try {
        await supabase.storage
          .from('fragrance-images')
          .remove([filePath]);
      } catch (removeError) {
        // Ignore errors if file doesn't exist
        console.log('Previous file removal (expected if no existing file):', removeError);
      }

      // Upload new file to storage
      const { error: uploadError } = await supabase.storage
        .from('fragrance-images')
        .upload(filePath, file, { 
          upsert: true 
        });

      if (uploadError) throw uploadError;

      // Get public URL with cache busting timestamp
      const { data: { publicUrl } } = supabase.storage
        .from('fragrance-images')
        .getPublicUrl(filePath);

      // Add cache busting parameter to ensure browser doesn't cache old image
      const cacheBustedUrl = `${publicUrl}?t=${Date.now()}`;

      // Save to database
      const { error: dbError } = await supabase
        .from('fragrance_images')
        .upsert({
          fragrance_name: fragranceName,
          image_url: cacheBustedUrl
        });

      if (dbError) throw dbError;

      // Update local state
      setImages(prev => ({
        ...prev,
        [fragranceName]: cacheBustedUrl
      }));

      console.log(`Successfully uploaded new image for ${fragranceName}:`, cacheBustedUrl);

    } catch (error) {
      console.error('Error uploading image:', error);
      throw error;
    }
  }, []);

  const getImage = useCallback((fragranceName: string): string | null => {
    return images[fragranceName] || null;
  }, [images]);

  const removeImage = useCallback(async (fragranceName: string): Promise<void> => {
    try {
      // Delete from database
      const { error: dbError } = await supabase
        .from('fragrance_images')
        .delete()
        .eq('fragrance_name', fragranceName);

      if (dbError) throw dbError;

      // Remove from storage - we need to find the actual file with extension
      const sanitizedName = fragranceName.replace(/[^a-zA-Z0-9]/g, '_');
      
      // List files to find the one that starts with our sanitized name
      const { data: files } = await supabase.storage
        .from('fragrance-images')
        .list('', {
          search: sanitizedName
        });
      
      // Remove all files that match our fragrance name pattern
      if (files && files.length > 0) {
        const filesToRemove = files
          .filter(file => file.name.startsWith(sanitizedName))
          .map(file => file.name);
        
        if (filesToRemove.length > 0) {
          await supabase.storage
            .from('fragrance-images')
            .remove(filesToRemove);
        }
      }

      // Update local state
      setImages(prev => {
        const newImages = { ...prev };
        delete newImages[fragranceName];
        return newImages;
      });

    } catch (error) {
      console.error('Error removing image:', error);
      throw error;
    }
  }, []);

  const getAllImages = useCallback((): Array<{ src: string; alt: string; name: string }> => {
    return Object.entries(images)
      .filter(([, imageUrl]) => imageUrl)
      .map(([fragranceName, imageUrl]) => ({
        src: imageUrl,
        alt: `${fragranceName} bottle`,
        name: fragranceName
      }));
  }, [images]);

  return {
    setImage,
    getImage,
    getAllImages,
    removeImage,
    isLoading
  };
};
import { Button } from "@/components/ui/button";
import { ImagePlus, Upload } from "lucide-react";
import { toast } from "sonner";

interface ImageUploadProps {
  onImageUpload: (file: File) => Promise<void>;
  isUploading: boolean;
  hasImage: boolean;
  fragranceName: string;
}

const ImageUpload = ({ 
  onImageUpload, 
  isUploading, 
  hasImage, 
  fragranceName 
}: ImageUploadProps) => {
  const handleUploadClick = () => {
    document.getElementById(`file-${fragranceName}`)?.click();
  };

  const handleImageUploadChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      await onImageUpload(file);
      toast.success("Image uploaded successfully!");
    } catch (error) {
      console.error('Upload failed:', error);
      toast.error("Failed to upload image");
    }
  };

  return (
    <>
      <Button
        variant="ghost"
        size="sm"
        className="text-xs flex-col gap-1 h-auto py-2"
        onClick={handleUploadClick}
        disabled={isUploading}
      >
        {hasImage ? <Upload className="h-4 w-4" /> : <ImagePlus className="h-6 w-6" />}
        {isUploading ? 'Uploading...' : hasImage ? 'Change' : 'Add Image'}
      </Button>
      
      <input
        id={`file-${fragranceName}`}
        type="file"
        accept="image/*"
        onChange={handleImageUploadChange}
        className="hidden"
      />
    </>
  );
};

export default ImageUpload;
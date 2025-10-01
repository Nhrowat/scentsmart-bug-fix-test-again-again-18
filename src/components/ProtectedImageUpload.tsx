import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ImagePlus } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface ProtectedImageUploadProps {
  onImageUpload: (file: File) => Promise<void>;
  isUploading: boolean;
  hasImage: boolean;
  fragranceName: string;
}

const ProtectedImageUpload = ({ 
  onImageUpload, 
  isUploading, 
  hasImage, 
  fragranceName 
}: ProtectedImageUploadProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [password, setPassword] = useState("");

  const handleUploadClick = () => {
    if (isAuthenticated) {
      document.getElementById(`file-${fragranceName}`)?.click();
    } else {
      setIsDialogOpen(true);
    }
  };

  const handlePasswordSubmit = () => {
    if (password === "@Nhat10nk202591") {
      setIsAuthenticated(true);
      setIsDialogOpen(false);
      setPassword("");
      toast.success("Admin access granted!");
      setTimeout(() => {
        document.getElementById(`file-${fragranceName}`)?.click();
      }, 100);
    } else {
      toast.error("Incorrect admin password");
      setPassword("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handlePasswordSubmit();
    }
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
        className="text-xs flex-col gap-1"
        onClick={handleUploadClick}
        disabled={isUploading}
      >
        <ImagePlus className="h-6 w-6" />
        {isUploading ? 'Uploading...' : hasImage ? 'Change' : 'Insert Image'}
      </Button>
      
      <input
        id={`file-${fragranceName}`}
        type="file"
        accept="image/*"
        onChange={handleImageUploadChange}
        className="hidden"
      />

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Admin Access Required</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-muted-foreground">Enter admin password to upload images:</p>
            <Input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <Button onClick={handlePasswordSubmit} className="w-full">
              Login
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProtectedImageUpload;

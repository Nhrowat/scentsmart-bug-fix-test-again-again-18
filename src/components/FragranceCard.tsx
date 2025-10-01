import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useSupabaseImageStorage } from "@/hooks/useSupabaseImageStorage";
import { toast } from "sonner";
import ProtectedImageUpload from "@/components/ProtectedImageUpload";

// Static image imports
import grandSoirImage from "@/assets/bottles/grand-soir.jpg";
import pacificChillImage from "@/assets/bottles/pacific-chill.jpg";
import prodigyImage from "@/assets/bottles/prodigy.jpg";
import sideEffectImage from "@/assets/bottles/side-effect.jpg";
import symphonyImage from "@/assets/bottles/symphony.jpg";
import strawberryPoolImage from "@/assets/bottles/strawberry-pool.jpg";
import pinkBoaImage from "@/assets/bottles/pink-boa.jpg";
import venomIncarnatImage from "@/assets/bottles/venom-incarnat.jpg";

// Map fragrance names to static images
const staticImages: Record<string, string> = {
  "Grand Soir": grandSoirImage,
  "Pacific Chill": pacificChillImage,
  "Prodigy": prodigyImage,
  "Side Effect": sideEffectImage,
  "Symphony": symphonyImage,
  "Strawberry Pool": strawberryPoolImage,
  "Pink Boa": pinkBoaImage,
  "Venom Incarnat": venomIncarnatImage,
};

interface FragranceCardProps {
  name: string;
  brand: string;
  originalPrice: number;
  clonePrice: number;
  cloneName: string;
  scent: string;
  season: string;
  occasion: string;
  savings: number;
  available: boolean;
  fragranticaUrl?: string;
  notes?: {
    top: string[];
    heart: string[];
    base: string[];
  };
}

const FragranceCard = ({
  name,
  brand,
  originalPrice,
  clonePrice,
  cloneName,
  scent,
  season,
  occasion,
  savings,
  available,
  fragranticaUrl,
  notes
}: FragranceCardProps) => {
  const { getImage, setImage, removeImage } = useSupabaseImageStorage();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [isRemoveDialogOpen, setIsRemoveDialogOpen] = useState(false);
  const [password, setPassword] = useState("");
  
  const uploadedImage = getImage(name);
  const staticImage = staticImages[name];
  const bottleImage = uploadedImage || staticImage;
  
  // Debug logging for specific fragrances
  if (name === "Venom Incarnat" || name === "Pink Boa" || name === "Strawberry Pool") {
    console.log(`${name} - uploadedImage:`, uploadedImage, "staticImage:", staticImage, "bottleImage:", bottleImage);
  }
  const getSeasonIcon = (season: string) => {
    if (season.includes('Summer')) return '☀️';
    if (season.includes('Winter')) return '❄️';
    if (season.includes('Spring')) return '🌱';
    if (season.includes('Fall')) return '🍂';
    return '🌸';
  };

  const getSavingsColor = (savings: number) => {
    if (savings >= 85) return 'text-success';
    if (savings >= 75) return 'text-accent';
    return 'text-primary';
  };

  const handleImageUpload = async (file: File) => {
    setIsUploading(true);
    try {
      await setImage(name, file);
    } catch (error) {
      console.error('Upload failed:', error);
      throw error;
    } finally {
      setIsUploading(false);
    }
  };

  const handleImageRemove = async () => {
    if (isAuthenticated) {
      try {
        await removeImage(name);
        toast.success("Image removed");
      } catch (error) {
        toast.error("Failed to remove image");
      }
    } else {
      setIsRemoveDialogOpen(true);
    }
  };

  const handleRemovePasswordSubmit = async () => {
    if (password === "@Nhat10nk202591") {
      setIsAuthenticated(true);
      setIsRemoveDialogOpen(false);
      setPassword("");
      toast.success("Admin access granted!");
      // Remove image after authentication
      try {
        await removeImage(name);
        toast.success("Image removed");
      } catch (error) {
        toast.error("Failed to remove image");
      }
    } else {
      toast.error("Incorrect admin password");
      setPassword("");
    }
  };

  const handleRemoveKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleRemovePasswordSubmit();
    }
  };

  return (
    <Card className="group hover:shadow-luxury transition-all duration-500 transform hover:-translate-y-2 bg-gradient-card border-border/50">
      <CardContent className="p-6 space-y-4">
        {/* Bottle Image */}
        <div className="flex justify-center mb-4 relative">
          {bottleImage ? (
            <div className="relative group">
              <img
                src={bottleImage}
                alt={`${brand} ${name} bottle`}
                className="w-24 h-36 object-contain"
              />
              <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1">
                <ProtectedImageUpload
                  onImageUpload={handleImageUpload}
                  isUploading={isUploading}
                  hasImage={true}
                  fragranceName={name}
                />
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-xs text-destructive hover:text-destructive"
                  onClick={handleImageRemove}
                  disabled={isUploading}
                >
                  Remove
                </Button>
              </div>
            </div>
          ) : (
            <div className="w-24 h-36 border-2 border-dashed border-border rounded-lg flex items-center justify-center bg-muted/30">
              <ProtectedImageUpload
                onImageUpload={handleImageUpload}
                isUploading={isUploading}
                hasImage={false}
                fragranceName={name}
              />
            </div>
          )}
        </div>
        
        {/* Header */}
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-foreground">{name}</h3>
          <p className="text-muted-foreground font-medium">{brand}</p>
        </div>

        {/* Pricing */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">💰 Original:</span>
            <span className="font-semibold text-foreground">€{originalPrice}</span>
          </div>
          
          {available ? (
            <>
              <div className="flex items-center justify-between">
                <span className="text-sm text-success">🟢 Dupe:</span>
                <span className="font-semibold text-success">{cloneName} – €{clonePrice}</span>
              </div>
              
              <div className="flex items-center justify-between pt-2 border-t border-border/30">
                <span className="text-sm font-medium text-muted-foreground">💸 You Save:</span>
                <div className="text-right">
                  <span className={`font-bold ${getSavingsColor(savings)}`}>
                    €{originalPrice - clonePrice} ({savings}%)
                  </span>
                </div>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">🟡 Clone:</span>
              <span className="text-muted-foreground">Not available yet</span>
            </div>
          )}
        </div>

        {/* Details */}
        <div className="space-y-3 pt-4 border-t border-border/30">
          <div className="flex items-center gap-2">
            <span className="text-sm">🔥 Scent:</span>
            <Badge variant="secondary" className="font-medium">
              {scent}
            </Badge>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-sm">{getSeasonIcon(season)} Best for:</span>
            <Badge variant="outline" className="font-medium">
              {season}
            </Badge>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-sm">🎯 Occasion:</span>
            <Badge variant="outline" className="font-medium">
              {occasion}
            </Badge>
          </div>
        </div>

        {/* Fragrance Notes */}
        {notes && (notes.top.length > 0 || notes.heart.length > 0 || notes.base.length > 0) && (
          <div className="space-y-3 pt-4 border-t border-border/30">
            <h4 className="text-sm font-semibold text-foreground">🧪 Fragrance Notes:</h4>
            
            {notes.top.length > 0 && (
              <div className="space-y-1">
                <span className="text-xs text-muted-foreground font-medium">Top:</span>
                <div className="flex flex-wrap gap-1">
                  {notes.top.map((note, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {note}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
            
            {notes.heart.length > 0 && (
              <div className="space-y-1">
                <span className="text-xs text-muted-foreground font-medium">Heart:</span>
                <div className="flex flex-wrap gap-1">
                  {notes.heart.map((note, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {note}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
            
            {notes.base.length > 0 && (
              <div className="space-y-1">
                <span className="text-xs text-muted-foreground font-medium">Base:</span>
                <div className="flex flex-wrap gap-1">
                  {notes.base.map((note, index) => (
                    <Badge key={index} variant="default" className="text-xs">
                      {note}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Fragrantica Link */}
        {fragranticaUrl && (
          <div className="pt-4 border-t border-border/30">
            <a 
              href={fragranticaUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors"
            >
              View on Fragrantica
            </a>
          </div>
        )}
      </CardContent>
      
      {/* Remove Image Password Dialog */}
      <Dialog open={isRemoveDialogOpen} onOpenChange={setIsRemoveDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Admin Access Required</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-muted-foreground">Enter admin password to remove images:</p>
            <Input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={handleRemoveKeyPress}
            />
            <Button onClick={handleRemovePasswordSubmit} className="w-full">
              Remove Image
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default FragranceCard;
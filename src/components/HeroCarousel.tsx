import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ImagePlus } from "lucide-react";
import { useSupabaseImageStorage } from "@/hooks/useSupabaseImageStorage";

const HeroCarousel = () => {
  const { getAllImages } = useSupabaseImageStorage();
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const carouselImages = getAllImages();
  const hasImages = carouselImages.length > 0;

  useEffect(() => {
    if (!hasImages) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [carouselImages.length, hasImages]);

  const goToPrevious = () => {
    if (!hasImages) return;
    setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const goToNext = () => {
    if (!hasImages) return;
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
  };

  if (!hasImages) {
    return (
      <div className="relative w-full max-w-md mx-auto">
        <div className="relative h-48 overflow-hidden rounded-lg border-2 border-dashed border-border bg-muted/20 flex items-center justify-center">
          <div className="text-center space-y-2">
            <ImagePlus className="h-8 w-8 text-muted-foreground mx-auto" />
            <div className="space-y-1">
              <h3 className="text-sm font-semibold text-foreground">No Images Yet</h3>
              <p className="text-xs text-muted-foreground max-w-40">
                Upload images in fragrance cards to see them here
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="relative h-48 overflow-hidden rounded-lg bg-card border border-border">
        {carouselImages.map((image, index) => (
          <div
            key={`${image.name}-${index}`}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-contain p-4"
            />
            <div className="absolute bottom-2 left-2 bg-background/90 backdrop-blur-sm rounded px-2 py-1 text-xs font-medium text-foreground">
              {image.name}
            </div>
          </div>
        ))}
        
        {/* Navigation buttons */}
        {carouselImages.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground h-8 w-8"
              onClick={goToPrevious}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground h-8 w-8"
              onClick={goToNext}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </>
        )}
      </div>
      
      {/* Dots indicator */}
      {carouselImages.length > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-accent' : 'bg-primary-foreground/30'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HeroCarousel;
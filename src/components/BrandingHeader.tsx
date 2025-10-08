import { Badge } from "@/components/ui/badge";

const BrandingHeader = () => {
  return (
    <div className="w-full bg-gradient-primary py-2">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="w-9" /> {/* Spacer for centering */}
          <Badge 
            variant="secondary" 
            className="bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30"
          >
            Made by Nhatiscool
          </Badge>
          <div className="w-9" /> {/* Spacer for centering */}
        </div>
      </div>
    </div>
  );
};

export default BrandingHeader;

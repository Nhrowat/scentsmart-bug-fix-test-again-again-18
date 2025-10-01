import { Badge } from "@/components/ui/badge";

const BrandingHeader = () => {
  return (
    <div className="w-full bg-gradient-primary py-2">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <Badge 
            variant="secondary" 
            className="bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30"
          >
            Made by Nhatiscool
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default BrandingHeader;

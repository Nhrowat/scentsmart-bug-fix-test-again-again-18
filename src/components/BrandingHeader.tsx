import { Badge } from "@/components/ui/badge";
import { Link, useLocation } from "react-router-dom";
import { Home, Heart, Calendar, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const BrandingHeader = () => {
  const location = useLocation();
  
  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/personal-favorites", label: "Favorites", icon: Heart },
    { path: "/this-months-fragrance", label: "This Month", icon: Calendar },
    { path: "/jordi-wishlist", label: "Jordi's Wishlist", icon: Star },
  ];

  return (
    <div className="w-full bg-gradient-primary border-b border-primary-foreground/10 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Brand Badge */}
          <Badge 
            variant="secondary" 
            className="bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30 text-sm px-4 py-2"
          >
            🎨 Made by Nhatiscool
          </Badge>
          
          {/* Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all",
                    "text-sm font-semibold",
                    isActive 
                      ? "bg-primary-foreground/30 text-primary-foreground border-2 border-primary-foreground/50 shadow-md scale-105" 
                      : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/15 border-2 border-transparent"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default BrandingHeader;

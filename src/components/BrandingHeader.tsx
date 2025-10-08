import { Badge } from "@/components/ui/badge";
import { Link, useLocation } from "react-router-dom";
import { Home, Heart, Calendar, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const BrandingHeader = () => {
  const location = useLocation();
  
  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/personal-favorites", label: "Personal Favorites", icon: Heart },
    { path: "/this-months-fragrance", label: "This Month's Pick", icon: Calendar },
    { path: "/jordi-wishlist", label: "Jordi's Wishlist", icon: Star },
  ];

  return (
    <div className="w-full bg-gradient-primary border-b border-primary-foreground/10">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Brand Badge */}
          <Badge 
            variant="secondary" 
            className="bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30"
          >
            Made by Nhatiscool
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
                    "flex items-center gap-2 px-4 py-2 rounded-lg transition-all",
                    "text-sm font-medium",
                    isActive 
                      ? "bg-primary-foreground/20 text-primary-foreground border border-primary-foreground/30" 
                      : "text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{item.label}</span>
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

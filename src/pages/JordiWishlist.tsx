import { useNavigate } from "react-router-dom";
import FragranceCard from "@/components/FragranceCard";
import BrandingHeader from "@/components/BrandingHeader";
import BrandingFooter from "@/components/BrandingFooter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, Calendar } from "lucide-react";

interface Fragrance {
  name: string;
  brand: string;
  originalPrice: number;
  cloneName: string;
  clonePrice: number;
  savings: number;
  scent: string;
  season: string;
  occasion: string;
  notes?: {
    top: string[];
    heart: string[];
    base: string[];
  };
  fragranticaUrl?: string;
  available: boolean;
}

const jordiWishlist: Fragrance[] = [
  {
    name: "Althair",
    brand: "Parfums de Marly",
    originalPrice: 290,
    cloneName: "Liquid Brun",
    clonePrice: 50,
    savings: 240,
    scent: "A warm, sweet, and spicy vanilla fragrance with a rich, ambery base.",
    season: "Fall/Winter",
    occasion: "Formal events, romantic evenings, or special occasions",
    notes: {
      top: ["Cinnamon", "Cardamom", "Orange Blossom", "Bergamot"],
      heart: ["Bourbon Vanilla", "Elemi"],
      base: ["Praline", "Musk", "Ambroxan", "Guaiac Wood", "Tonka Bean", "Candied Almond"]
    },
    fragranticaUrl: "https://www.fragrantica.com/perfume/Parfums-de-Marly/Althair-84109.html",
    available: true
  },
  {
    name: "40 Knots",
    brand: "Xerjoff",
    originalPrice: 290,
    cloneName: "Yacht Club",
    clonePrice: 30,
    savings: 260,
    scent: "Woody, salty, and marine with powdery and amber nuances.",
    season: "All Seasons",
    occasion: "Versatile — daytime, resort wear, or evening sophistication",
    notes: {
      top: ["Salt", "Green Notes"],
      heart: ["Sea Water", "Cedar"],
      base: ["Woody Notes"]
    },
    fragranticaUrl: "https://www.fragrantica.com/perfume/Xerjoff/40-Knots-16445.html",
    available: true
  },
  {
    name: "Love O-Matic",
    brand: "Room 1015",
    originalPrice: 150,
    cloneName: "",
    clonePrice: 0,
    savings: 0,
    scent: "Sweet, fruity, and gourmand with floral undertones",
    season: "Spring/Summer",
    occasion: "Casual wear, fun outings, or daytime events",
    notes: {
      top: ["Strawberry", "Blackcurrant", "Lemon"],
      heart: ["Ozonic notes", "Bubble Gum"],
      base: ["Musk", "Ambrette", "Cedar"]
    },
    fragranticaUrl: "https://www.fragrantica.com/perfume/Room-1015/Love-O-Matic-108668.html",
    available: false
  },
  {
    name: "724",
    brand: "Maison Francis Kurkdjian",
    originalPrice: 200,
    cloneName: "",
    clonePrice: 0,
    savings: 0,
    scent: "Fresh, woody, and floral with a modern, airy character",
    season: "Spring/Summer",
    occasion: "Casual and elegant daily wear",
    notes: {
      top: ["Aldehydes", "Calabrian Bergamot"],
      heart: ["Egyptian Jasmine", "Mock Orange", "Sweet Pea"],
      base: ["White Musk", "Sandalwood"]
    },
    fragranticaUrl: "https://www.fragrantica.com/perfume/Maison-Francis-Kurkdjian/724-75754.html",
    available: false
  }
];

const JordiWishlist = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <BrandingHeader />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-12 text-center space-y-6">
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
            
            <Button 
              variant="outline" 
              onClick={() => navigate('/personal-favorites')}
            >
              <Heart className="w-4 h-4 mr-2" />
              Personal Favorites
            </Button>
            
            <Button 
              variant="outline" 
              onClick={() => navigate('/this-months-fragrance')}
            >
              <Calendar className="w-4 h-4 mr-2" />
              This Month's Pick
            </Button>
          </div>
          
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Jordi's Wishlist
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Curated fragrances on Jordi's radar
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jordiWishlist.map((fragrance, index) => (
            <FragranceCard key={index} {...fragrance} />
          ))}
        </div>
      </main>

      <BrandingFooter />
    </div>
  );
};

export default JordiWishlist;

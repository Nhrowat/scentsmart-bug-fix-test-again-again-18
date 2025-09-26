import { Button } from "@/components/ui/button";
import FragranceCard from "@/components/FragranceCard";
import BrandingHeader from "@/components/BrandingHeader";
import BrandingFooter from "@/components/BrandingFooter";
import { Fragrance } from "@/hooks/useFragranceFilters";
import { Heart, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const personalFavorites: Fragrance[] = [
  {
    name: "Imagination",
    brand: "Louis Vuitton",
    designer: "Jacques Cavallier-Belletrud",
    niche: "Luxury Niche",
    originalPrice: 300,
    clonePrice: 45,
    cloneName: "Breezy",
    scent: "Fresh, airy",
    season: "Spring",
    occasion: "Casual, signature scent",
    savings: 85,
    available: true,
    tags: ["Spring", "Fresh"],
    fragranticaUrl: "https://www.fragrantica.com/perfume/Louis-Vuitton/Imagination-67370.html",
    notes: {
      top: ["Citron", "Calabrian Bergamot", "Sicilian Orange"],
      heart: ["Tunisian Neroli", "Nigerian Ginger", "Ceylon Cinnamon"],
      base: ["Chinese Black Tea", "Ambroxan", "Guaiac Wood", "Olibanum"]
    }
  },
  {
    name: "Side Effect",
    brand: "Initio",
    designer: "Alexandra Carlin",
    niche: "Niche Parfums",
    originalPrice: 270,
    clonePrice: 45,
    cloneName: "The Hype",
    scent: "Boozy, spicy, tobacco",
    season: "Fall & Nightlife",
    occasion: "Parties & Events",
    savings: 83,
    available: true,
    tags: ["Fall", "Spicy"],
    fragranticaUrl: "https://www.fragrantica.com/perfume/Initio-Parfums-Prives/Side-Effect-42260.html",
    notes: {
      top: ["Rum", "Cinnamon", "Vanilla"],
      heart: ["Tobacco", "Sandalwood"],
      base: ["Saffron", "Musk"]
    }
  },
  {
    name: "Pacific Rock Moss",
    brand: "Goldfield & Banks",
    designer: "Saskia Wilson-Brown",
    niche: "Australian Niche",
    originalPrice: 167,
    clonePrice: 25,
    cloneName: "Sama",
    scent: "Aquatic, salty fresh",
    season: "Summer",
    occasion: "Clean daily wear",
    savings: 85,
    available: true,
    tags: ["Summer", "Fresh", "Aquatic"],
    fragranticaUrl: "https://www.fragrantica.com/perfume/Goldfield-Banks-Australia/Pacific-Rock-Moss-44120.html",
    notes: {
      top: ["Italian lemon", "Sage", "Geranium"],
      heart: ["Virginia cedar"],
      base: ["Marine", "Fresh feel"]
    }
  },
  {
    name: "Wavechild",
    brand: "Room 1015",
    designer: "Room 1015",
    niche: "Niche Parfums",
    originalPrice: 150,
    clonePrice: 60,
    cloneName: "Atlantis Extrait",
    scent: "Juicy, aquatic, watermelon",
    season: "Spring & Summer",
    occasion: "Summer vibes, nostalgic",
    savings: 60,
    available: true,
    tags: ["Spring", "Summer", "Fruity", "Aquatic"],
    fragranticaUrl: "https://www.fragrantica.com/perfume/Room-1015/Wavechild-91364.html",
    notes: {
      top: ["Mandarin Orange", "Orange", "Lemon"],
      heart: ["Watermelon", "Coconut"],
      base: ["Ambergris", "Amberwood", "Cocoa"]
    }
  },
  {
    name: "Queening",
    brand: "Mind Games",
    designer: "Independent Creator",
    niche: "Niche Artisan",
    originalPrice: 270,
    clonePrice: 45,
    cloneName: "Rumor Has It",
    scent: "Mysterious, bold",
    season: "Fall",
    occasion: "Unique, signature",
    savings: 83,
    available: true,
    tags: ["Fall", "Bold"],
    fragranticaUrl: "https://www.fragrantica.com/perfume/Mind-Games/Queening-89898.html",
    notes: {
      top: ["Cotton Flower", "Apple", "Cypress"],
      heart: ["Orris Root", "Rum", "Saffron"],
      base: ["Vanilla", "Coconut", "Musk"]
    }
  },
  {
    name: "Prodigy",
    brand: "Mind Games",
    designer: "Independent Creator",
    niche: "Niche Artisan",
    originalPrice: 270,
    clonePrice: 45,
    cloneName: "Paragon",
    scent: "Woody, refined",
    season: "Winter",
    occasion: "Formal or introspective",
    savings: 83,
    available: true,
    tags: ["Winter", "Woody"],
    fragranticaUrl: "https://www.fragrantica.com/perfume/Mind-Games/Prodigy-101192.html",
    notes: {
      top: ["Rose", "Bergamot", "Cardamom"],
      heart: ["Longoza", "Patchouli"],
      base: ["Vanilla", "Blonde Woods", "Sandalwood"]
    }
  },
  {
    name: "Météore",
    brand: "Louis Vuitton",
    designer: "Jacques Cavallier-Belletrud",
    niche: "Luxury Niche",
    originalPrice: 300,
    clonePrice: 45,
    cloneName: "Astro",
    scent: "Fresh, zesty",
    season: "Spring & Summer",
    occasion: "Daily, clean",
    savings: 85,
    available: true,
    tags: ["Spring", "Summer", "Fresh", "Citrus"],
    fragranticaUrl: "https://www.fragrantica.com/perfume/Louis-Vuitton/Meteore-62251.html",
    notes: {
      top: ["Mandarin Orange", "Sicilian Orange", "Calabrian Bergamot"],
      heart: ["Pink Pepper", "Tunisian Neroli", "Indonesian Nutmeg", "Pepper", "Guatemalan Cardamom"],
      base: ["Java Vetiver Oil"]
    }
  },
  {
    name: "Ingenious Ginger",
    brand: "Goldfield & Banks",
    designer: "Saskia Wilson-Brown",
    niche: "Australian Niche",
    originalPrice: 167,
    clonePrice: 0,
    cloneName: "",
    scent: "Ginger, fresh",
    season: "Spring",
    occasion: "Light and playful",
    savings: 0,
    available: false,
    tags: ["Spring", "Fresh", "Ginger", "Spicy"],
    fragranticaUrl: "https://www.fragrantica.com/perfume/Goldfield-Banks-Australia/Ingenious-Ginger-81895.html",
    notes: {
      top: ["Ginger flower", "Lemon", "Bergamot"],
      heart: ["Mandarin", "Magnolia", "Jasmine", "Rose"],
      base: ["Vanilla", "Amber", "Sandalwood", "Cashmeran", "Musk", "Patchouli"]
    }
  }
];

const PersonalFavorites = () => {
  const navigate = useNavigate();
  return (
    <main className="min-h-screen bg-background">
      <BrandingHeader />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="mb-6 self-start"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
            <div className="flex items-center justify-center gap-3 mb-6">
              <Heart className="w-8 h-8 text-primary fill-current" />
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Personal Favorites
              </h1>
              <Heart className="w-8 h-8 text-primary fill-current" />
            </div>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              My carefully curated selection of exceptional fragrances that define luxury and sophistication
            </p>
          </div>
        </div>
      </section>

      {/* Favorites Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {personalFavorites.map((fragrance) => (
              <FragranceCard
                key={fragrance.name}
                {...fragrance}
              />
            ))}
          </div>
        </div>
      </section>

      <BrandingFooter />
    </main>
  );
};

export default PersonalFavorites;
import FragranceCard from "@/components/FragranceCard";
import BrandingHeader from "@/components/BrandingHeader";
import BrandingFooter from "@/components/BrandingFooter";
import ContactButton from "@/components/ContactButton";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ThisMonthsFragrance = () => {
  const navigate = useNavigate();
  
  const featuredFragrances = [
    {
      name: "Moon Tale",
      brand: "Louis Vuitton",
      originalPrice: 300,
      clonePrice: 0,
      cloneName: "Not yet available - Unreleased",
      scent: "Floral, fruity, elegant",
      season: "All seasons",
      occasion: "Evening, special occasions",
      savings: 0,
      available: false,
      fragranticaUrl: "https://www.fragrantica.com/perfume/Louis-Vuitton/Moon-Tale-115408.html",
      notes: {
        top: ["Peony", "Magnolia", "Jasmine Sambac"],
        heart: ["Geranium", "Raspberry"],
        base: ["Musk", "Woods"]
      }
    },
    {
      name: "Herbes Troublantes",
      brand: "Guerlain",
      originalPrice: 330,
      clonePrice: 0,
      cloneName: "No dupe available",
      scent: "Herbal, fresh, elegant",
      season: "All seasons",
      occasion: "Daily wear, sophisticated",
      savings: 0,
      available: false,
      fragranticaUrl: "https://www.fragrantica.com/perfume/Guerlain/Herbes-Troublantes-69275.html",
      notes: {
        top: ["Bergamot"],
        heart: ["Orange Blossom"],
        base: ["White Musk"]
      }
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Branding Header */}
      <BrandingHeader />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-card">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-4 mb-8">
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
                onClick={() => navigate('/jordi-wishlist')}
              >
                <Star className="w-4 h-4 mr-2" />
                Jordi's Wishlist
              </Button>
            </div>
            
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                This Month's Featured Fragrances
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover our handpicked fragrances of the month - featuring an unreleased mysterious lunar scent 
                from Louis Vuitton and a sophisticated herbal composition from Guerlain.
              </p>
            </div>

            {/* Featured Fragrance Cards */}
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {featuredFragrances.map((fragrance) => (
                <FragranceCard key={fragrance.name} {...fragrance} />
              ))}
            </div>

            {/* Additional Information */}
            <div className="mt-12 max-w-5xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Why We're Excited About These Fragrances
              </h2>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-card/50 p-6 rounded-lg border border-border/50">
                  <h3 className="text-xl font-semibold text-foreground mb-3">🌙 Journey To China</h3>
                  <p className="text-muted-foreground">
                    Part of the exclusive 2025 Journey To China collection, Moon Tale captures the poetic 
                    beauty of moonlit gardens with peony, magnolia, and jasmine sambac creating a luminous opening.
                  </p>
                </div>
                <div className="bg-card/50 p-6 rounded-lg border border-border/50">
                  <h3 className="text-xl font-semibold text-foreground mb-3">✨ Fruity Floral Delight</h3>
                  <p className="text-muted-foreground">
                    A sophisticated heart of geranium and raspberry adds an unexpected fruity twist to the 
                    floral composition, perfect for evening wear. Releasing October 17, 2025.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card/50 p-6 rounded-lg border border-border/50">
                  <h3 className="text-xl font-semibold text-foreground mb-3">🌿 Herbal Sophistication</h3>
                  <p className="text-muted-foreground">
                    Herbes Troublantes from Guerlain offers a fresh, herbal composition with bergamot opening, 
                    orange blossom heart, and white musk base - perfect for those seeking elegant simplicity.
                  </p>
                </div>
                <div className="bg-card/50 p-6 rounded-lg border border-border/50">
                  <h3 className="text-xl font-semibold text-foreground mb-3">💎 Timeless Elegance</h3>
                  <p className="text-muted-foreground">
                    A masterclass in minimalist perfumery, this Guerlain creation proves that sophisticated 
                    fragrances don't need complexity - just perfect balance of herbal notes and white musk.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Branding Footer */}
      <BrandingFooter />
      
      {/* Contact Button */}
      <ContactButton />
    </div>
  );
};

export default ThisMonthsFragrance;
import FragranceCard from "@/components/FragranceCard";
import BrandingHeader from "@/components/BrandingHeader";
import BrandingFooter from "@/components/BrandingFooter";
import ContactButton from "@/components/ContactButton";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ThisMonthsFragrance = () => {
  const navigate = useNavigate();
  
  const featuredFragrance = {
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
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Branding Header */}
      <BrandingHeader />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-card">
          <div className="container mx-auto px-4">
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
            
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                This Month's Featured Fragrance
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover our handpicked fragrance of the month - an unreleased mysterious lunar scent 
                from Louis Vuitton, coming soon to captivate with its ethereal elegance.
              </p>
            </div>

            {/* Featured Fragrance Card */}
            <div className="max-w-md mx-auto">
              <FragranceCard {...featuredFragrance} />
            </div>

            {/* Additional Information */}
            <div className="mt-12 max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Why We're Excited About Moon Tale
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
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
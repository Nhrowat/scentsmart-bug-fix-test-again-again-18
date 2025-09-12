import FragranceCard from "@/components/FragranceCard";
import BrandingHeader from "@/components/BrandingHeader";
import BrandingFooter from "@/components/BrandingFooter";
import ContactButton from "@/components/ContactButton";

const ThisMonthsFragrance = () => {
  const featuredFragrance = {
    name: "Sun Song 2025",
    brand: "Louis Vuitton",
    originalPrice: 300,
    clonePrice: 45,
    cloneName: "Citrus Fever",
    scent: "Bright citrus, joyful",
    season: "Summer",
    occasion: "Daytime, uplifting",
    savings: 85,
    available: true,
    fragranticaUrl: "https://www.fragrantica.com/perfume/Louis-Vuitton/Sun-Song-2025-107116.html",
    notes: {
      top: ["Lemon", "Petitgrain"],
      heart: ["Orange Blossom", "Neroli"],
      base: ["Musk"]
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
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                This Month's Featured Fragrance
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover our handpicked fragrance of the month - a bright and joyful citrus scent 
                perfect for summer and uplifting daytime occasions.
              </p>
            </div>

            {/* Featured Fragrance Card */}
            <div className="max-w-md mx-auto">
              <FragranceCard {...featuredFragrance} />
            </div>

            {/* Additional Information */}
            <div className="mt-12 max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Why We Love Sun Song 2025
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card/50 p-6 rounded-lg border border-border/50">
                  <h3 className="text-xl font-semibold text-foreground mb-3">🍋 Citrus Brilliance</h3>
                  <p className="text-muted-foreground">
                    A radiant opening of lemon and petitgrain creates an instantly uplifting 
                    and energizing experience that brightens any day.
                  </p>
                </div>
                <div className="bg-card/50 p-6 rounded-lg border border-border/50">
                  <h3 className="text-xl font-semibold text-foreground mb-3">🌸 Joyful Heart</h3>
                  <p className="text-muted-foreground">
                    Orange blossom and neroli in the heart add a sophisticated floral depth, 
                    making it perfect for summer days and cheerful occasions.
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
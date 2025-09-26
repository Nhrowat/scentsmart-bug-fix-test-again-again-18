import FragranceCard from "@/components/FragranceCard";
import BrandingHeader from "@/components/BrandingHeader";
import BrandingFooter from "@/components/BrandingFooter";
import ContactButton from "@/components/ContactButton";

const ThisMonthsFragrance = () => {
  const featuredFragrance = {
    name: "Side Effect",
    brand: "Initio Parfums Prives",
    originalPrice: 195,
    clonePrice: 39,
    cloneName: "Dark Attraction",
    scent: "Dark, mysterious, addictive",
    season: "Fall/Winter",
    occasion: "Evening, nightlife",
    savings: 80,
    available: true,
    fragranticaUrl: "https://www.fragrantica.com/perfume/Initio-Parfums-Prives/Side-Effect-50914.html",
    notes: {
      top: ["Rum", "Cinnamon", "Saffron"],
      heart: ["Tobacco", "Hedione", "Rose"],
      base: ["Vanilla", "Sandalwood", "Amber"]
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
                Discover our handpicked fragrance of the month - a dark and mysterious scent 
                perfect for fall evenings and captivating nightlife occasions.
              </p>
            </div>

            {/* Featured Fragrance Card */}
            <div className="max-w-md mx-auto">
              <FragranceCard {...featuredFragrance} />
            </div>

            {/* Additional Information */}
            <div className="mt-12 max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Why We Love Side Effect
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card/50 p-6 rounded-lg border border-border/50">
                  <h3 className="text-xl font-semibold text-foreground mb-3">🥃 Intoxicating Opening</h3>
                  <p className="text-muted-foreground">
                    A captivating blend of rum, cinnamon, and saffron creates an instantly 
                    magnetic and mysterious aura that draws people in.
                  </p>
                </div>
                <div className="bg-card/50 p-6 rounded-lg border border-border/50">
                  <h3 className="text-xl font-semibold text-foreground mb-3">🌹 Addictive Heart</h3>
                  <p className="text-muted-foreground">
                    Tobacco and rose in the heart add sophistication and depth, 
                    making it perfect for evening events and unforgettable nights.
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
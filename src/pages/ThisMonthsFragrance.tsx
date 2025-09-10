import FragranceCard from "@/components/FragranceCard";
import BrandingHeader from "@/components/BrandingHeader";
import BrandingFooter from "@/components/BrandingFooter";
import ContactButton from "@/components/ContactButton";

const ThisMonthsFragrance = () => {
  const featuredFragrance = {
    name: "Venom Incarnat",
    brand: "Stéphane Humbert Lucas 777",
    originalPrice: 215,
    clonePrice: 50,
    cloneName: "Veneno Scarlet",
    scent: "Fruity, gourmand, leathery",
    season: "Autumn & Winter",
    occasion: "Seductive, glamour",
    savings: 77,
    available: true,
    fragranticaUrl: "https://www.fragrantica.com/perfume/Stephane-Humbert-Lucas-777/Venom-Incarnat-72387.html",
    notes: {
      top: ["Wild Strawberry", "Strawberry", "Caramel", "Blackberry"],
      heart: ["Raspberry", "Virginian Cedar", "Cinnamon"],
      base: ["Russian Leather", "Caramel", "Vanilla", "Tonka Bean", "Patchouli", "Balsam Fir"]
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
                Discover our handpicked fragrance of the month - a seductive and glamorous scent 
                perfect for autumn and winter occasions.
              </p>
            </div>

            {/* Featured Fragrance Card */}
            <div className="max-w-md mx-auto">
              <FragranceCard {...featuredFragrance} />
            </div>

            {/* Additional Information */}
            <div className="mt-12 max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Why We Love Venom Incarnat
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card/50 p-6 rounded-lg border border-border/50">
                  <h3 className="text-xl font-semibold text-foreground mb-3">🍓 Gourmand Excellence</h3>
                  <p className="text-muted-foreground">
                    A masterful blend of wild strawberry and caramel creates an irresistible 
                    gourmand opening that's both fruity and indulgent.
                  </p>
                </div>
                <div className="bg-card/50 p-6 rounded-lg border border-border/50">
                  <h3 className="text-xl font-semibold text-foreground mb-3">🔥 Seductive Depth</h3>
                  <p className="text-muted-foreground">
                    The Russian leather base adds a luxurious and seductive depth, 
                    making it perfect for intimate occasions and cooler weather.
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
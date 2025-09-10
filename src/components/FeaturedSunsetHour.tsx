import FragranceCard from "@/components/FragranceCard";

const FeaturedSunsetHour = () => {
  const data = {
    name: "Sunset Hour",
    brand: "Goldfield & Banks",
    originalPrice: 167,
    clonePrice: 0,
    cloneName: "No dupe available",
    scent: "Fruity, warm, gourmand",
    season: "Summer afternoon & evening",
    occasion: "Romantic, beachy vibes",
    savings: 0,
    available: false,
    fragranticaUrl: "https://www.fragrantica.com/perfume/Goldfield-Banks-Australia/Sunset-Hour-70950.html",
    notes: {
      top: ["Desert Peach (Quandong)", "Raspberry", "Mandarin Orange"],
      heart: ["Jasmine Sambac", "Ginger", "Pink Pepper", "Coconut Cream"],
      base: ["Sandalwood", "Cashmere Wood", "Benzoin"]
    }
  };

  return (
    <section aria-label="Featured Sunset Hour" className="py-16 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-heading font-bold text-foreground mb-3">Featured: Sunset Hour</h2>
          <p className="text-muted-foreground">A standout summer gourmand from Goldfield & Banks</p>
        </div>
        <div className="max-w-md mx-auto">
          <FragranceCard {...data} />
        </div>
      </div>
    </section>
  );
};

export default FeaturedSunsetHour;

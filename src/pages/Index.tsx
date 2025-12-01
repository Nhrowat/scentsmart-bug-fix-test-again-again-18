import { Button } from "@/components/ui/button";
import FragranceCard from "@/components/FragranceCard";
import BudgetComparison from "@/components/BudgetComparison";
import Newsletter from "@/components/Newsletter";
import HeroCarousel from "@/components/HeroCarousel";
import FragranceFilters from "@/components/FragranceFilters";
import BrandingHeader from "@/components/BrandingHeader";
import BrandingFooter from "@/components/BrandingFooter";
import ContactButton from "@/components/ContactButton";
import { useFragranceFilters, Fragrance } from "@/hooks/useFragranceFilters";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-fragrances.jpg";
import { useNavigate } from "react-router-dom";
import { Heart, Calendar, Star } from "lucide-react";

const fragrances: Fragrance[] = [];

// Main component
const Index = () => {
  const navigate = useNavigate();
  const {
    filters,
    setFilters,
    filteredFragrances,
    isFilterOpen,
    setIsFilterOpen,
    totalCount,
    filteredCount
  } = useFragranceFilters(fragrances);

  const scrollToCollection = () => {
    document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-full">
      {/* Branding Header */}
      <BrandingHeader />
      
      <div className="min-h-screen bg-gradient-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          {/* Hero Carousel */}
          <div className="mb-8">
            <HeroCarousel />
          </div>
          
          <h1 className="text-hero font-bold text-primary-foreground mb-6 leading-tight">
            Smell Iconic.<br />
            <span className="text-accent">Spend Smart.</span>
          </h1>
          
          <p className="text-subheading text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Compare premium niche and designer scents with their budget-friendly clones.<br />
            <span className="font-semibold text-accent">Save up to 91%</span> without sacrificing style.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              variant="luxury" 
              size="lg" 
              onClick={scrollToCollection}
              className="text-lg px-8 py-4 h-auto bg-accent/20 hover:bg-accent/30 text-accent border-accent/30"
            >
              Browse the Collection
            </Button>
            
            <Button 
              variant="hero" 
              size="lg" 
              onClick={() => navigate('/personal-favorites')}
              className="text-lg px-8 py-4 h-auto"
            >
              <Heart className="w-5 h-5 mr-2" />
              Personal Favorites
            </Button>
            
            <Button 
              variant="luxury" 
              size="lg" 
              onClick={() => navigate('/this-months-fragrance')}
              className="text-lg px-8 py-4 h-auto"
            >
              <Calendar className="w-5 h-5 mr-2" />
              This Month's Pick
            </Button>
            
            <Button 
              variant="luxury" 
              size="lg" 
              onClick={() => navigate('/jordi-wishlist')}
              className="text-lg px-8 py-4 h-auto"
            >
              <Star className="w-5 h-5 mr-2" />
              Jordi's Wishlist
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-heading font-bold text-foreground mb-8">
              Why I Created ScentSmart
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I created ScentSmart after realizing my fragrance wishlist — full of brands like{" "}
                <span className="text-accent font-medium">Louis Vuitton</span>,{" "}
                <span className="text-accent font-medium">Goldfield & Banks</span>,{" "}
                <span className="text-accent font-medium">Initio</span>, and{" "}
                <span className="text-accent font-medium">Maison Francis Kurkdjian</span> — 
                added up to more than <span className="text-destructive font-bold">€4,600</span>.
              </p>
              
              <p>
                Instead of giving up, I went searching for clones that smelled almost identical for less than{" "}
                <span className="text-success font-bold">€50</span>.
              </p>
              
              <p className="text-foreground font-medium text-xl">
                This site is for fragrance lovers who want to smell high-end without paying high-end prices. 
                Discover your next signature scent with smart alternatives that smell{" "}
                <span className="text-accent font-bold">85–95% similar</span> for a fraction of the cost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* This Month's Fragrances */}
      <section className="py-16 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-heading font-bold text-foreground mb-4">
              This Month's Featured Fragrances
            </h2>
            <p className="text-muted-foreground text-lg">
              Our handpicked selection for this month - don't miss these gems
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 max-w-7xl mx-auto">
            {/* Queening */}
            <FragranceCard
              name="Queening"
              brand="Mind Games"
              originalPrice={270}
              clonePrice={45}
              cloneName="Rumor Has It"
              scent="Mysterious, bold"
              season="Fall"
              occasion="Unique, signature"
              savings={83}
              available={true}
              fragranticaUrl="https://www.fragrantica.com/perfume/Mind-Games/Queening-89898.html"
              notes={{
                top: ["Cotton Flower", "Apple", "Cypress"],
                heart: ["Orris Root", "Rum", "Saffron"],
                base: ["Vanilla", "Coconut", "Musk"]
              }}
            />
            
            {/* Prodigy */}
            <FragranceCard
              name="Prodigy"
              brand="Mind Games"
              originalPrice={270}
              clonePrice={45}
              cloneName="Paragon"
              scent="Woody, refined"
              season="Winter"
              occasion="Formal or introspective"
              savings={83}
              available={true}
              fragranticaUrl="https://www.fragrantica.com/perfume/Mind-Games/Prodigy-101192.html"
              notes={{
                top: ["Rose", "Bergamot", "Cardamom"],
                heart: ["Longoza", "Patchouli"],
                base: ["Vanilla", "Blonde Woods", "Sandalwood"]
              }}
            />
            
            {/* Météore */}
            <FragranceCard
              name="Météore"
              brand="Louis Vuitton"
              originalPrice={300}
              clonePrice={45}
              cloneName="Astro"
              scent="Fresh, zesty"
              season="Spring & Summer"
              occasion="Daily, clean"
              savings={85}
              available={true}
              fragranticaUrl="https://www.fragrantica.com/perfume/Louis-Vuitton/Meteore-62251.html"
              notes={{
                top: ["Mandarin Orange", "Sicilian Orange", "Calabrian Bergamot"],
                heart: ["Pink Pepper", "Tunisian Neroli", "Indonesian Nutmeg", "Pepper", "Guatemalan Cardamom"],
                base: ["Java Vetiver Oil"]
              }}
            />
            
            {/* Ingenious Ginger */}
            <FragranceCard
              name="Ingenious Ginger"
              brand="Goldfield & Banks"
              originalPrice={167}
              clonePrice={0}
              cloneName="No dupe available"
              scent="Ginger, fresh"
              season="Spring"
              occasion="Light and playful"
              savings={0}
              available={false}
              fragranticaUrl="https://www.fragrantica.com/perfume/Goldfield-Banks-Australia/Ingenious-Ginger-81895.html"
              notes={{
                top: ["Ginger flower", "Lemon", "Bergamot"],
                heart: ["Mandarin", "Magnolia", "Jasmine", "Rose"],
                base: ["Vanilla", "Amber", "Sandalwood", "Cashmeran", "Musk", "Patchouli"]
              }}
            />
            
            {/* Musk Therapy */}
            <FragranceCard
              name="Musk Therapy"
              brand="Initio"
              originalPrice={270}
              clonePrice={27}
              cloneName="Glorious Oud Royal Blanc"
              scent="Clean musk, citrus"
              season="Spring & Fall"
              occasion="Daily, office safe"
              savings={90}
              available={true}
              fragranticaUrl="https://www.fragrantica.com/perfume/Initio-Parfums-Prives/Musk-Therapy-66097.html"
              notes={{
                top: ["Bergamot", "Mandarin"],
                heart: ["White Magnolia", "Black Currant"],
                base: ["White Sandalwood", "Pink Musk", "White Musk"]
              }}
            />
            
            {/* Pacific Rock Moss */}
            <FragranceCard
              name="Pacific Rock Moss"
              brand="Goldfield & Banks"
              originalPrice={167}
              clonePrice={25}
              cloneName="Sama"
              scent="Aquatic, salty fresh"
              season="Summer"
              occasion="Clean daily wear"
              savings={85}
              available={true}
              fragranticaUrl="https://www.fragrantica.com/perfume/Goldfield-Banks-Australia/Pacific-Rock-Moss-44120.html"
              notes={{
                top: ["Italian lemon", "Sage", "Geranium"],
                heart: ["Virginia cedar"],
                base: ["Marine", "Fresh feel"]
              }}
            />
          </div>
        </div>
      </section>

      {/* Fragrance Library */}
      <section id="collection" className="py-20 bg-gradient-accent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-heading font-bold text-foreground mb-4">
              The Fragrance Library
            </h2>
            <p className="text-muted-foreground text-lg">
              Luxury scents and their budget-friendly alternatives
            </p>
            <div className="flex justify-center mt-4">
              <Badge variant="outline" className="text-sm">
                Showing {filteredCount} of {totalCount} fragrances
              </Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <FragranceFilters
                filters={filters}
                onFiltersChange={setFilters}
                isOpen={isFilterOpen}
                onToggle={() => setIsFilterOpen(!isFilterOpen)}
              />
            </div>

            {/* Fragrance Grid */}
            <div className="lg:col-span-3">
              {filteredFragrances.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {/* Always show Sunset Hour as part of the library */}
                  <FragranceCard
                    name="Sunset Hour"
                    brand="Goldfield & Banks"
                    originalPrice={167}
                    clonePrice={0}
                    cloneName="No dupe available"
                    scent="Fruity, warm, gourmand"
                    season="Summer afternoon & evening"
                    occasion="Romantic, beachy vibes"
                    savings={0}
                    available={false}
                    fragranticaUrl="https://www.fragrantica.com/perfume/Goldfield-Banks-Australia/Sunset-Hour-70950.html"
                    notes={{
                      top: ["Desert Peach (Quandong)", "Raspberry", "Mandarin Orange"],
                      heart: ["Jasmine Sambac", "Ginger", "Pink Pepper", "Coconut Cream"],
                      base: ["Sandalwood", "Cashmere Wood", "Benzoin"],
                    }}
                  />

                  {filteredFragrances.map((fragrance, index) => (
                    <FragranceCard key={index} {...fragrance} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <p className="text-muted-foreground text-lg mb-4">
                    No fragrances match your current filters
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => setFilters({
                      seasons: [],
                      scentProfiles: [],
                      priceRange: [25, 600],
                      dupeAvailability: 'all',
                      sortBy: 'name',
                      searchQuery: ''
                    })}
                  >
                    Clear All Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Budget Comparison */}
      <BudgetComparison />

      {/* Newsletter */}
      <Newsletter />

      {/* Branding Footer */}
      <BrandingFooter />
      
      {/* Contact Button */}
      <ContactButton />
    </div>
    </div>
  );
};

export default Index;
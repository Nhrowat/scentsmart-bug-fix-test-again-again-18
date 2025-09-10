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

const fragrances: Fragrance[] = [
  {
    name: "Summer Hammer",
    brand: "Lorenzo Pazzaglia",
    designer: "Lorenzo Pazzaglia",
    niche: "Niche",
    originalPrice: 145,
    clonePrice: 42.50,
    cloneName: "Tropical Vibe",
    scent: "Tropical, fruity, sweet",
    season: "Summer",
    occasion: "Beach, vacation",
    savings: 71,
    available: true,
    tags: ["Summer", "Tropical", "Fruity", "Sweet"],
    fragranticaUrl: "https://www.fragrantica.com/perfume/Lorenzo-Pazzaglia/Summer-Hammer-81476.html",
    notes: {
      top: ["Coconut", "Watermelon", "Mango", "Pineapple"],
      heart: ["Tiare Flower", "Ylang-Ylang", "Jasmine"],
      base: ["Vanilla", "Musk", "Amber", "Sandalwood"]
    }
  },
  {
    name: "Afternoon Swim",
    brand: "Louis Vuitton",
    designer: "Jacques Cavallier-Belletrud",
    niche: "Luxury Niche",
    originalPrice: 300,
    clonePrice: 42.50,
    cloneName: "Adonis Icarus",
    scent: "Citrusy, fresh, uplifting",
    season: "Summer",
    occasion: "Daily, signature scent",
    savings: 86,
    available: true,
    tags: ["Summer", "Citrus", "Fresh"],
    fragranticaUrl: "https://www.fragrantica.com/perfume/Louis-Vuitton/Afternoon-Swim-53947.html",
    notes: {
      top: ["Orange", "Bergamot", "Mandarin Orange"],
      heart: ["Orange", "Bergamot", "Mandarin Orange"],
      base: ["Orange", "Bergamot", "Mandarin Orange"]
    }
  },
  {
    name: "Pacific Chill",
    brand: "Louis Vuitton",
    designer: "Jacques Cavallier-Belletrud",
    niche: "Luxury Niche",
    originalPrice: 300,
    clonePrice: 40,
    cloneName: "Pacific Aura",
    scent: "Fruity, fresh",
    season: "Summer",
    occasion: "Daily wear",
    savings: 87,
    available: true,
    tags: ["Summer", "Fruity", "Fresh"],
    fragranticaUrl: "https://www.fragrantica.com/perfume/Louis-Vuitton/Pacific-Chill-81423.html",
    notes: {
      top: ["Citron", "Mint", "Orange", "Lemon", "Black Currant", "Coriander"],
      heart: ["Apricot", "Basil", "Carrot Seeds", "May Rose"],
      base: ["Fig", "Dates", "Ambrette"]
    }
  },
  {
    name: "Symphony",
    brand: "Louis Vuitton",
    designer: "Jacques Cavallier-Belletrud",
    niche: "Luxury Niche",
    originalPrice: 510,
    clonePrice: 45,
    cloneName: "Unforgettable",
    scent: "Citrus, bright",
    season: "Spring",
    occasion: "Everyday elegance",
    savings: 91,
    available: true,
    tags: ["Spring", "Citrus", "Fresh"],
    fragranticaUrl: "https://www.fragrantica.com/perfume/Louis-Vuitton/Symphony-68357.html",
    notes: {
      top: ["Grapefruit", "Bergamot", "Ginger"],
      heart: [],
      base: []
    }
  },
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
    name: "Ombre Nomade",
    brand: "Louis Vuitton",
    designer: "Jacques Cavallier-Belletrud",
    niche: "Luxury Oud",
    originalPrice: 300,
    clonePrice: 100,
    cloneName: "Madness Extreme",
    scent: "Oud, smoky, rich",
    season: "Winter & Events",
    occasion: "Special occasions",
    savings: 67,
    available: true,
    tags: ["Winter", "Oud", "Smoky"],
    fragranticaUrl: "https://www.fragrantica.com/perfume/Louis-Vuitton/Ombre-Nomade-49755.html",
    notes: {
      top: ["Agarwood (Oud)", "Incense", "Rose", "Raspberry"],
      heart: ["Amberwood", "Saffron", "Birch", "Benzoin", "Geranium"],
      base: ["Deep Oud & Resinous Accords"]
    }
  },
  {
    name: "L'Immensité",
    brand: "Louis Vuitton",
    designer: "Jacques Cavallier-Belletrud",
    niche: "Luxury Niche",
    originalPrice: 300,
    clonePrice: 45,
    cloneName: "Night Out",
    scent: "Ginger, masculine fresh",
    season: "Spring & Fall",
    occasion: "Signature scent",
    savings: 85,
    available: true,
    tags: ["Spring", "Fall", "Fresh", "Ginger"],
    fragranticaUrl: "https://www.fragrantica.com/perfume/Louis-Vuitton/L-Immensite-49751.html",
    notes: {
      top: ["Grapefruit", "Ginger", "Bergamot"],
      heart: ["Water Notes", "Rosemary", "Sage", "Geranium"],
      base: ["Ambroxan", "Amber", "Labdanum"]
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
    fragranticaUrl: "https://www.fragrantica.com/perfume/Initio-Parfums-Prives/Side-Effect-52211.html",
    notes: {
      top: ["Rum", "Cinnamon", "Vanilla"],
      heart: ["Tobacco", "Sandalwood"],
      base: ["Saffron", "Musk"]
    }
  },
  {
    name: "Musk Therapy",
    brand: "Initio",
    designer: "Alexandra Carlin",
    niche: "Niche Parfums",
    originalPrice: 270,
    clonePrice: 45,
    cloneName: "Musk Bliss",
    scent: "Clean musk, citrus",
    season: "Spring & Fall",
    occasion: "Daily, office safe",
    savings: 83,
    available: true,
    tags: ["Spring", "Fall", "Citrus", "Musky"],
    fragranticaUrl: "https://www.fragrantica.com/perfume/Initio-Parfums-Prives/Musk-Therapy-67314.html",
    notes: {
      top: ["Bergamot", "Mandarin"],
      heart: ["White Magnolia", "Black Currant"],
      base: ["White Sandalwood", "Pink Musk", "White Musk"]
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
    name: "Bianco Latte",
    brand: "Giardini Di Toscana",
    designer: "Silvia Monti",
    niche: "Italian Niche",
    originalPrice: 125,
    clonePrice: 45,
    cloneName: "Vanilla Dream",
    scent: "Milky, vanilla sweet",
    season: "Winter",
    occasion: "Cozy, romantic",
    savings: 64,
    available: true,
    tags: ["Winter", "Sweet", "Vanilla"],
    fragranticaUrl: "https://www.fragrantica.com/perfume/Giardini-Di-Toscana/Bianco-Latte-64757.html",
    notes: {
      top: ["Caramel"],
      heart: ["Coumarin", "Honey"],
      base: ["Vanilla", "White Musk"]
    }
  },
  {
    name: "French Riviera",
    brand: "Mancera",
    designer: "Pierre Montale",
    niche: "Middle Eastern Inspired",
    originalPrice: 145,
    clonePrice: 45,
    cloneName: "Billionaires Club",
    scent: "Fresh, marine citrus",
    season: "Summer",
    occasion: "Vacation, beach",
    savings: 69,
    available: true,
    tags: ["Summer", "Fresh", "Marine", "Citrus"],
    fragranticaUrl: "https://www.fragrantica.com/perfume/Mancera/French-Riviera-74636.html",
    notes: {
      top: ["Orange", "Lemon", "Tangerine", "Ginger", "Pepper"],
      heart: ["Sea Notes", "Tiare Flower", "Pine Tree", "Mimosa", "Vetiver"],
      base: ["Sea Salt", "White Musk", "Amber"]
    }
  },
  {
    name: "Grand Soir",
    brand: "MFK",
    designer: "Francis Kurkdjian",
    niche: "French Haute Parfumerie",
    originalPrice: 185,
    clonePrice: 45,
    cloneName: "Halo",
    scent: "Amber, vanilla, warm",
    season: "Winter",
    occasion: "Date nights, luxury",
    savings: 76,
    available: true,
    tags: ["Winter", "Amber", "Vanilla"],
    fragranticaUrl: "https://www.fragrantica.com/perfume/Maison-Francis-Kurkdjian/Grand-Soir-40816.html",
    notes: {
      top: ["Spanish Labdanum", "Orange"],
      heart: ["Lavender", "Siam Benzoin"],
      base: ["Amber", "Vanilla", "Tonka Bean", "Musk", "Cedar"]
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
    fragranticaUrl: "https://www.fragrantica.com/perfume/Goldfield-Banks-Australia/Pacific-Rock-Moss-47466.html",
    notes: {
      top: ["Italian lemon", "Sage", "Geranium"],
      heart: ["Virginia cedar"],
      base: ["Marine", "Fresh feel"]
    }
  },
  {
    name: "Tales of Amber",
    brand: "Goldfield & Banks",
    designer: "Saskia Wilson-Brown",
    niche: "Australian Niche",
    originalPrice: 167,
    clonePrice: 0,
    cloneName: "",
    scent: "Amber, woody",
    season: "Fall",
    occasion: "Fall evenings",
    savings: 0,
    available: false,
    tags: ["Fall", "Amber", "Woody"],
    fragranticaUrl: "https://www.fragrantica.com/perfume/Goldfield-Banks-Australia/Tales-of-Amber-111767.html",
    notes: {
      top: ["Moss", "Orange Blossom"],
      heart: ["Orris", "Cinnamon", "Musk", "Labdanum"],
      base: ["Agarwood (Oud)", "Ambergris", "Vanillin", "Labdanum"]
    }
  },
  {
    name: "Pacific Rock Flower",
    brand: "Goldfield & Banks",
    designer: "Saskia Wilson-Brown",
    niche: "Australian Niche",
    originalPrice: 167,
    clonePrice: 0,
    cloneName: "",
    scent: "Sweet floral",
    season: "Spring",
    occasion: "Floral fans",
    savings: 0,
    available: false,
    tags: ["Spring", "Sweet", "Floral"],
    fragranticaUrl: "https://www.fragrantica.com/perfume/Goldfield-Banks-Australia/Pacific-Rock-Flower-105847.html",
    notes: {
      top: ["Sea Salt", "Lemon", "Eucalyptus", "Tea"],
      heart: ["Peony", "Mimosa", "Tuberose"],
      base: ["Sandalwood", "Cedar", "Patchouli", "Moss"]
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
    fragranticaUrl: "https://www.fragrantica.com/perfume/Goldfield-Banks-Australia/Ingenious-Ginger-69992.html",
    notes: {
      top: ["Ginger flower", "Lemon", "Bergamot"],
      heart: ["Mandarin", "Magnolia", "Jasmine", "Rose"],
      base: ["Vanilla", "Amber", "Sandalwood", "Cashmeran", "Musk", "Patchouli"]
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
    fragranticaUrl: "https://www.fragrantica.com/perfume/Room-1015/Wavechild-61835.html",
    notes: {
      top: ["Mandarin Orange", "Orange", "Lemon"],
      heart: ["Watermelon", "Coconut"],
      base: ["Ambergris", "Amberwood", "Cocoa"]
    }
  },
  {
    name: "Strawberry Pool",
    brand: "Salum Parfums",
    designer: "Salum Parfums",
    niche: "Niche Parfums",
    originalPrice: 145,
    clonePrice: 145,
    cloneName: "No dupe available",
    scent: "Fruity, aquatic, sweet",
    season: "Summer",
    occasion: "Laid-back, refreshing",
    savings: 0,
    available: false,
    tags: ["Summer", "Fruity", "Aquatic", "Sweet"],
    fragranticaUrl: "https://www.fragrantica.com/perfume/Salum-Parfums/Strawberry-Pool-90760.html",
    notes: {
      top: ["Wild Strawberry", "Strawberry", "Ginger", "Pink Pepper"],
      heart: ["Water Notes"],
      base: ["Suntan Lotion", "Ambergris", "Ambrette"]
    }
  },
  {
    name: "Pink Boa",
    brand: "Stéphane Humbert Lucas 777",
    designer: "Stéphane Humbert Lucas",
    niche: "Luxury Niche",
    originalPrice: 215,
    clonePrice: 37,
    cloneName: "Vulcan Baie",
    scent: "Fruity, playful, powdery",
    season: "Spring & Summer",
    occasion: "Fun, youthful",
    savings: 83,
    available: true,
    tags: ["Spring", "Summer", "Fruity", "Playful", "Powdery"],
    fragranticaUrl: "https://www.fragrantica.com/perfume/Stephane-Humbert-Lucas-777/Pink-Boa-75021.html",
    notes: {
      top: ["Black Currant", "Rosemary", "Blackberry", "Bergamot"],
      heart: ["Raspberry", "Vodka", "Basil", "Lily of the Valley"],
      base: ["Strawberry", "Musk", "Peach", "Sandalwood", "Amber", "Patchouli", "Incense"]
    }
  },
  {
    name: "Venom Incarnat",
    brand: "Stéphane Humbert Lucas 777",
    designer: "Stéphane Humbert Lucas",
    niche: "Luxury Niche",
    originalPrice: 215,
    clonePrice: 45,
    cloneName: "Toxin",
    scent: "Fruity, gourmand, leathery",
    season: "Autumn & Winter",
    occasion: "Seductive, glamour",
    savings: 79,
    available: true,
    tags: ["Autumn", "Winter", "Fruity", "Gourmand", "Leathery"],
    fragranticaUrl: "https://www.fragrantica.com/perfume/Stephane-Humbert-Lucas-777/Venom-Incarnat-72387.html",
    notes: {
      top: ["Wild Strawberry", "Strawberry", "Caramel", "Blackberry"],
      heart: ["Raspberry", "Virginian Cedar", "Cinnamon"],
      base: ["Russian Leather", "Caramel", "Vanilla", "Tonka Bean", "Patchouli", "Balsam Fir"]
    }
  },
  {
    name: "Sunset Hour",
    brand: "Goldfield & Banks",
    designer: "Goldfield & Banks",
    niche: "Yes",
    originalPrice: 167,
    clonePrice: 0,
    cloneName: "No dupe available",
    scent: "Fruity, warm, gourmand",
    season: "Summer",
    occasion: "Romantic, beachy vibes",
    savings: 0,
    available: false,
    tags: ["Summer", "Fruity", "Warm", "Gourmand", "Afternoon", "Evening", "Romantic", "Beachy"],
    fragranticaUrl: "https://www.fragrantica.com/perfume/Goldfield-Banks-Australia/Sunset-Hour-70950.html",
    notes: {
      top: ["Desert Peach (Quandong)", "Raspberry", "Mandarin Orange"],
      heart: ["Jasmine Sambac", "Ginger", "Pink Pepper", "Coconut Cream"],
      base: ["Sandalwood", "Cashmere Wood", "Benzoin"]
    }
  }
];

const Index = () => {
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
          
          <Button 
            variant="luxury" 
            size="lg" 
            onClick={scrollToCollection}
            className="text-lg px-8 py-4 h-auto bg-accent/20 hover:bg-accent/30 text-accent border-accent/30"
          >
            Browse the Collection
          </Button>
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

      {/* Featured card moved into the collection grid below */}
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
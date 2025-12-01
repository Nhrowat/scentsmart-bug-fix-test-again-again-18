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

const fragrances: Fragrance[] = [
  {
    name: "Queening",
    brand: "Mind Games",
    designer: "",
    niche: "Mind Games",
    originalPrice: 270,
    clonePrice: 45,
    cloneName: "Rumor Has It",
    scent: "Mysterious, bold",
    season: "Fall",
    occasion: "Unique, signature",
    savings: 83,
    available: true,
    tags: ["Fall", "Mysterious", "Bold"],
    fragranticaUrl: "https://www.fragrantica.com/perfume/Mind-Games/Queening-108667.html",
    notes: {
      top: ["Cotton Flower", "Apple", "Cypress"],
      heart: ["Orris Root", "Rum", "Saffron"],
      base: ["Vanilla", "Coconut", "Musk"]
    }
  },
  {
    name: "Prodigy",
    brand: "Mind Games",
    designer: "",
    niche: "Mind Games",
    originalPrice: 270,
    clonePrice: 45,
    cloneName: "Paragon",
    scent: "Woody, refined",
    season: "Winter",
    occasion: "Formal or introspective",
    savings: 83,
    available: true,
    tags: ["Winter", "Woody", "Refined"],
    fragranticaUrl: "https://www.fragrantica.com/perfume/Mind-Games/Prodigy-108669.html",
    notes: {
      top: ["Rose", "Bergamot", "Cardamom"],
      heart: ["Longoza", "Patchouli"],
      base: ["Vanilla", "Blonde Woods", "Sandalwood"]
    }
  },
  {
    name: "Météore",
    brand: "Louis Vuitton",
    designer: "",
    niche: "Louis Vuitton",
    originalPrice: 300,
    clonePrice: 45,
    cloneName: "Astro",
    scent: "Fresh, zesty",
    season: "Spring & Summer",
    occasion: "Daily, clean",
    savings: 85,
    available: true,
    tags: ["Spring", "Summer", "Fresh", "Citrus"],
    fragranticaUrl: "https://www.fragrantica.com/perfume/Louis-Vuitton/Meteore-108687.html",
    notes: {
      top: ["Mandarin Orange", "Sicilian Orange", "Calabrian Bergamot"],
      heart: ["Pink Pepper", "Tunisian Neroli", "Indonesian Nutmeg", "Pepper", "Guatemalan Cardamom"],
      base: ["Java Vetiver Oil"]
    }
  },
  {
    name: "Ingenious Ginger",
    brand: "Goldfield & Banks",
    designer: "",
    niche: "Goldfield & Banks",
    originalPrice: 167,
    clonePrice: 0,
    cloneName: "No dupe available",
    scent: "Ginger, fresh",
    season: "Spring",
    occasion: "Light and playful",
    savings: 0,
    available: false,
    tags: ["Spring", "Fresh", "Ginger", "Floral"],
    fragranticaUrl: "https://www.fragrantica.com/perfume/Goldfield-Banks-Australia/Ingenious-Ginger-108669.html",
    notes: {
      top: ["Ginger Flower", "Lemon", "Bergamot"],
      heart: ["Mandarin", "Magnolia", "Jasmine", "Rose"],
      base: ["Vanilla", "Amber", "Sandalwood", "Cashmeran", "Musk", "Patchouli"]
    }
  },
  {
    name: "Musk Therapy",
    brand: "Initio",
    designer: "",
    niche: "Initio",
    originalPrice: 270,
    clonePrice: 27,
    cloneName: "Glorious Oud Royal Blanc",
    scent: "Clean musk, citrus",
    season: "Spring & Fall",
    occasion: "Daily, office safe",
    savings: 90,
    available: true,
    tags: ["Spring", "Fall", "Musk", "Clean"],
    fragranticaUrl: "https://www.fragrantica.com/perfume/Initio-Parfums-Prives/Musk-Therapy-108665.html",
    notes: {
      top: ["Bergamot", "Mandarin"],
      heart: ["White Magnolia", "Black Currant"],
      base: ["White Sandalwood", "Pink Musk", "White Musk"]
    }
  },
  {
    name: "Pacific Rock Moss",
    brand: "Goldfield & Banks",
    designer: "",
    niche: "Goldfield & Banks",
    originalPrice: 167,
    clonePrice: 25,
    cloneName: "Sama",
    scent: "Aquatic, salty fresh",
    season: "Summer",
    occasion: "Clean daily wear",
    savings: 85,
    available: true,
    tags: ["Summer", "Aquatic", "Fresh"],
    fragranticaUrl: "https://www.fragrantica.com/perfume/Goldfield-Banks-Australia/Pacific-Rock-Moss-108664.html",
    notes: {
      top: ["Italian Lemon", "Sage", "Geranium"],
      heart: ["Virginia Cedar"],
      base: ["Marine", "Fresh feel"]
    }
  },
  {
    name: "724",
    brand: "Maison Francis Kurkdjian",
    designer: "",
    niche: "Maison Francis Kurkdjian",
    originalPrice: 200,
    clonePrice: 0,
    cloneName: "No dupe available",
    scent: "Fresh, floral",
    season: "Spring & Summer",
    occasion: "Daily, elegant",
    savings: 0,
    available: false,
    tags: ["Spring", "Summer", "Fresh", "Floral"],
    fragranticaUrl: "https://www.fragrantica.com/perfume/Maison-Francis-Kurkdjian/724-75754.html",
    notes: {
      top: ["Aldehydes", "Calabrian Bergamot"],
      heart: ["Egyptian Jasmine", "Mock Orange", "Sweet Pea"],
      base: ["White Musk", "Sandalwood"]
    }
  },
  {
    name: "Afternoon Swim",
    brand: "Louis Vuitton",
    designer: "",
    niche: "Louis Vuitton",
    originalPrice: 300,
    clonePrice: 42.5,
    cloneName: "Adonis Icarus",
    scent: "Citrus, aquatic",
    season: "Summer",
    occasion: "Beach, vacation",
    savings: 86,
    available: true,
    tags: ["Summer", "Citrus", "Aquatic"],
    fragranticaUrl: "https://www.fragrantica.com/perfume/Louis-Vuitton/Afternoon-Swim-108686.html",
    notes: {
      top: ["Orange", "Bergamot", "Mandarin Orange"],
      heart: ["Orange", "Bergamot", "Mandarin Orange"],
      base: ["Orange", "Bergamot", "Mandarin Orange"]
    }
  },
  {
    name: "Babycat",
    brand: "Yves Saint Laurent",
    designer: "Yves Saint Laurent",
    niche: "",
    originalPrice: 225,
    clonePrice: 0,
    cloneName: "No dupe available",
    scent: "Spicy, warm",
    season: "Fall & Winter",
    occasion: "Evening, special",
    savings: 0,
    available: false,
    tags: ["Fall", "Winter", "Spicy", "Warm"],
    fragranticaUrl: "https://www.fragrantica.com/perfume/Yves-Saint-Laurent/Babycat-108659.html",
    notes: {
      top: ["Pink Pepper", "Black Pepper"],
      heart: ["Olibanum", "Saffron"],
      base: ["Vanilla", "Suede", "Cedarwood", "Bourbon Vanilla"]
    }
  },
  {
    name: "Blanche Absolue",
    brand: "Byredo",
    designer: "",
    niche: "Byredo",
    originalPrice: 230,
    clonePrice: 0,
    cloneName: "No dupe available",
    scent: "Clean, floral",
    season: "Spring",
    occasion: "Daily, minimalist",
    savings: 0,
    available: false,
    tags: ["Spring", "Clean", "Floral"],
    fragranticaUrl: "https://www.fragrantica.com/perfume/Byredo/Blanche-Absolue-108662.html",
    notes: {
      top: ["Aldehydes", "Pink Pepper", "Violet"],
      heart: ["Neroli", "Peony", "Orange Blossom"],
      base: ["Musk", "Sandalwood"]
    }
  },
  {
    name: "Herbes Troublantes",
    brand: "Guerlain",
    designer: "Guerlain",
    niche: "",
    originalPrice: 330,
    clonePrice: 0,
    cloneName: "No dupe available",
    scent: "Fresh, musky",
    season: "Spring & Summer",
    occasion: "Daily, sophisticated",
    savings: 0,
    available: false,
    tags: ["Spring", "Summer", "Fresh", "Musk"],
    fragranticaUrl: "https://www.fragrantica.com/perfume/Guerlain/Herbes-Troublantes-108671.html",
    notes: {
      top: ["Bergamot"],
      heart: ["Orange Blossom"],
      base: ["White Musk"]
    }
  },
  {
    name: "Imagination",
    brand: "Louis Vuitton",
    designer: "",
    niche: "Louis Vuitton",
    originalPrice: 300,
    clonePrice: 45,
    cloneName: "Breezy",
    scent: "Citrus, spicy",
    season: "Fall",
    occasion: "Daily, sophisticated",
    savings: 85,
    available: true,
    tags: ["Fall", "Citrus", "Spicy"],
    fragranticaUrl: "https://www.fragrantica.com/perfume/Louis-Vuitton/Imagination-108672.html",
    notes: {
      top: ["Citron", "Calabrian Bergamot", "Sicilian Orange"],
      heart: ["Tunisian Neroli", "Nigerian Ginger", "Ceylon Cinnamon"],
      base: ["Chinese Black Tea", "Ambroxan", "Guaiac Wood", "Olibanum"]
    }
  },
  {
    name: "L'Immensité",
    brand: "Louis Vuitton",
    designer: "",
    niche: "Louis Vuitton",
    originalPrice: 300,
    clonePrice: 45,
    cloneName: "Night Out",
    scent: "Fresh, aromatic",
    season: "Spring & Summer",
    occasion: "Daily, versatile",
    savings: 85,
    available: true,
    tags: ["Spring", "Summer", "Fresh", "Aromatic"],
    fragranticaUrl: "https://www.fragrantica.com/perfume/Louis-Vuitton/L-Immensite-108673.html",
    notes: {
      top: ["Grapefruit", "Ginger", "Bergamot"],
      heart: ["Water Notes", "Rosemary", "Sage", "Geranium"],
      base: ["Ambroxan", "Amber", "Labdanum"]
    }
  },
  {
    name: "Lafayette Street",
    brand: "Bond No. 9",
    designer: "",
    niche: "Bond No. 9",
    originalPrice: 300,
    clonePrice: 0,
    cloneName: "No dupe available",
    scent: "Fruity, woody",
    season: "Fall",
    occasion: "Daily, urban",
    savings: 0,
    available: false,
    tags: ["Fall", "Fruity", "Woody"],
    fragranticaUrl: "https://www.fragrantica.com/perfume/Bond-No-9/Lafayette-Street-108674.html",
    notes: {
      top: ["Bergamot", "Flowers", "Coriander"],
      heart: ["Apple", "Ambroxan", "Vanilla"],
      base: ["Tonka Bean", "Woodsy Notes", "Ambergris"]
    }
  },
  {
    name: "Love O-Matic",
    brand: "Room 1015",
    designer: "",
    niche: "Room 1015",
    originalPrice: 150,
    clonePrice: 0,
    cloneName: "No dupe available",
    scent: "Fruity, playful",
    season: "Spring & Summer",
    occasion: "Fun, youthful",
    savings: 0,
    available: false,
    tags: ["Spring", "Summer", "Fruity", "Playful"],
    fragranticaUrl: "https://www.fragrantica.com/perfume/Room-1015/Love-O-Matic-108668.html",
    notes: {
      top: ["Strawberry", "Blackcurrant", "Lemon"],
      heart: ["Ozonic notes", "Bubble Gum"],
      base: ["Musk", "Ambrette", "Cedar"]
    }
  },
  {
    name: "Moon Tale",
    brand: "Louis Vuitton",
    designer: "",
    niche: "Louis Vuitton",
    originalPrice: 300,
    clonePrice: 0,
    cloneName: "No dupe available",
    scent: "Floral, fruity",
    season: "Spring",
    occasion: "Romantic, evening",
    savings: 0,
    available: false,
    tags: ["Spring", "Floral", "Fruity"],
    fragranticaUrl: "https://www.fragrantica.com/perfume/Louis-Vuitton/Moon-Tale-108675.html",
    notes: {
      top: ["Peony", "Magnolia", "Jasmine Sambac"],
      heart: ["Geranium", "Raspberry"],
      base: ["Musk", "Woods"]
    }
  },
  {
    name: "Ombre Nomade",
    brand: "Louis Vuitton",
    designer: "",
    niche: "Louis Vuitton",
    originalPrice: 300,
    clonePrice: 100,
    cloneName: "Madness Extreme",
    scent: "Oud, smoky",
    season: "Fall & Winter",
    occasion: "Evening, bold",
    savings: 67,
    available: true,
    tags: ["Fall", "Winter", "Oud", "Smoky"],
    fragranticaUrl: "https://www.fragrantica.com/perfume/Louis-Vuitton/Ombre-Nomade-108676.html",
    notes: {
      top: ["Agarwood (Oud)", "Incense", "Rose", "Raspberry"],
      heart: ["Amberwood", "Saffron", "Birch", "Benzoin", "Geranium"],
      base: ["Deep Oud & Resinous Accords"]
    }
  },
  {
    name: "Pacific Chill",
    brand: "Louis Vuitton",
    designer: "",
    niche: "Louis Vuitton",
    originalPrice: 300,
    clonePrice: 40,
    cloneName: "Pacific Aura",
    scent: "Fresh, fruity",
    season: "Spring & Summer",
    occasion: "Beach, vacation",
    savings: 87,
    available: true,
    tags: ["Spring", "Summer", "Fresh", "Fruity"],
    fragranticaUrl: "https://www.fragrantica.com/perfume/Louis-Vuitton/Pacific-Chill-108677.html",
    notes: {
      top: ["Citron", "Mint", "Orange", "Lemon", "Black Currant", "Coriander"],
      heart: ["Apricot", "Basil", "Carrot Seeds", "May Rose"],
      base: ["Fig", "Dates", "Ambrette"]
    }
  },
  {
    name: "Pacific Rock Flower",
    brand: "Goldfield & Banks",
    designer: "",
    niche: "Goldfield & Banks",
    originalPrice: 167,
    clonePrice: 0,
    cloneName: "No dupe available",
    scent: "Marine, floral",
    season: "Summer",
    occasion: "Beach, daily",
    savings: 0,
    available: false,
    tags: ["Summer", "Marine", "Floral"],
    fragranticaUrl: "https://www.fragrantica.com/perfume/Goldfield-Banks-Australia/Pacific-Rock-Flower-108678.html",
    notes: {
      top: ["Sea Salt", "Lemon", "Eucalyptus", "Tea"],
      heart: ["Peony", "Mimosa", "Tuberose"],
      base: ["Sandalwood", "Cedar", "Patchouli", "Moss"]
    }
  },
  {
    name: "Sailing Day",
    brand: "Maison Margiela Replica",
    designer: "Maison Margiela",
    niche: "",
    originalPrice: 145,
    clonePrice: 40,
    cloneName: "Inspired by Sailing Day",
    scent: "Aquatic, fresh",
    season: "Summer",
    occasion: "Daily, nautical",
    savings: 72,
    available: true,
    tags: ["Summer", "Aquatic", "Fresh"],
    fragranticaUrl: "https://www.fragrantica.com/perfume/Maison-Replica/Sailing-Day-108679.html",
    notes: {
      top: ["Sea Notes", "Aldehydes", "Coriander", "Red Pepper"],
      heart: ["Juniper", "Iris", "Rose", "Amyl Salicylate"],
      base: ["Seaweed", "Ambergris", "Cedar", "Amberwood"]
    }
  },
  {
    name: "Side Effect",
    brand: "Initio",
    designer: "",
    niche: "Initio",
    originalPrice: 270,
    clonePrice: 28,
    cloneName: "After Effect",
    scent: "Warm, boozy",
    season: "Fall & Winter",
    occasion: "Evening, cozy",
    savings: 90,
    available: true,
    tags: ["Fall", "Winter", "Warm", "Boozy"],
    fragranticaUrl: "https://www.fragrantica.com/perfume/Initio-Parfums-Prives/Side-Effect-108680.html",
    notes: {
      top: ["Rum", "Cinnamon", "Vanilla"],
      heart: ["Tobacco", "Sandalwood"],
      base: ["Saffron", "Musk"]
    }
  },
  {
    name: "Spiritueuse Double Vanille",
    brand: "Guerlain",
    designer: "Guerlain",
    niche: "",
    originalPrice: 330,
    clonePrice: 60,
    cloneName: "Vanille Dorée",
    scent: "Vanilla, warm",
    season: "Fall & Winter",
    occasion: "Evening, gourmand",
    savings: 82,
    available: true,
    tags: ["Fall", "Winter", "Vanilla", "Gourmand"],
    fragranticaUrl: "https://www.fragrantica.com/perfume/Guerlain/Spiritueuse-Double-Vanille-108681.html",
    notes: {
      top: ["Pink Pepper", "Bergamot", "Incense"],
      heart: ["Vanilla", "Cedar", "Ylang-Ylang"],
      base: ["Benzoin", "Tonka Bean", "Amber"]
    }
  },
  {
    name: "Symphony",
    brand: "Louis Vuitton",
    designer: "",
    niche: "Louis Vuitton",
    originalPrice: 510,
    clonePrice: 70,
    cloneName: "Island Dreams",
    scent: "Citrus, fresh",
    season: "Spring & Summer",
    occasion: "Daily, uplifting",
    savings: 86,
    available: true,
    tags: ["Spring", "Summer", "Citrus", "Fresh"],
    fragranticaUrl: "https://www.fragrantica.com/perfume/Louis-Vuitton/Symphony-108682.html",
    notes: {
      top: ["Grapefruit", "Bergamot", "Ginger"],
      heart: [],
      base: []
    }
  },
  {
    name: "Aqua Celestia Cologne Forte",
    brand: "Maison Francis Kurkdjian",
    designer: "",
    niche: "Maison Francis Kurkdjian",
    originalPrice: 200,
    clonePrice: 0,
    cloneName: "No dupe available",
    scent: "Fresh, aquatic",
    season: "Spring & Summer",
    occasion: "Daily, clean",
    savings: 0,
    available: false,
    tags: ["Spring", "Summer", "Fresh", "Aquatic"],
    fragranticaUrl: "https://www.fragrantica.com/perfume/Maison-Francis-Kurkdjian/Aqua-Celestia-Cologne-Forte-108683.html"
  },
  {
    name: "Tuxedo Sharp Patchouli",
    brand: "Yves Saint Laurent",
    designer: "Yves Saint Laurent",
    niche: "",
    originalPrice: 270,
    clonePrice: 0,
    cloneName: "No dupe available",
    scent: "Woody, earthy",
    season: "Fall & Winter",
    occasion: "Evening, formal",
    savings: 0,
    available: false,
    tags: ["Fall", "Winter", "Woody", "Patchouli"],
    fragranticaUrl: "https://www.fragrantica.com/perfume/Yves-Saint-Laurent/Tuxedo-Sharp-Patchouli-108684.html"
  },
  {
    name: "Vanilla on the Beach",
    brand: "Gulf Orchid",
    designer: "",
    niche: "Gulf Orchid",
    originalPrice: 300,
    clonePrice: 0,
    cloneName: "No dupe available",
    scent: "Vanilla, tropical",
    season: "Summer",
    occasion: "Beach, vacation",
    savings: 0,
    available: false,
    tags: ["Summer", "Vanilla", "Tropical"],
    fragranticaUrl: "https://www.fragrantica.com/perfume/Gulf-Orchid/Vanilla-on-the-Beach-108685.html"
  },
  {
    name: "Winter Palace",
    brand: "Memo Paris",
    designer: "",
    niche: "Memo Paris",
    originalPrice: 350,
    clonePrice: 0,
    cloneName: "No dupe available",
    scent: "Warm, spicy",
    season: "Winter",
    occasion: "Evening, luxe",
    savings: 0,
    available: false,
    tags: ["Winter", "Warm", "Spicy"],
    fragranticaUrl: "https://www.fragrantica.com/perfume/Memo-Paris/Winter-Palace-108686.html"
  },
  {
    name: "Caban Fascinating Tonka",
    brand: "Yves Saint Laurent",
    designer: "Yves Saint Laurent",
    niche: "",
    originalPrice: 250,
    clonePrice: 0,
    cloneName: "No dupe available",
    scent: "Tonka, sweet",
    season: "Fall & Winter",
    occasion: "Evening, cozy",
    savings: 0,
    available: false,
    tags: ["Fall", "Winter", "Tonka", "Sweet"],
    fragranticaUrl: "https://www.fragrantica.com/perfume/Yves-Saint-Laurent/Caban-Fascinating-Tonka-108687.html"
  },
  {
    name: "Can't Get Enough",
    brand: "Initio Parfums Prives",
    designer: "",
    niche: "Initio",
    originalPrice: 320,
    clonePrice: 0,
    cloneName: "No dupe available",
    scent: "Rich, addictive",
    season: "Fall & Winter",
    occasion: "Evening, seductive",
    savings: 0,
    available: false,
    tags: ["Fall", "Winter", "Rich", "Addictive"],
    fragranticaUrl: "https://www.fragrantica.com/perfume/Initio-Parfums-Prives/Cant-Get-Enough-108688.html"
  },
  {
    name: "Sedley",
    brand: "Parfums de Marly",
    designer: "",
    niche: "Parfums de Marly",
    originalPrice: 290,
    clonePrice: 0,
    cloneName: "No dupe available",
    scent: "Fresh, aquatic",
    season: "Spring & Summer",
    occasion: "Daily, sophisticated",
    savings: 0,
    available: false,
    tags: ["Spring", "Summer", "Fresh", "Aquatic"],
    fragranticaUrl: "https://www.fragrantica.com/perfume/Parfums-de-Marly/Sedley-84110.html"
  },
  {
    name: "Absolute Aphrodisiac",
    brand: "Initio Parfums Prives",
    designer: "",
    niche: "Initio",
    originalPrice: 350,
    clonePrice: 0,
    cloneName: "No dupe available",
    scent: "Sensual, intense",
    season: "Fall & Winter",
    occasion: "Evening, romantic",
    savings: 0,
    available: false,
    tags: ["Fall", "Winter", "Sensual", "Intense"],
    fragranticaUrl: "https://www.fragrantica.com/perfume/Initio-Parfums-Prives/Absolute-Aphrodisiac-108689.html"
  }
];

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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, X, Trash2, HardDrive, Sparkles, TrendingDown } from "lucide-react";
import { useGlobalImageStorage } from "@/hooks/useGlobalImageStorage";
import { toast } from "sonner";
import { Separator } from "@/components/ui/separator";

export interface FragranceFilters {
  seasons: string[];
  scentProfiles: string[];
  priceRange: [number, number];
  dupeAvailability: 'all' | 'originals' | 'clones' | 'unreleased';
  sortBy: string;
  searchQuery: string;
}

interface FragranceFiltersProps {
  filters: FragranceFilters;
  onFiltersChange: (filters: FragranceFilters) => void;
  isOpen: boolean;
  onToggle: () => void;
}

const seasons = [
  { name: 'Spring', emoji: '🌸' },
  { name: 'Summer', emoji: '☀️' },
  { name: 'Fall', emoji: '🍂' },
  { name: 'Winter', emoji: '❄️' }
];

const scentProfiles = [
  { name: 'Fresh', emoji: '🌿' },
  { name: 'Sweet', emoji: '🍬' },
  { name: 'Woody', emoji: '🌲' },
  { name: 'Amber', emoji: '🟠' },
  { name: 'Citrus', emoji: '🍊' },
  { name: 'Oud', emoji: '🪵' },
  { name: 'Aquatic', emoji: '🌊' },
  { name: 'Spicy', emoji: '🌶️' },
  { name: 'Vanilla', emoji: '🍦' },
  { name: 'Musky', emoji: '💨' },
  { name: 'Floral', emoji: '🌺' },
  { name: 'Smoky', emoji: '💨' },
  { name: 'Fruity', emoji: '🍓' },
  { name: 'Ginger', emoji: '🫚' },
  { name: 'Marine', emoji: '⚓' },
  { name: 'Bold', emoji: '⚡' }
];

const sortOptions = [
  { value: 'price-low', label: 'Price: Low to High', icon: '💰' },
  { value: 'price-high', label: 'Price: High to Low', icon: '💎' },
  { value: 'savings-high', label: 'Best Savings', icon: '🎯' },
  { value: 'name', label: 'Alphabetical', icon: '🔤' }
];

const FragranceFilters = ({ filters, onFiltersChange, isOpen, onToggle }: FragranceFiltersProps) => {
  const { clearAllImages, getStorageInfo, forceSync, isOnline, isSyncing } = useGlobalImageStorage();
  const storageInfo = getStorageInfo();
  
  const updateFilter = (key: keyof FragranceFilters, value: any) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  const handleClearAllImages = () => {
    clearAllImages();
    toast.success(`Cleared all ${storageInfo.imageCount} images`);
  };

  const handleForceSync = async () => {
    try {
      await forceSync();
      toast.success("Images synced to cloud successfully!");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to sync images");
    }
  };

  const toggleSeason = (season: string) => {
    const newSeasons = filters.seasons.includes(season)
      ? filters.seasons.filter(s => s !== season)
      : [...filters.seasons, season];
    updateFilter('seasons', newSeasons);
  };

  const toggleScentProfile = (profile: string) => {
    const newProfiles = filters.scentProfiles.includes(profile)
      ? filters.scentProfiles.filter(p => p !== profile)
      : [...filters.scentProfiles, profile];
    updateFilter('scentProfiles', newProfiles);
  };

  const clearAllFilters = () => {
    onFiltersChange({
      seasons: [],
      scentProfiles: [],
      priceRange: [25, 600],
      dupeAvailability: 'all',
      sortBy: 'name',
      searchQuery: ''
    });
  };

  const activeFiltersCount = 
    filters.seasons.length + 
    filters.scentProfiles.length + 
    (filters.dupeAvailability !== 'all' ? 1 : 0) +
    (filters.searchQuery.length > 0 ? 1 : 0) +
    (filters.priceRange[0] !== 25 || filters.priceRange[1] !== 600 ? 1 : 0);

  return (
    <div className="space-y-6">
      {/* Mobile Filter Toggle */}
      <div className="flex items-center justify-between gap-3 md:hidden">
        <Button
          variant="outline"
          onClick={onToggle}
          className="flex items-center gap-2 flex-1 justify-center hover:bg-primary/10 hover:border-primary transition-all"
        >
          <Filter className="h-4 w-4" />
          <span className="font-medium">Filters</span>
          {activeFiltersCount > 0 && (
            <Badge variant="default" className="ml-1 h-5 w-5 rounded-full p-0 flex items-center justify-center">
              {activeFiltersCount}
            </Badge>
          )}
        </Button>
        <Select value={filters.sortBy} onValueChange={(value) => updateFilter('sortBy', value)}>
          <SelectTrigger className="w-[180px] hover:border-primary transition-colors">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent className="bg-popover/95 backdrop-blur-lg">
            {sortOptions.map(option => (
              <SelectItem key={option.value} value={option.value}>
                <span className="flex items-center gap-2">
                  <span>{option.icon}</span>
                  <span>{option.label}</span>
                </span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Enhanced Search Bar */}
      <div className="relative group">
        <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
        <Input
          placeholder="Search fragrances, brands, designers, or niches..."
          value={filters.searchQuery}
          onChange={(e) => updateFilter('searchQuery', e.target.value)}
          className="pl-10 pr-10 h-12 text-base border-2 hover:border-primary/50 focus:border-primary transition-all"
        />
        {filters.searchQuery && (
          <button
            onClick={() => updateFilter('searchQuery', '')}
            className="absolute right-3 top-3 h-6 w-6 flex items-center justify-center rounded-full hover:bg-muted transition-colors"
          >
            <X className="h-4 w-4 text-muted-foreground" />
          </button>
        )}
      </div>

      {/* Enhanced Filter Panel */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:block space-y-4`}>
        <Card className="bg-gradient-card border-border/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Refine Your Search
                </span>
                {activeFiltersCount > 0 && (
                  <Badge variant="default" className="ml-2 animate-pulse">
                    {activeFiltersCount} active
                  </Badge>
                )}
              </CardTitle>
              {activeFiltersCount > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearAllFilters}
                  className="text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
                >
                  <X className="h-4 w-4 mr-1" />
                  Reset
                </Button>
              )}
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Enhanced Sort - Desktop Only */}
            <div className="hidden md:block">
              <Label className="text-sm font-semibold text-foreground flex items-center gap-2">
                <TrendingDown className="h-4 w-4" />
                Sort Options
              </Label>
              <Select value={filters.sortBy} onValueChange={(value) => updateFilter('sortBy', value)}>
                <SelectTrigger className="w-full mt-2 h-11 hover:border-primary transition-colors">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent className="bg-popover/95 backdrop-blur-lg">
                  {sortOptions.map(option => (
                    <SelectItem key={option.value} value={option.value} className="cursor-pointer">
                      <span className="flex items-center gap-2">
                        <span>{option.icon}</span>
                        <span>{option.label}</span>
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <Separator className="my-2" />

            {/* Enhanced Season Filters */}
            <div>
              <Label className="text-sm font-semibold text-foreground mb-3 block">
                🗓️ Season
                {filters.seasons.length > 0 && (
                  <span className="ml-2 text-xs text-muted-foreground">
                    ({filters.seasons.length} selected)
                  </span>
                )}
              </Label>
              <div className="grid grid-cols-2 gap-2 mt-3">
                {seasons.map(season => (
                  <label
                    key={season.name}
                    htmlFor={`season-${season.name}`}
                    className={`flex items-center space-x-2 p-3 rounded-lg border-2 cursor-pointer transition-all hover:scale-105 ${
                      filters.seasons.includes(season.name)
                        ? 'border-primary bg-primary/10 shadow-sm'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <Checkbox
                      id={`season-${season.name}`}
                      checked={filters.seasons.includes(season.name)}
                      onCheckedChange={() => toggleSeason(season.name)}
                    />
                    <span className="text-lg">{season.emoji}</span>
                    <span className="text-sm font-medium flex-1">{season.name}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <Separator className="my-2" />

            {/* Enhanced Scent Profile Filters */}
            <div>
              <Label className="text-sm font-semibold text-foreground mb-3 block">
                👃 Scent Profile
                {filters.scentProfiles.length > 0 && (
                  <span className="ml-2 text-xs text-muted-foreground">
                    ({filters.scentProfiles.length} selected)
                  </span>
                )}
              </Label>
              <div className="grid grid-cols-2 gap-2 mt-3 max-h-64 overflow-y-auto pr-2 custom-scrollbar">
                {scentProfiles.map(profile => (
                  <label
                    key={profile.name}
                    htmlFor={`scent-${profile.name}`}
                    className={`flex items-center space-x-2 p-2.5 rounded-lg border-2 cursor-pointer transition-all hover:scale-105 ${
                      filters.scentProfiles.includes(profile.name)
                        ? 'border-accent bg-accent/10 shadow-sm'
                        : 'border-border hover:border-accent/50'
                    }`}
                  >
                    <Checkbox
                      id={`scent-${profile.name}`}
                      checked={filters.scentProfiles.includes(profile.name)}
                      onCheckedChange={() => toggleScentProfile(profile.name)}
                    />
                    <span className="text-base">{profile.emoji}</span>
                    <span className="text-sm font-medium flex-1">{profile.name}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <Separator className="my-2" />

            {/* Enhanced Price Range */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <Label className="text-sm font-semibold text-foreground flex items-center gap-2">
                  💎 Price Range
                </Label>
                <Badge variant="outline" className="text-sm font-bold">
                  €{filters.priceRange[0]} - €{filters.priceRange[1]}
                </Badge>
              </div>
              <div className="px-3 py-4 bg-muted/30 rounded-lg">
                <Slider
                  value={filters.priceRange}
                  onValueChange={(value) => updateFilter('priceRange', value)}
                  max={600}
                  min={25}
                  step={5}
                  className="w-full"
                />
                <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                  <span>€25</span>
                  <span>€600</span>
                </div>
              </div>
            </div>
            
            <Separator className="my-2" />

            {/* Enhanced Availability Filter */}
            <div>
              <Label className="text-sm font-semibold text-foreground flex items-center gap-2 mb-2">
                🎯 Availability
              </Label>
              <Select
                value={filters.dupeAvailability}
                onValueChange={(value) => updateFilter('dupeAvailability', value)}
              >
                <SelectTrigger className="w-full mt-2 h-11 hover:border-primary transition-colors">
                  <SelectValue placeholder="Filter by availability" />
                </SelectTrigger>
                <SelectContent className="bg-popover/95 backdrop-blur-lg">
                  <SelectItem value="all" className="cursor-pointer">
                    <span className="flex items-center gap-2">
                      <span>🌟</span>
                      <span>Show All Fragrances</span>
                    </span>
                  </SelectItem>
                  <SelectItem value="originals" className="cursor-pointer">
                    <span className="flex items-center gap-2">
                      <span>💎</span>
                      <span>Original Luxury Only</span>
                    </span>
                  </SelectItem>
                  <SelectItem value="clones" className="cursor-pointer">
                    <span className="flex items-center gap-2">
                      <span>🎯</span>
                      <span>Clone Alternatives</span>
                    </span>
                  </SelectItem>
                  <SelectItem value="unreleased" className="cursor-pointer">
                    <span className="flex items-center gap-2">
                      <span>🔮</span>
                      <span>Unreleased / Coming Soon</span>
                    </span>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Enhanced Image Storage Management */}
        <Card className="bg-gradient-card border-border/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-sm flex items-center gap-2">
              <HardDrive className="h-4 w-4" />
              Global Image Storage
              <div className="flex items-center gap-1">
                {isOnline ? (
                  <div className="w-2 h-2 bg-success rounded-full" title="Online" />
                ) : (
                  <div className="w-2 h-2 bg-destructive rounded-full" title="Offline" />
                )}
                {isSyncing && (
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse" title="Syncing..." />
                )}
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Total Images:</span>
                <span>{storageInfo.imageCount}</span>
              </div>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Synced to Cloud:</span>
                <span className="text-success">{storageInfo.syncedCount}</span>
              </div>
              {storageInfo.unsyncedCount > 0 && (
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Pending Sync:</span>
                  <span className="text-accent">{storageInfo.unsyncedCount}</span>
                </div>
              )}
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Storage Used:</span>
                <span>{storageInfo.storageSize}KB / {storageInfo.maxStorageKB}KB</span>
              </div>
            </div>
            
            <div className="space-y-2">
              {storageInfo.unsyncedCount > 0 && isOnline && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleForceSync}
                  disabled={isSyncing}
                  className="w-full text-xs"
                >
                  {isSyncing ? 'Syncing...' : 'Sync to Cloud'}
                </Button>
              )}
              
              {storageInfo.imageCount > 0 && (
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={handleClearAllImages}
                  className="w-full text-xs"
                >
                  <Trash2 className="h-3 w-3 mr-2" />
                  Clear All Images
                </Button>
              )}
            </div>
            
            <p className="text-xs text-muted-foreground">
              {isOnline 
                ? "Images sync automatically to the cloud and work across devices."
                : "Offline mode: Images saved locally only."
              }
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FragranceFilters;
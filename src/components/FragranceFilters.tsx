import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, X, Trash2, HardDrive } from "lucide-react";
import { useGlobalImageStorage } from "@/hooks/useGlobalImageStorage";
import { toast } from "sonner";

export interface FragranceFilters {
  seasons: string[];
  scentProfiles: string[];
  priceRange: [number, number];
  dupeAvailability: 'all' | 'originals' | 'clones';
  sortBy: string;
  searchQuery: string;
}

interface FragranceFiltersProps {
  filters: FragranceFilters;
  onFiltersChange: (filters: FragranceFilters) => void;
  isOpen: boolean;
  onToggle: () => void;
}

const seasons = ['Spring', 'Summer', 'Fall', 'Winter'];
const scentProfiles = [
  'Fresh', 'Sweet', 'Woody', 'Amber', 'Citrus', 'Oud', 
  'Aquatic', 'Spicy', 'Vanilla', 'Musky', 'Floral', 'Smoky',
  'Fruity', 'Ginger', 'Marine', 'Bold'
];

const sortOptions = [
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'savings-high', label: 'Best Savings' },
  { value: 'name', label: 'Alphabetical' }
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
      <div className="flex items-center justify-between md:hidden">
        <Button
          variant="outline"
          onClick={onToggle}
          className="flex items-center gap-2"
        >
          <Filter className="h-4 w-4" />
          Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
        </Button>
        <Select value={filters.sortBy} onValueChange={(value) => updateFilter('sortBy', value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            {sortOptions.map(option => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Search Bar - Always Visible */}
      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search fragrances, brands, designers, or niches..."
          value={filters.searchQuery}
          onChange={(e) => updateFilter('searchQuery', e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Filter Panel */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:block space-y-6`}>
        <Card className="bg-gradient-card border-border/50 backdrop-blur-sm">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg flex items-center gap-2">
                <Filter className="h-5 w-5" />
                Filters
                {activeFiltersCount > 0 && (
                  <Badge variant="secondary" className="ml-2">
                    {activeFiltersCount}
                  </Badge>
                )}
              </CardTitle>
              {activeFiltersCount > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearAllFilters}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X className="h-4 w-4 mr-1" />
                  Clear All
                </Button>
              )}
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Sort - Desktop Only */}
            <div className="hidden md:block">
              <Label className="text-sm font-semibold">Sort By</Label>
              <Select value={filters.sortBy} onValueChange={(value) => updateFilter('sortBy', value)}>
                <SelectTrigger className="w-full mt-2">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map(option => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Season Filters */}
            <div>
              <Label className="text-sm font-semibold">Season</Label>
              <div className="grid grid-cols-2 gap-3 mt-3">
                {seasons.map(season => (
                  <div key={season} className="flex items-center space-x-2">
                    <Checkbox
                      id={`season-${season}`}
                      checked={filters.seasons.includes(season)}
                      onCheckedChange={() => toggleSeason(season)}
                    />
                    <Label
                      htmlFor={`season-${season}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {season}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Scent Profile Filters */}
            <div>
              <Label className="text-sm font-semibold">Scent Profile</Label>
              <div className="grid grid-cols-2 gap-3 mt-3 max-h-48 overflow-y-auto">
                {scentProfiles.map(profile => (
                  <div key={profile} className="flex items-center space-x-2">
                    <Checkbox
                      id={`scent-${profile}`}
                      checked={filters.scentProfiles.includes(profile)}
                      onCheckedChange={() => toggleScentProfile(profile)}
                    />
                    <Label
                      htmlFor={`scent-${profile}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {profile}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div>
              <Label className="text-sm font-semibold">
                Price Range: €{filters.priceRange[0]} - €{filters.priceRange[1]}
              </Label>
              <div className="mt-3 px-2">
                <Slider
                  value={filters.priceRange}
                  onValueChange={(value) => updateFilter('priceRange', value)}
                  max={600}
                  min={25}
                  step={5}
                  className="w-full"
                />
              </div>
            </div>

            {/* Dupe Availability */}
            <div>
              <Label className="text-sm font-semibold">Availability</Label>
              <Select
                value={filters.dupeAvailability}
                onValueChange={(value) => updateFilter('dupeAvailability', value)}
              >
                <SelectTrigger className="w-full mt-2">
                  <SelectValue placeholder="Filter by availability" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Show All</SelectItem>
                  <SelectItem value="originals">Originals Only</SelectItem>
                  <SelectItem value="clones">Clones Available</SelectItem>
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
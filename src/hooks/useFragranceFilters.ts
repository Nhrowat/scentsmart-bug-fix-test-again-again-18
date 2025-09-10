import { useState, useMemo } from 'react';
import { FragranceFilters } from '@/components/FragranceFilters';

export interface Fragrance {
  name: string;
  brand: string;
  designer: string;
  niche: string;
  originalPrice: number;
  clonePrice: number;
  cloneName: string;
  scent: string;
  season: string;
  occasion: string;
  savings: number;
  available: boolean;
  tags: string[];
  fragranticaUrl?: string;
  notes?: {
    top: string[];
    heart: string[];
    base: string[];
  };
}

const defaultFilters: FragranceFilters = {
  seasons: [],
  scentProfiles: [],
  priceRange: [25, 600],
  dupeAvailability: 'all',
  sortBy: 'name',
  searchQuery: ''
};

export const useFragranceFilters = (fragrances: Fragrance[]) => {
  const [filters, setFilters] = useState<FragranceFilters>(defaultFilters);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredAndSortedFragrances = useMemo(() => {
    let filtered = fragrances.filter(fragrance => {
      // Search filter
      if (filters.searchQuery) {
        const query = filters.searchQuery.toLowerCase();
        const matchesSearch = 
          fragrance.name.toLowerCase().includes(query) ||
          fragrance.brand.toLowerCase().includes(query) ||
          fragrance.designer.toLowerCase().includes(query) ||
          fragrance.niche.toLowerCase().includes(query) ||
          fragrance.cloneName.toLowerCase().includes(query) ||
          fragrance.scent.toLowerCase().includes(query) ||
          fragrance.occasion.toLowerCase().includes(query) ||
          fragrance.tags.some(tag => tag.toLowerCase().includes(query)) ||
          (fragrance.notes?.top.some(note => note.toLowerCase().includes(query))) ||
          (fragrance.notes?.heart.some(note => note.toLowerCase().includes(query))) ||
          (fragrance.notes?.base.some(note => note.toLowerCase().includes(query)));
        if (!matchesSearch) return false;
      }

      // Season filter
      if (filters.seasons.length > 0) {
        const hasMatchingSeason = filters.seasons.some(season => 
          fragrance.tags.includes(season)
        );
        if (!hasMatchingSeason) return false;
      }

      // Scent profile filter
      if (filters.scentProfiles.length > 0) {
        const hasMatchingProfile = filters.scentProfiles.some(profile =>
          fragrance.tags.includes(profile)
        );
        if (!hasMatchingProfile) return false;
      }

      // Price range filter
      const price = fragrance.available ? fragrance.clonePrice : fragrance.originalPrice;
      if (price < filters.priceRange[0] || price > filters.priceRange[1]) {
        return false;
      }

      // Dupe availability filter
      if (filters.dupeAvailability === 'originals' && fragrance.available) {
        return false;
      }
      if (filters.dupeAvailability === 'clones' && !fragrance.available) {
        return false;
      }

      return true;
    });

    // Sort filtered results
    filtered.sort((a, b) => {
      switch (filters.sortBy) {
        case 'price-low':
          const priceA = a.available ? a.clonePrice : a.originalPrice;
          const priceB = b.available ? b.clonePrice : b.originalPrice;
          return priceA - priceB;
        case 'price-high':
          const priceA2 = a.available ? a.clonePrice : a.originalPrice;
          const priceB2 = b.available ? b.clonePrice : b.originalPrice;
          return priceB2 - priceA2;
        case 'savings-high':
          return b.savings - a.savings;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [fragrances, filters]);

  return {
    filters,
    setFilters,
    filteredFragrances: filteredAndSortedFragrances,
    isFilterOpen,
    setIsFilterOpen,
    totalCount: fragrances.length,
    filteredCount: filteredAndSortedFragrances.length
  };
};
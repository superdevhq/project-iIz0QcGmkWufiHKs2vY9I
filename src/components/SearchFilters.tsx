
import { useState, useEffect } from 'react';
import { Search, MapPin, Briefcase, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { JobType } from '@/lib/types';
import { getUniqueLocations, getJobTypes } from '@/lib/mockData';

interface SearchFiltersProps {
  onFilterChange: (filters: {
    search: string;
    location: string;
    type: JobType | '';
  }) => void;
  initialFilters?: {
    search?: string;
    location?: string;
    type?: JobType | '';
  };
}

const SearchFilters = ({ onFilterChange, initialFilters = {} }: SearchFiltersProps) => {
  const [search, setSearch] = useState(initialFilters.search || '');
  const [location, setLocation] = useState(initialFilters.location || '');
  const [type, setType] = useState<JobType | ''>(initialFilters.type || '');
  
  const locations = getUniqueLocations();
  const jobTypes = getJobTypes();
  
  // Apply filters when they change
  useEffect(() => {
    onFilterChange({ search, location, type });
  }, [search, location, type, onFilterChange]);
  
  const handleReset = () => {
    setSearch('');
    setLocation('');
    setType('');
  };
  
  const hasActiveFilters = search || location || type;

  return (
    <div className="bg-card border rounded-lg p-4 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Job title or company"
            className="pl-9"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        
        {/* Location Filter */}
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Select value={location} onValueChange={setLocation}>
            <SelectTrigger className="pl-9">
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-locations">All Locations</SelectItem>
              {locations.map((loc) => (
                <SelectItem key={loc} value={loc}>
                  {loc}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        {/* Job Type Filter */}
        <div className="relative">
          <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Select value={type} onValueChange={(value) => setType(value as JobType | '')}>
            <SelectTrigger className="pl-9">
              <SelectValue placeholder="Job Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-types">All Types</SelectItem>
              {jobTypes.map((jobType) => (
                <SelectItem key={jobType} value={jobType}>
                  {jobType}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      
      {/* Reset Filters Button */}
      {hasActiveFilters && (
        <div className="mt-4 flex justify-end">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={handleReset}
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4 mr-1" />
            Reset Filters
          </Button>
        </div>
      )}
    </div>
  );
};

export default SearchFilters;
